// Apply a scroll-driven stacking effect using CSS sticky positioning.
// Cards offset by index remain stacked as the user scrolls down and
// naturally unstack when scrolling back up. This keeps dependencies
// minimal and respects reduced-motion preferences.

export function initServiceCardStack() {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;
  if (prefersReducedMotion) return;

  const cards = document.querySelectorAll('.stacked-services .service-card');
  if (!cards.length) return;

  const rootFont = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  const step = 2.5 * rootFont; // 2.5rem offset for visible stacking

  cards.forEach((card, index) => {
    card.style.position = 'sticky';
    card.style.setProperty('top', `${index * step}px`);
    card.style.setProperty('z-index', `${cards.length - index}`);
  });
}
