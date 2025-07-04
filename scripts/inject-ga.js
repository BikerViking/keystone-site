import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildIndexPath = path.join(__dirname, '../build/index.html');
const gaId = process.env.REACT_APP_GA_ID;

if (!gaId) {
  console.warn('REACT_APP_GA_ID not set; skipping GA ID injection.');
  process.exit(0);
}

try {
  let html = fs.readFileSync(buildIndexPath, 'utf8');
  html = html.replace(/GA_MEASUREMENT_ID/g, gaId);
  fs.writeFileSync(buildIndexPath, html);
  console.log(`Injected Google Analytics ID ${gaId} into build/index.html`);
} catch (err) {
  console.error('Failed to inject GA ID:', err);
  process.exit(1);
}
