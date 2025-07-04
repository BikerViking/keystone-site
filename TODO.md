# TODO.md — Keystone Notary Group Project Tasks

## Layout and Responsiveness

- [ ] Fix hero section responsiveness when rotating mobile to landscape
- [ ] Audit navigation bar behavior on small screens and tablet breakpoints
- [ ] Ensure container spacing and padding consistency site-wide
- [ ] Adjust padding and margin on mobile for better flow
- [ ] Review font sizes and line-height at all breakpoints
- [ ] Add smooth scroll behavior to all anchor links
- [ ] Enable global scroll-behavior smooth via Tailwind or CSS

## SEO and Metadata

- [ ] Add favicon to public folder and link it in index.html
- [ ] Add meta tags for page description, keywords, and OpenGraph
- [ ] Add structured data (schema.org markup) for local business
- [ ] Update README with any changes to build or deployment flow

## Accessibility (WCAG 2.1)

- [ ] Ensure all interactive elements have aria-label or visible text
- [ ] Add visible focus styles to buttons and links
- [ ] Confirm heading levels follow semantic hierarchy
- [ ] Add alt text to all meaningful images
- [ ] Confirm all navigation is accessible by keyboard

## Site Content and Structure

- [ ] Replace all placeholder text with finalized business copy
- [ ] Write About section explaining credentials and notary coverage
- [ ] Add Services list with clear, brief descriptions
- [ ] Add Frequently Asked Questions (FAQ) section with collapsible answers
- [ ] Add non-attorney disclosure in footer or legal area

## Testing and Compatibility

- [ ] Test the site across modern browsers to confirm Tailwind v4 and React 19 compatibility
- [ ] Confirm Google Analytics ID injection works correctly after production build
- [ ] Review service worker caching strategy and update CACHE_NAME if assets change

## Developer Tasks and Clean-Up

- [ ] Create DebugScreenSize component for development use only
- [ ] Commit .nvmrc file to lock Node version to 20
- [ ] Add .env.template showing safe defaults like contact email
- [ ] Create .prettierrc and .eslintrc.json for code consistency (optional)
- [ ] Verify AGENTS.md, TODO.md, and PREVIEW.md are up to date and followed

## Completed

- [x] Consider migrating from react-helmet to react-helmet-async for async safety