import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const appJsPath = path.join(__dirname, '../src/App.jsx');
const publicDir = path.join(__dirname, '../public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');
const robotsPath = path.join(publicDir, 'robots.txt');

function getRoutes() {
  const content = fs.readFileSync(appJsPath, 'utf8');
  const pathRegex = /path:\s*['"]([^'"*]+)['"]/g;
  const routes = new Set();
  let match;
  while ((match = pathRegex.exec(content))) {
    const p = match[1];
    if (p !== '*') {
      routes.add(p.startsWith('/') ? p : `/${p}`);
    }
  }
  if (/index:\s*true/.test(content)) {
    routes.add('/');
  }
  return Array.from(routes);
}

function generateSitemap(routes) {
  const rawBase = process.env.SITEMAP_BASE_URL || 'http://localhost';
  // Remove any trailing slash to avoid double slashes in URLs
  const base = rawBase.replace(/\/$/, '');
  const urls = routes.map(r => {
    const loc = r === '/' ? base : `${base}${r}`;
    return `  <url><loc>${loc}</loc></url>`;
  }).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function generateRobots() {
  return `User-agent: *\nAllow: /\nSitemap: /sitemap.xml\n`;
}

function main() {
  const routes = getRoutes();
  const xml = generateSitemap(routes);
  fs.writeFileSync(sitemapPath, xml);
  fs.writeFileSync(robotsPath, generateRobots());
  console.log('Sitemap and robots.txt generated');
}

main();
