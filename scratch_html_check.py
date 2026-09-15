import html.parser

class HTMLValidator(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.errors = []
        self.void_elements = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}

    def handle_starttag(self, tag, attrs):
        if tag.lower() not in self.void_elements:
            self.stack.append((tag.lower(), self.getpos()))

    def handle_endtag(self, tag):
        tag_lower = tag.lower()
        if tag_lower in self.void_elements:
            return
        if not self.stack:
            self.errors.append(f"Unexpected end tag </{tag}> at {self.getpos()}")
            return
        last_tag, pos = self.stack.pop()
        if last_tag != tag_lower:
            self.errors.append(f"Mismatched tag </{tag}> at {self.getpos()}, expected </{last_tag}> opened at {pos}")

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

parser = HTMLValidator()
parser.feed(content)

print(f"HTML Parse check finished. Errors found: {len(parser.errors)}")
for err in parser.errors[:10]:
    print(" - ", err)
if parser.stack:
    print(f"Unclosed tags left: {len(parser.stack)}")
    for t, p in parser.stack[-10:]:
        print(f" - <{t}> opened at {p}")
