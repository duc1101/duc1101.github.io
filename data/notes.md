================ SHOW PASS WIFI ================
#XEM PROFILE WIFI ------------------------------
[-cmd-]
	netsh wlan show profiles

#XEM PASS 1 MẠNG -------------------------------
[-cmd-]
	(thay "tên" bằng tên wifi cần xem)
	netsh wlan show profile name="tên" key=clear

#XEM PASS TẤT CẢ MẠNG (1 LỆNH) -----------------
[-powershell-]
	(netsh wlan show profiles) | Select-String "\:(.+)$" | %{$network=$_.Matches.Groups[1].Value.Trim(); $_} | %{(netsh wlan show profile name="$network" key=clear)} | Select-String "Key Content\W+\:(.+)$" | %{$password=$_.Matches.Groups[1].Value.Trim(); $_} | %{[PSCustomObject]@{ NETWORK_NAME=$network;PASSWORD=$password }} | Format-Table -AutoSize

================ CHECK WINDOWS =================
[-run-]
	slmgr.vbs /xpr
	slmgr /dli

================== KMS ACTIVE ==================
[-cmd-]
	slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
	slmgr /skms kms.digiboy.ir
	slmgr /ato

#OFFICE ACTIVE ---------------------------------
[-cmd-]
	(x64)
	cd\Program Files\Microsoft Office\Office16
	cscript OSPP.VBS /sethst:kms.digiboy.ir
	slmgr.vbs /ckms

	(x86)
	cd\Program Files (x86)\Microsoft Office\Office16
	cscript OSPP.VBS /act
	cscript OSPP.VBS /dstatus
	slmgr.vbs /ckms

#MAS -----------------------
[-powershell (admin)-]
	irm https://get.activated.win |iex

======= DUAL APPS (CHẠY SONG SONG 2 ACC) =======
	- Tạo user máy tính thứ 2
	- Copy app folder sang chỗ khác để nhân bản
	- Tạo shortcut -> vào shortcut sửa Target/Location:

[-target shortcut-]
	C:\Windows\System32\runas.exe /savecred /user:ten_pc\user2 x:\xxx\app.exe

================== HASH FILE ===================
[-powershell-]
	Get-FileHash -Path E:\64.iso -Algorithm SHA1

============== INSTALL FILE .CAB ===============
[-cmd-]
	dism /Online /Add-Package /PackagePath:"file.cab"

======= CUSTOM OFFICE (DEPLOYMENT TOOL) ========
	- Trang tạo cấu hình: https://config.office.com/deploymentsettings
	- Trang tải Office Deployment Tool: https://www.microsoft.com/en-us/download/details.aspx?id=49117

[-cmd (admin)-]
	cd C:\user\offi
	setup /configure offi.xml

