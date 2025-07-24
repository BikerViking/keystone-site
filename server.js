const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

const distDir = path.join(__dirname, 'dist');
const staticDir = fs.existsSync(distDir) ? distDir : __dirname;

app.use(express.static(staticDir, {
  setHeaders(res, filePath) {
    const isHtml = path.extname(filePath) === '.html';
    res.setHeader('Cache-Control', isHtml ? 'public,max-age=0' : 'public,max-age=31536000,immutable');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains');
    // Limit referrer and feature permissions for improved privacy
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=()');
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; img-src 'self' data:; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com"
    );
  },
}));
app.use((req, res) => {
  res.status(404).sendFile(path.join(staticDir, 'index.html'));
});
if (require.main === module) {
  app.listen(PORT);
}

module.exports = app;
