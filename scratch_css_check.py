import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Check key selectors in CSS
selectors = [
    '#hero-floating-stage',
    '.floating-phones-wrap',
    '.orbit-ring-stage-3d',
    '.floating-phone-card-3d',
    '#phone-grid-container',
    '.phone-grid',
    '.phone-card',
    '.cursor-glow',
    '#main-header'
]

for sel in selectors:
    found = sel in css
    print(f"Selector '{sel}' in CSS: {found}")
