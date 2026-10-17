#!/usr/bin/env python3
"""Bundle the site into ONE self-contained HTML file (CSS, JS and local images inlined).
   Usage:  python3 build.py [output]      default output: dist/index.html
   Use the normal folder (index.html + assets/) for real hosting such as GitHub Pages;
   the single file is handy for previews, sending over chat, or hosts that only take one file."""
import base64, mimetypes, os, re, sys
ROOT = os.path.dirname(os.path.abspath(__file__))
out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'dist', 'index.html')
read = lambda p: open(os.path.join(ROOT, p), encoding='utf-8').read()
source = sys.argv[2] if len(sys.argv) > 2 else 'index.html'
html = read(source)
# Font is embedded in CSS below; omit the source-only preload in the bundle.
html = re.sub(r'<link rel="preload" href="assets/fonts/[^"]+"[^>]*>\s*', '', html)
cache = {}
def data_uri(path):
    if path not in cache:
        mime = mimetypes.guess_type(path)[0] or ('image/webp' if path.endswith('.webp') else 'application/octet-stream')
        cache[path] = 'data:%s;base64,%s' % (mime, base64.b64encode(open(os.path.join(ROOT, path), 'rb').read()).decode())
    return cache[path]
def css_inline(path):
    css = read(path)
    css = re.sub(r"url\(['\"]?\.\./fonts/([^)'\"]+)['\"]?\)", lambda m: 'url(' + data_uri('assets/fonts/' + m.group(1)) + ')', css)
    return re.sub(r'url\(\.\./img/([^)]+)\)', lambda m: 'url(' + data_uri('assets/img/' + m.group(1)) + ')', css)
html = re.sub(r'<link rel="stylesheet" href="(assets/[^"?]+\.css)(?:\?v=\w+)?">', lambda m: '<style>\n' + css_inline(m.group(1)) + '\n</style>', html)
html = re.sub(r'<script src="(assets/[^"?]+\.js)(?:\?v=\w+)?" defer></script>', '', html)          # moved to end of body
scripts = re.findall(r'assets/js/[\w.-]+\.js', read(source))
body_js = ''.join('<script>\n' + read(s) + '\n</script>\n' for s in scripts)
html = html.replace('</body>', body_js + '</body>')
html = re.sub(r'(src|href)="(assets/img/[^"'"'"'+]+)"', lambda m: '%s="%s"' % (m.group(1), data_uri(m.group(2))) if os.path.exists(os.path.join(ROOT, m.group(2))) else m.group(0), html)
# Responsive source candidates must be embedded too; otherwise picture/source
# and img/srcset choose missing dist/assets paths on phones and larger screens.
def embed_srcset(match):
    candidates = []
    for candidate in match.group(1).split(','):
        parts = candidate.strip().split(None, 1)
        if not parts:
            continue
        path = parts[0]
        if path.startswith('assets/img/') and os.path.isfile(os.path.join(ROOT, path)):
            path = data_uri(path)
        candidates.append(path + (' ' + parts[1] if len(parts) > 1 else ''))
    return 'srcset="' + ', '.join(candidates) + '"'
html = re.sub(r'srcset="([^"]+)"', embed_srcset, html)
os.makedirs(os.path.dirname(os.path.abspath(out)), exist_ok=True)
open(out, 'w', encoding='utf-8').write(html)
print('built', out, round(len(html.encode()) / 1024), 'KB')

# Build the standalone rules alongside the home preview.
if source == 'index.html' and os.path.exists(os.path.join(ROOT, 'rules.html')):
    import subprocess
    subprocess.run([sys.executable, os.path.abspath(__file__), os.path.join(os.path.dirname(os.path.abspath(out)), 'rules.html'), 'rules.html'], check=True)

# Keep the original downloadable document beside bundled previews.
import shutil
docs_out = os.path.join(os.path.dirname(os.path.abspath(out)), "assets", "docs")
os.makedirs(docs_out, exist_ok=True)
shutil.copyfile(os.path.join(ROOT, "assets", "docs", "competition-rules.docx"), os.path.join(docs_out, "competition-rules.docx"))
