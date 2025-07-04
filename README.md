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
- Netlify pull request previews and builds

---

## Requirements

- Node.js v20+  
- `nvm` users: run `nvm use` to match `.nvmrc`

---

## Getting Started

To set up the project locally:

1. Install dependencies  
   `npm install`

2. Start development server  
   `npm run dev`

3. Build for production  
   `npm run build`

4. Preview production build  
   `npm run preview`

5. Run tests  
   `npm test`

---

## Project Structure

- `src/` — React components and pages
- `public/` — Static assets, service worker, favicon, and base HTML
- `scripts/` — Utility scripts (e.g. for analytics injection)
- `.codex/` — Codex automation directory
- `AGENTS.md` — Codex agent responsibilities and automation behavior
- `PREVIEW.md` — QA checklist and visual correctness goals
- `TODO.md` — Technical migration and verification tasks

---

## Analytics Configuration

Google Analytics 4 is integrated via a non-blocking asynchronous script. Tracking ID injection is handled automatically at build time.

To configure analytics:

1. Set the `REACT_APP_GA_ID` environment variable
2. Run `npm run build`
3. The GA ID will be inserted into the final HTML without modifying the source

Optional head tags for Hotjar and Microsoft Clarity are included but disabled by default.

---

## Sitemap Configuration

The base URL for the sitemap is controlled by: