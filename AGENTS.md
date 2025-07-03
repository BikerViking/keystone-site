# Repository Agent Guidelines

This repository contains a React application styled with Tailwind CSS. Follow these instructions when making changes:

## Setup
- Requires **Node.js 18** or later.
- Install dependencies with `npm install`.

## Development
- Start the development server with `npm start`.
- Run unit tests with `npm test`.
- Build the production assets with `npm run build`.

## Contribution Guidelines
- Keep code clean and use modern JavaScript (ES6+).
- Use semantic HTML and ensure WCAG 2.1 accessibility compliance.
- Use Tailwind utility classes for styling.
- Write tests for new features or when modifying existing logic.
- Do not commit credentials or secrets.
- Keep changes scoped to the task at hand and avoid unrelated refactoring.

## Verification Before Commit
- After changes, run `npm test`. Ensure all tests pass.
- If build scripts or service worker code changes, also run `npm run build`.

