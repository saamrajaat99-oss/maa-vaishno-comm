import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

ids_in_html = set(re.findall(r'id=["\']([^"\']+)["\']', html))
ids_in_js = set(re.findall(r'document\.getElementById\(["\']([^"\']+)["\']\)', js))

missing_in_html = ids_in_js - ids_in_html
print('IDs referenced in JS but MISSING in HTML:', missing_in_html)

# Find all addEventListener calls on document.getElementById
listeners = re.findall(r'document\.getElementById\(["\']([^"\']+)["\']\)\.addEventListener', js)
print('IDs with addEventListener in JS:', listeners)
for lid in listeners:
    if lid not in ids_in_html:
        print('CRITICAL BUG: Listener attached to non-existent HTML ID:', lid)
