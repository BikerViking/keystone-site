# Keystone Notary Group

This is a small React site styled with Tailwind CSS.

The application includes basic Progressive Web App (PWA) support with an
offline-capable service worker and web app manifest.

## Analytics

Google Analytics 4 tracking is included with privacy-friendly defaults. Update
the measurement ID in `public/index.html` and adjust consent logic as needed.
Optional snippets for Hotjar or Microsoft Clarity are also provided in the head
section but are disabled by default.

## Requirements

- Node.js 18 or later

## Getting Started

This project uses npm overrides to pin certain transitive dependencies to secure versions.

1. Install dependencies: `npm install`
2. Start the development server: `npm start`
3. Build for production: `npm run build`
4. Run tests: `npm test`

## Project Structure

- `src/` - React components and pages
- `public/` - Static assets and HTML template

