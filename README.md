<!-- 2025-07-22: resolved merge conflicts and upgraded dev dependencies (eleventy 3, eslint 9, jsdom 26). Tailwind pinned at v3 for stability. -->
# Keystone Notary Group Website

This project serves a static marketing site powered by an Express server. The build step copies the site assets (HTML, CSS, and JS) into `dist/` for deployments such as Vercel.

## Development

Install dependencies and run the server:

```bash
npm install
npm start
```

## Testing

Run unit tests and build validation:

```bash
npm test
npm run build
```
