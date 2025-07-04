# Keystone Notary Group — Official Website

Keystone Notary Group, LLC provides mobile notary and signing agent services across Pennsylvania.

This website is built with React, Tailwind CSS, and Vite. It includes Progressive Web App (PWA) features, analytics integration, and is optimized for modern devices.

---

## Project Overview

This project was designed with performance, scalability, and clarity in mind. The architecture is clean and intentionally minimal to support:

- Tailwind CSS 4 utility-first styling
- React 18 with modern JSX syntax
- Offline caching and service worker behavior
- Google Analytics 4 integration
- Vercel and Netlify preview deployments and builds

---

## Requirements

- Node.js v20 or higher  
- To match the project version, run:  
  `nvm use`

---

## Getting Started

To set up the project locally:

1. Install dependencies  
   `npm install`

2. Start the development server  
   `npm run dev`

3. Build for production  
   `npm run build`

4. Preview the production build  
   `npm run preview`

5. Run tests  
   `npm test`

---

## Project Structure

| Path              | Purpose                                                 |
|-------------------|----------------------------------------------------------|
| `src/`            | React components, layout, and logic                      |
| `public/`         | Static assets, HTML shell, and service worker            |
| `scripts/`        | Automation scripts (e.g., GA injection)                  |
| `.codex/`         | Codex configuration and agent settings                   |
| `AGENTS.md`       | Codex agent expectations and constraints                 |
| `PREVIEW.md`      | Visual QA checklist for Codex deployment review          |
| `TODO.md`         | Technical migration tasks and verification checklist     |

---

## Environment Variables

Create a `.env` file (or use `.env.template`) and define:

REACT_APP_GA_ID=G-XXXXXXXXXX  
SITEMAP_BASE_URL=https://www.keystonenotarygroup.com

These values are used during build-time for analytics injection and sitemap generation.

---

## Analytics Setup

This site uses Google Analytics 4. Tracking is privacy-friendly and injected automatically at build time.

To enable analytics:

1. Set your `REACT_APP_GA_ID` in the `.env` file  
2. Run `npm run build`  
3. The GA script will be added dynamically with no manual edits required

Optional support for Hotjar or Microsoft Clarity is included in the head tag but commented out by default.

---

## Sitemap Generation

To generate or regenerate the sitemap:

`npm run generate-sitemap`

Make sure `SITEMAP_BASE_URL` is set correctly in your `.env` file. Trailing slashes are automatically removed.

---

## Offline & PWA Behavior

The site registers a service worker for offline support.

To update caching behavior:

1. Edit `public/service-worker.js`  
2. Bump the `CACHE_NAME` constant  
3. Add or update asset references  
4. Run `npm run build`  
5. Deploy the new `build/` output

To test:

- Open DevTools → Application → Service Workers  
- Set network mode to "Offline"  
- Refresh and confirm cached pages load

---

## Deployment

- Hosted via Netlify with Vercel for additional previews
- CI runs build and test checks on each pull request
- Preview deployments are available for each branch

Make sure your Netlify or Vercel project has `REACT_APP_GA_ID` and `SITEMAP_BASE_URL` defined if not using `.env`.

---

## Testing

All unit tests run using Vitest.

To execute:

`npm test`

Tests are located alongside components in `src/`. Add coverage for all new features.

---

## License

This project is licensed under the MIT License. See the LICENSE file for full details.