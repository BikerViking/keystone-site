const { execSync } = require('node:child_process');
const { rmSync, mkdirSync, copyFileSync, readFileSync, writeFileSync } = require('node:fs');

function run(cmd) {
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Error running: ${cmd}`);
    console.error(err.message);
    process.exit(1);
  }
}

try {
  rmSync('dist', { recursive: true, force: true });
  mkdirSync('dist');
  run('npx eleventy --input templates --output dist --quiet');
  copyFileSync('dist/index.html', 'index.html');
  run('npx tailwindcss -c tailwind-config.js -i src/styles.css -o dist/styles.css --minify --content dist/index.html');

  const baseCss = readFileSync('src/base.css', 'utf8');
  const distStyles = readFileSync('dist/styles.css', 'utf8');
  writeFileSync('dist/styles.css', `${distStyles}\n${baseCss}`);

  copyFileSync('dist/styles.css', 'styles.css');
  run('npx esbuild main.js --bundle --minify --outfile=dist/main.js');
} catch (err) {
  console.error(err.message);
  process.exit(1);
}


