# Keystone Notary Group

This is a small React site styled with Tailwind CSS.

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

## Analytics

The site integrates [Google Analytics](https://analytics.google.com/) using the
GA4 tag. The script loads asynchronously via Google Tag Manager so it does not
block page rendering. Replace `G-XXXXXXXXXX` in `public/index.html` with your
measurement ID to enable tracking.

