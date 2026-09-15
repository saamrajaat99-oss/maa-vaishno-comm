import http.server
import socketserver
import threading
import socket
import time
import os
import sys

DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class RobustHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def log_message(self, format, *args):
        # Suppress noisy HTTP logs in background thread
        pass

class IPv4TCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    address_family = socket.AF_INET

class IPv6TCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    address_family = socket.AF_INET6

def start_port_server(port):
    # 1. Bind IPv4 (0.0.0.0 & 127.0.0.1)
    try:
        server_v4 = IPv4TCPServer(("0.0.0.0", port), RobustHTTPRequestHandler)
        t_v4 = threading.Thread(target=server_v4.serve_forever, daemon=True)
        t_v4.start()
        print(f"MAA VAISHNO STORE IPv4 Server running on http://127.0.0.1:{port}", flush=True)
    except Exception as e:
        print(f"IPv4 bind failed on port {port}: {e}", flush=True)

    # 2. Bind IPv6 (::1 / localhost)
    if hasattr(socket, 'AF_INET6'):
        try:
            server_v6 = IPv6TCPServer(("::1", port), RobustHTTPRequestHandler)
            t_v6 = threading.Thread(target=server_v6.serve_forever, daemon=True)
            t_v6.start()
            print(f"MAA VAISHNO STORE IPv6 Server running on http://localhost:{port}", flush=True)
        except Exception:
            pass

PORTS = [8000, 5500, 3000, 8080]

if __name__ == "__main__":
    for p in PORTS:
        start_port_server(p)

    print("All store server ports active for IPv4 (127.0.0.1) & IPv6 (localhost)!", flush=True)
    while True:
        time.sleep(3600)