============ MỞ RDP CHO IP CHỈ ĐỊNH ============
[-powershell-]
	New-NetFirewallRule `
	  -Name "Allow_ICMP_From_Admin" `
	  -DisplayName "Allow ICMP from admin only" `
	  -Protocol ICMPv4 `
	  -IcmpType 8 `
	  -Direction Inbound `
	  -Action Allow `
	  -RemoteAddress 192.168.100.166

#MỞ RDP CHO TẤT CẢ IP --------------------------
[-powershell-]
	Set-NetFirewallRule -Name "Allow_ICMP_From_Admin" -RemoteAddress Any

============ GỠ RDP CHO IP CHỈ ĐỊNH ============
[-powershell-]
	Remove-NetFirewallRule -Name "Allow_ICMP_From_Admin"

#CÁCH KHÁC (GIAO DIỆN FIREWALL) ----------------
	- Vào Windows Defender Firewall with Advanced Security → Inbound Rules → tìm rule Remote Desktop (TCP-In)
	- Mở Properties → tab Scope
	- Nếu trong "Remote IP address" có list IP cụ thể → chuyển lại thành Any IP address hoặc xóa list

==== SỬA LỖI 1053 SERVICE (zkemkeeper.dll) =====
	Copy 2 DLL (zkemkeeper.dll, commpro.dll) vào SysWOW64 rồi đăng ký lại.

[-cmd (admin)-]
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

#GHI CHÚ SAU KHI CHẠY --------------------------
	- Sẽ có popup báo "DllRegisterServer in zkemkeeper.dll succeeded"
	- commpro.dll không cần regsvr32, chỉ cần để chung với zkemkeeper.dll để nó load

======= DÙNG RDP NHIỀU SESSION ĐỒNG THỜI =======
	- Tải + cài RDP Wrapper (bản chính / installer)
	- Vào thư mục giải nén, chuột phải install.bat → Run as administrator
	- Mở RDPConf.exe (hoặc RDPConf) để kiểm tra trạng thái (Installed, Running, Listening)
	- Nếu báo "Not supported" → thay file rdpwrap.ini:
	  C:\Program Files\RDP Wrapper\rdpwrap.ini
	  (nguồn: https://raw.githubusercontent.com/sebaxakerhtc/rdpwrap.ini/master/rdpwrap.ini)

#KHỞI ĐỘNG LẠI SERVICE RDS ---------------------
[-cmd-]
	net stop termservice
	net start termservice

========= GÓI MTU CHỐNG FRAGMENTATION ==========
	Gói mặc định thường để 1500 byte, nhưng không phù hợp với một số mạng đặc biệt (nhất là PPPoE).
	- Test gói MTU thông thì lấy: 1500 - 28 byte = payload
	- Một số kích thước test payload = MTU - 28: nếu test lỗi thì nhảy cóc 8 byte,
	  sau khi khoanh vùng ok thì giảm bước nhảy về 1 byte để lấy giá trị max:
	  1472, 1464, 1456, 1452,...

[-cmd-]
	ping google.com -f -l 1472
	(-> nếu ok thì cộng lại 28 sẽ ra MTU cần set. có thể sẽ cần thêm MSS nếu router hỗ trợ)

#VÌ SAO CẦN MSS? -------------------------------
	- MSS (Maximum Segment Size) là kích thước dữ liệu TCP tối đa trong một gói
	- Nó liên quan chặt với MTU: MSS = MTU - 40 (40 byte header TCP + IP)
	- Ví dụ: Nếu MTU = 1480 → MSS = 1440

================ MỞ PING / SMB =================
#CHO PHÉP ICMPv4 INBOUND (ECHO) ----------------
[-powershell-]
	New-NetFirewallRule -DisplayName "Allow ICMPv4-In" -Protocol ICMPv4 -IcmpType 8 -Direction Inbound -Action Allow -Profile Any

#MỞ SMB ----------------------------------------
[-powershell-]
	Enable-NetFirewallRule -DisplayGroup "File and Printer Sharing"
	Enable-NetFirewallRule -DisplayGroup "Network Discovery"
	Set-NetFirewallProfile -Profile Domain,Private -Enabled True
	Enable-NetFirewallRule -Name FPS-ICMP4-ERQ-In

======== DISABLE RESERVED STORAGE WIN11 ========
[-cmd (admin)-]
	DISM /Online /Set-ReservedStorageState /State:Disabled

=============== USERNAME WINDOWS ===============
[-run-]
	netplwiz

========== INSTALL .NET FRAMEWORK 3.5 ==========
	- Mount file ISO Windows
	- Chạy lệnh:

[-cmd/powershell-]
	dism /online /enable-feature /featurename:NetFx3 /All /Source:D:\sources\sxs /LimitAccess

===================== SSH ======================
#KẾT NỐI VỚI PORT CHỈ ĐỊNH (VD #22) ------------
[-cmd-]
	ssh -p 1101 ducdv@192.168.11.6

#GỠ KẾT NỐI VNC --------------------------------
[-cmd (macos)-]
	sudo pkill loginwindow

=============== TAILSCALE SUBNET ===============
[-cmd-]
	sudo tailscale set --advertise-routes=192.168.11.0/24