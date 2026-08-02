#SHOW PASS WIFI
[CMD]
1. netsh wlan show profiles
2. netsh wlan show profile name="tên"key=clear
[POWER SHELL]
(netsh wlan show profiles) | Select-String "\:(.+)$" | %{$network=$_.Matches.Groups[1].Value.Trim(); $_} | %{(netsh wlan show profile name="$network" key=clear)} | Select-String "Key Content\W+\:(.+)$" | %{$password=$_.Matches.Groups[1].Value.Trim(); $_} | %{[PSCustomObject]@{ NETWORK_NAME=$network;PASSWORD=$password }} | Format-Table -AutoSize
****************************************************
#CHECK WIN
[RUN]
        slmgr.vbs /xpr
	slmgr/dli
****************************************************
#KMS ACTIVE
	slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
	slmgr /skms kms.digiboy.ir
	slmgr /ato
#OFFICE ACTIVE
	cd\Program Files\Microsoft Office\Office16
	cscript OSPP.VBS /sethst:kms.digiboy.ir
	slmgr.vbs /ckms
(X86)
	cd\Program Files (x86)\Microsoft Office\Office16
	cscript OSPP.VBS /actcscript OSPP.VBS /dstatus
	slmgr.vbs /ckms

#OTHER
POWERSHELL (ADMIN)
	irm https://get.activated.win |iex
********************************************************
#DUAL APPS
	Tạo user máy tính thứ 2
	coppy app folder sang chỗ khác để nhân bản
	tạo shortcut -> vào shortcut sửa location
		C:\Windows\System32\runas.exe /savecred /user:ten_pc\user2 x:\xxx\app.exe

*****************************************************

#Hash
powerShell
	Get-FileHash -Path E:64.iso -Algorithm SHA1

*************************************************
#Install .CAB
	dism /Online /Add-Package /PackagePath:"file.cab"

*************************************************
#CUSTOM OFFICE
	https://config.office.com/deploymentsettings
	https://www.microsoft.com/en-us/download/details.aspx?id=49117
	==>cmd(admin): cd C:\user\offi ==>setup /configure offi.xml

**************************************************
#Mở_RDP_cho_IP_chỉ_định=====>powershell

New-NetFirewallRule `
  -Name "Allow_ICMP_From_Admin" `
  -DisplayName "Allow ICMP from admin only" `
  -Protocol ICMPv4 `
  -IcmpType 8 `
  -Direction Inbound `
  -Action Allow `
  -RemoteAddress 192.168.100.166

#Mở_RDP_cho_tất_cả_IP============Powershell
	Set-NetFirewallRule -Name "Allow_ICMP_From_Admin" -RemoteAddress Any

**************************************************
#Gỡ_RDP_cho_IP_chỉ_định
======>powershell
	Remove-NetFirewallRule -Name "Allow_ICMP_From_Admin"

======>hoặc
Firewall Rule
	Vào Windows Defender Firewall with Advanced Security → Inbound Rules → tìm rule Remote Desktop (TCP-In).
	Mở Properties → tab Scope.
	Nếu trong “Remote IP address” có list IP cụ thể → chuyển lại thành Any IP address hoặc xóa list.

**************************************************
#Sửa_lỗi_1053_service

Rồi 👍 đây là đoạn CMD script để mày copy cả 2 DLL (zkemkeeper.dll, commpro.dll) vào SysWOW64 rồi đăng ký lại luôn:
	:: Mở CMD dưới quyền Administrator rồi chạy
	:: Thư mục chứa DLL gốc (chỉnh lại cho đúng chỗ file của mày)
	set SRC="C:\Program Files (x86)\VNB GROUP\Service"
	:: Thư mục SysWOW64
	set DEST=C:\Windows\SysWOW64
	:: Copy DLL vào SysWOW64 (ghi đè nếu có)
	copy %SRC%\zkemkeeper.dll %DEST% /Y
	copy %SRC%\commpro.dll %DEST% /Y
	:: Đăng ký lại zkemkeeper.dll
	cd %DEST%
	regsvr32 zkemkeeper.dll

📌 Sau khi chạy xong:
	Sẽ có popup báo DllRegisterServer in zkemkeeper.dll succeeded.
	commpro.dll không cần regsvr32, chỉ cần để chung với zkemkeeper.dll để nó load.

**************************************************
#Dùng_RDP_nhiều_session_đồng_thời
	+ Tải + cài RDP Wrapper (bản chính / installer)
	+ Vào thư mục giải nén, chuột phải install.bat → Run as administrator.
	+ Mở RDPConf.exe (hoặc RDPConf) để kiểm tra trạng thái (Installed, Running, Listening). Nếu báo “Not supported” bước tiếp theo là thay rdpwrap.ini
	+ C:\Program Files\RDP Wrapper\rdpwrap.ini (https://raw.githubusercontent.com/sebaxakerhtc/rdpwrap.ini/master/rdpwrap.ini)
	+ Khởi động lại services RDS (cmd)
		net stop termservice
		net start termservice

**************************************************
#Gói_MTU_cho_mạng_chống_fragmentation
Gói mặc định thường để 1500byte, nhưng không phù hợp với một số mạng đặc biệt là PPPoE
	test gói MTU thông thì lấy 1500 - 28byte = payload
	một số kích thước test payload:  = MTU - 28: nếu test lỗi thì nhảy cóc 8 byte, sau khi khoanh vùng ok thì giảm bước nhảy về 1 byte để lấy giá trị max: 1472, 1464, 1456, 1452,...
	ping google.com -f -l 1472 -> ok thì cộng lại 28 sẽ ra MTU cần set. có thể sẽ cần thêm MSS nếu router hỗ trợ
	Vì sao cần MSS?
	-MSS (Maximum Segment Size) là kích thước dữ liệu TCP tối đa trong một gói.
	-Nó liên quan chặt với MTU:
	-MSS = MTU - 40
		(40 byte header TCP + IP).
		Nếu MTU = 1480 → MSS = 1440.

**************************************************
#_Mở_ping/SMB
	Powershell ====> cho phép ICMPv4 inbound (echo)
	New-NetFirewallRule -DisplayName "Allow ICMPv4-In" -Protocol ICMPv4 -IcmpType 8 -Direction Inbound -Action Allow -Profile Any
	
	SMB:
	Enable-NetFirewallRule -DisplayGroup "File and Printer Sharing"
	Enable-NetFirewallRule -DisplayGroup "Network Discovery"
	Set-NetFirewallProfile -Profile Domain,Private -Enabled True
	Enable-NetFirewallRule -Name FPS-ICMP4-ERQ-In

**************************************************
#_Disable reserved storaged Win11
CMD -> admin
	DISM /Online /Set-ReservedStorageState /State:Disabled

**************************************************
Username Windows: run - netplwiz

**************************************************
#_INSTALL_net_framework_.net_3.5
	+ Mount iso windows
	+ cmd_powershell: dism /online /enable-feature /featurename:NetFx3 /All /Source:D:\sources\sxs /LimitAccess

***************************************************
#_SSH_
	with_port_#22:
		ssh -p 1101 ducdv@192.168.11.6
	remove_connect_vnc:
		sudo pkill loginwindow
****************************************************

#Tailscale subnet
	sudo tailscale set --advertise-routes=192.168.11.0/24