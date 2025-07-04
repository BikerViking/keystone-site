import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');
const assetsDir = path.join(distDir, 'assets');
const manifestPath = path.join(distDir, 'asset-manifest.json');

function buildManifest() {
  if (!fs.existsSync(assetsDir)) {
    console.error('Assets directory not found. Run `npm run build` first.');
    process.exit(1);
  }

  const files = fs.readdirSync(assetsDir).filter(f => !f.endsWith('.map'));
  const manifest = {
    files: Object.fromEntries(files.map(f => [f, `/assets/${f}`]))
  };

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`Generated ${manifestPath}`);
}

buildManifest();
