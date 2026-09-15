@echo off
title MAA VAISHNO COMMUNICATION - Store Website Launcher
cd /d "%~dp0"

echo =========================================================
echo   MAA VAISHNO COMMUNICATION - STORE WEBSITE LAUNCHER
echo =========================================================
echo.
echo Starting all store servers (Ports 8000, 5500, 3000, 8080)...

:: Check if server is already listening on port 8000
netstat -ano | findstr ":8000" >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    start /min "MAA_Vaishno_Store_MultiServer" cmd /k "cd /d "%~dp0" && (python start_all_servers.py || py start_all_servers.py)"
    timeout /t 2 /nobreak >nul
) else (
    echo Store server is already active!
)

echo Opening site in default browser...
start "" "http://127.0.0.1:8000"

exit

