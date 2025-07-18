const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

const distDir = path.join(__dirname, 'dist');
const staticDir = fs.existsSync(distDir) ? distDir : __dirname;

function computeScriptHashes() {
  const assetsDir = path.join(distDir, 'assets');
  if (!fs.existsSync(assetsDir)) return [];
  return fs
    .readdirSync(assetsDir)
    .filter((f) => f.endsWith('.js'))
    .map((file) => {
      const data = fs.readFileSync(path.join(assetsDir, file));
      const hash = require('crypto').createHash('sha256').update(data).digest('base64');
      return `'sha256-${hash}'`;
    });
}

const scriptHashes = computeScriptHashes();

app.use(express.static(staticDir, {
  setHeaders(res, filePath) {
    const isHtml = path.extname(filePath) === '.html';
    res.setHeader('Cache-Control', isHtml ? 'public,max-age=0' : 'public,max-age=31536000,immutable');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains');
    const scriptSrc = ["'self'", ...scriptHashes].join(' ');
    res.setHeader(
      'Content-Security-Policy',
      `default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self'; script-src ${scriptSrc}`
    );
  },
}));
if (require.main === module) {
  app.listen(PORT);
}

module.exports = app;
