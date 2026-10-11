// Builds the static site for GitHub Pages into site/.
// project/ stays the source of truth; the only change is the asset path,
// which is relative to project/ and must be relative to the site root here.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const site = path.join(root, 'site');

fs.rmSync(site, { recursive: true, force: true });
fs.mkdirSync(path.join(site, 'assets'), { recursive: true });

const html = fs.readFileSync(path.join(root, 'project', 'Main.dc.html'), 'utf8');
const out = html.split('url(../assets/').join('url(assets/');
if (out === html) throw new Error('asset path not found in Main.dc.html');
fs.writeFileSync(path.join(site, 'index.html'), out);

for (const f of fs.readdirSync(path.join(root, 'assets'))) {
  fs.copyFileSync(path.join(root, 'assets', f), path.join(site, 'assets', f));
}

fs.copyFileSync(path.join(root, 'project', 'support.js'), path.join(site, 'support.js'));
fs.writeFileSync(path.join(site, 'CNAME'), 'dev.annlucchini.com\n');
fs.writeFileSync(path.join(site, '.nojekyll'), '');
console.log('site/ built');
