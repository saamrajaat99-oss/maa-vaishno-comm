Set WshShell = CreateObject("WScript.Shell")
strCurDir = WshShell.CurrentDirectory

' Start multi-port Python server silently if not already running
WshShell.Run "cmd /c cd /d """ & strCurDir & """ && (python start_all_servers.py || py start_all_servers.py)", 0, False

' Pause 2 seconds for port binding
WScript.Sleep 2000

' Open store site in default browser
WshShell.Run "http://127.0.0.1:8000"
