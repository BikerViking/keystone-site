# PREVIEW.md — Visual QA Checklist Before Deployment

This checklist should be reviewed manually and optionally by Codex before merging or deploying major layout changes.

## Responsive Layout Checks

- [ ] No horizontal scrolling at any viewport size
- [ ] Hero section renders correctly in mobile landscape and portrait
- [ ] Navigation adapts at all breakpoints and devices
- [ ] Section spacing looks consistent from top to bottom
- [ ] No overlapping, wrapping, or clipping of text or buttons
- [ ] Test screen sizes at:
  - 320px (small phones)
  - 375px (standard iPhones)
  - 768px (iPad portrait)
  - 1024px (tablet landscape / small laptop)
  - 1280px and above (desktop)

## Branding and Style

- [ ] Logo renders clearly and is centered/aligned as expected
- [ ] Backgrounds and images load properly
- [ ] Fonts are legible across all viewports
- [ ] All color themes respect dark-mode styling and remain consistent

## SEO and Metadata

- [ ] Page title shows in browser tab
- [ ] Meta description exists in page source
- [ ] OpenGraph and social preview tags are present (title, image, etc.)
- [ ] Favicon appears correctly in browser tab

## Accessibility (WCAG 2.1)

- [ ] Can navigate all links and buttons using keyboard alone
- [ ] Visible focus states appear for all interactive elements
- [ ] No color contrast violations
- [ ] All non-decorative images have alt text
- [ ] Headings follow semantic structure (H1 > H2 > H3)

## Functionality and Testing

- [ ] All internal anchor links scroll to the correct sections
- [ ] Contact mailto link opens default email client
- [ ] Console logs are clean in both dev and production mode
- [ ] Run:
  - `npm run build`
  - `npm run preview`
  - Confirm preview site loads successfully with no errors
- [ ] Run `npm test` and confirm all tests pass

---

Codex: Use this file as a visual QA reference after completing major layout or content tasks. Do not close a task if any checklist items are failing or incomplete.