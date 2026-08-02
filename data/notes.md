<?php
header('Content-Type: application/json; charset=utf-8');

// Cấu hình log
$logFile = __DIR__ . '/../wol-data/wol.log';
$clientIp = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

// Thêm tham số $isFinal để quyết định có kẻ dòng phân cách hay không
function writeLog($message, $logFile, $clientIp, $isFinal = false) {
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "[$timestamp] [IP: $clientIp] $message\n";
    
    $oldContent = file_exists($logFile) ? file_get_contents($logFile) : '';
    
    if ($isFinal) {
        $separator = "--------------------------------------\n";
        // Ghi: Dòng phân cách + Log kết quả + Log cũ
        file_put_contents($logFile, $separator . $logEntry . $oldContent, LOCK_EX);
    } else {
        // Chỉ ghi log thông thường (INFO) nối vào đầu
        file_put_contents($logFile, $logEntry . $oldContent, LOCK_EX);
    }
}

$devicesFile = __DIR__ . '/../wol-data/devices.json';
if (!file_exists($devicesFile)) {
    writeLog("ERROR: Thiếu file devices.json", $logFile, $clientIp, true);
    echo json_encode(['success' => false, 'message' => 'Lỗi hệ thống']);
    exit;
}

$devices = json_decode(file_get_contents($devicesFile), true);
$deviceName = isset($_POST['device_name']) ? trim(strtolower($_POST['device_name'])) : '';

if (empty($deviceName)) {
    writeLog("WARNING: Request trống tên thiết bị", $logFile, $clientIp, true);
    echo json_encode(['success' => false, 'message' => 'Vui lòng nhập tên thiết bị']);
    exit;
}

if (!isset($devices[$deviceName])) {
    writeLog("WARNING: Không tìm thấy thiết bị '$deviceName'", $logFile, $clientIp, true);
    echo json_encode(['success' => false, 'message' => "Không tìm thấy '$deviceName'"]);
    exit;
}

$mac = $devices[$deviceName]['mac'];
$ip = $devices[$deviceName]['ip'];

// Log INFO không kẻ dòng phân cách (isFinal = false)
writeLog("INFO: Kích hoạt WoL cho '$deviceName' (MAC: $mac, IP: $ip)", $logFile, $clientIp, false);

// Thực thi Python script
$pythonPath = '/usr/bin/python3'; 
$scriptPath = __DIR__ . '/wol.py';

$command = sprintf('%s %s %s %s 2>&1', 
    escapeshellarg($pythonPath), 
    escapeshellarg($scriptPath), 
    escapeshellarg($mac), 
    escapeshellarg($ip)
);

$output = shell_exec($command);

if (strpos($output, 'thành công') !== false) {
    // Log SUCCESS có kẻ dòng phân cách (isFinal = true)
    writeLog("SUCCESS: WoL thành công đến $ip", $logFile, $clientIp, true);
    echo json_encode(['success' => true, 'message' => "Đã đánh thức $deviceName ($ip) thành công!"]);
} else {
    // Log ERROR có kẻ dòng phân cách (isFinal = true)
    writeLog("ERROR: WoL thất bại - $output", $logFile, $clientIp, true);
    echo json_encode(['success' => false, 'message' => "Lỗi: " . trim($output)]);
}
?>