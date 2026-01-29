const fs = require('fs');
const path = require('path');

function walkDir(dir, arr = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkDir(p, arr);
    else if (p.endsWith('.js') || p.endsWith('.jsx')) arr.push(p);
  }
  return arr;
}

const src = path.join(__dirname, '..', 'src');
const files = walkDir(src);
const pkg = require(path.join(__dirname, '..', 'package.json'));
const deps = new Set(Object.keys(pkg.dependencies || {}));
const bare = new Set();

for (const f of files) {
  const s = fs.readFileSync(f, 'utf8');
  const re = /from\s+["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(s))) {
    const mod = m[1];
    if (!mod.startsWith('./') && !mod.startsWith('../') && !mod.startsWith('/')) bare.add(mod);
  }
  const re2 = /require\(\s*["']([^"']+)["']\s*\)/g;
  while ((m = re2.exec(s))) {
    const mod = m[1];
    if (!mod.startsWith('./') && !mod.startsWith('../') && !mod.startsWith('/')) bare.add(mod);
  }
}

console.log('Found bare imports:');
console.log(Array.from(bare).sort().join('\n'));
console.log('\nMissing in package.json:');
for (const b of Array.from(bare).sort()) {
  if (!deps.has(b)) console.log(b);
}
