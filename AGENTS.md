# Codex Agent Instructions — Keystone Notary Group

This site is a professional marketing homepage for a Pennsylvania mobile notary business. It is meant to build trust, convey professionalism, and work flawlessly across all devices and screen orientations.

Your job is to assist in maintaining and improving a production-grade website that reflects a luxury, minimalist brand identity. Assume this site is live-facing and client-visible at all times.

## Setup

- Requires Node.js 20+
- Install dependencies with:
  - `npm install --legacy-peer-deps`
- Start the development server:
  - `npm run dev`
- Run unit tests:
  - `npm test`
- Build the project:
  - `npm run build`
- Tailwind uses the default configuration unless modified. You may update `tailwind.config.js` only if necessary to resolve layout or spacing issues.

## Project Scope and Goals

- Mobile-first layout — fully responsive across all screen sizes, including rotation (portrait ↔ landscape).
- Maintain dark-mode, abstract geometric aesthetic — do not change the visual style or brand tone.
- Ensure accessibility compliance (WCAG 2.1).
- Polish typography, spacing, and interactive feel.
- Treat all changes as if going live to production (Netlify deployment assumed).

## Layout and Styling Guidelines

- Use Tailwind utility classes only — do not use inline styles or external CSS files.
- Start layout audits in:
  - `src/App.jsx`
  - `src/components/Hero.jsx`
  - `src/components/Navbar.jsx`
  - `src/components/Footer.jsx`
- Use semantic HTML (`main`, `header`, `nav`, `footer`) and maintain logical structure.
- Keep layout modular and component-based — use Tailwind spacing utilities for consistency.

## Responsive Breakpoints to Target

- 320px – Small phones
- 375px – Standard iPhone
- 768px – iPad (portrait)
- 1024px – Tablet/laptop landscape
- 1280px+ – Desktop

## A Layout Is Considered Broken If:

- Horizontal scrolling appears at any size
- Sections shift or break on rotation
- Elements exceed container bounds or overlap
- Text or buttons get cut off or wrap badly
- Components break spacing flow at breakpoints

## Do Not

- Do not modify `logo.svg` or the dark abstract backgrounds.
- Do not introduce Bootstrap, jQuery, or other CSS frameworks.
- Do not bypass Tailwind's utility-first system.
- Do not alter color palette or visual identity.
- Do not commit any credentials, secrets, or temporary debug files.

## SEO and Metadata

- Title: Keystone Notary Group
- Description: Pennsylvania Mobile Notary & Signing Agent
- Ensure proper `<title>`, `<meta>`, and OpenGraph tags are present.
- Add a favicon and verify social media previews are accurate.

## Accessibility (WCAG 2.1)

- Use semantic HTML
- Provide alt text for all non-decorative images
- Ensure keyboard navigation with logical tab order
- Maintain sufficient contrast for all text

## Verification Before Commit

- Run `npm test` and ensure all tests pass.
- Run `npm run build` and verify production build success.
- Manually test responsiveness at all key breakpoints (320px, 375px, 768px, 1024px, 1280px).
- Check for:
  - Overflow
  - Layout breakage
  - Inconsistent scaling or alignment

## Folder Reference

- `src/` — React components and layout
- `public/` — Static assets (favicon, images)
- `scripts/` — Build tools or config
- `AGENTS.md` — This file (Codex instructions)

## Final Instruction

Codex: treat this site as if it were built by a front-end professional. Prioritize responsiveness, visual polish, and clarity across screen sizes. Fix layout issues with care and preserve the design intent.