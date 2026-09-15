with open('styles.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines, 1):
    if any(k in line for k in ['floating', 'orbit', 'phone-card', 'phone-grid', 'stage', '3d', 'inspector']):
        print(f"L{i}: {line.strip()}")
