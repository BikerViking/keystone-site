const { execSync } = require('node:child_process');
const {
  rmSync,
  mkdirSync,
  copyFileSync,
  readFileSync,
  writeFileSync,
} = require('node:fs');

function run(cmd) {
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (err) {
    process.stderr.write(`Error running: ${cmd}\n${err.message}\n`);
    process.exit(1);
  }
}

try {
  rmSync('dist', { recursive: true, force: true });
  mkdirSync('dist');
  run('npx eleventy --input templates --output dist --quiet');
  copyFileSync('dist/index.html', 'index.html');
  run(
    'npx tailwindcss -c tailwind-config.js -i src/styles.css -o dist/styles.css --minify',
  );


  copyFileSync('dist/styles.css', 'styles.css');
  run('npx esbuild main.js --bundle --minify --outfile=dist/main.js');
} catch (err) {
  process.stderr.write(`${err.message}\n`);
  process.exit(1);
}
