const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

const distDir = path.join(__dirname, 'dist');
const staticDir = fs.existsSync(distDir) ? distDir : __dirname;

app.use(compression());
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", 'data:'],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", 'unsafe-inline'],
      fontSrc: ["'self'"],
    },
  },
}));

app.use(express.static(staticDir, {
  setHeaders(res, filePath) {
    const isHtml = path.extname(filePath) === '.html';
    res.setHeader('Cache-Control', isHtml ? 'public,max-age=0' : 'public,max-age=31536000,immutable');
  },
}));

app.use((req, res) => {
  res.status(404).sendFile(path.join(staticDir, '404.html'));
});
if (require.main === module) {
  app.listen(PORT);
}

module.exports = app;
