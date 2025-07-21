const { execSync } = require('node:child_process');
const { rmSync, mkdirSync, copyFileSync, readFileSync, writeFileSync } = require('node:fs');

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');

execSync('npx eleventy --input templates --output dist --quiet', { stdio: 'inherit' });
copyFileSync('dist/index.html', 'index.html');

execSync(
  'npx tailwindcss -c tailwind-config.js -i src/styles.css -o dist/styles.css --minify --content dist/index.html',
  { stdio: 'inherit' }
);

const baseCss = readFileSync('src/base.css', 'utf8');
const distStyles = readFileSync('dist/styles.css', 'utf8');
writeFileSync('dist/styles.css', `${distStyles}\n${baseCss}`);

copyFileSync('dist/styles.css', 'styles.css');

execSync('npx esbuild main.js --bundle --minify --outfile=dist/main.js', { stdio: 'inherit' });


