const { execSync } = require('node:child_process');
const { rmSync, mkdirSync, copyFileSync } = require('node:fs');

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');

execSync(
  'npx tailwindcss -c tailwind-config.js -i src/styles.css -o dist/styles.css --minify --content index.html',
  { stdio: 'inherit' }
);

copyFileSync('dist/styles.css', 'styles.css');

execSync('npx esbuild main.js --bundle --minify --outfile=dist/main.js', { stdio: 'inherit' });

copyFileSync('index.html', 'dist/index.html');

