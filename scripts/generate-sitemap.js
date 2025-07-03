const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '../src/App.js');
const publicDir = path.join(__dirname, '../public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');
const robotsPath = path.join(publicDir, 'robots.txt');

function getRoutes() {
  const content = fs.readFileSync(appJsPath, 'utf8');
  const regex = /<Route\s+path=\"([^\"*]+)\"/g;
  const routes = [];
  let match;
  while ((match = regex.exec(content))) {
    routes.push(match[1]);
  }
  return Array.from(new Set(routes));
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

if (require.main === module) {
  main();
}
