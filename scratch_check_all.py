import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

html_ids = set(re.findall(r'id=["\']([^"\']+)["\']', html))
js_ids = set(re.findall(r'document\.getElementById\(["\']([^"\']+)["\']\)', js))

missing = js_ids - html_ids
print("ALL IDs in JS missing from HTML:", sorted(list(missing)))
for m in sorted(list(missing)):
    lines = [i+1 for i, line in enumerate(js.splitlines()) if m in line]
    print(f"  - '{m}' missing in HTML! Referenced in app.js on lines: {lines}")
