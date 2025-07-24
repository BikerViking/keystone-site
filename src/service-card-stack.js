// Animate service cards into a vertical stack as the user scrolls.
// IntersectionObserver drives the effect so each card smoothly
// translates based on its visibility. Reduced-motion preferences
// and unsupported browsers simply skip the animation.

export function initServiceCardStack() {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) return;

  const container = document.querySelector('.stacked-services');
  if (!container) return;
  const cards = container.querySelectorAll('.service-card');
  if (!cards.length) return;

  // Ensure the container has enough height for scrolling.
  container.style.position = 'relative';
  container.style.minHeight = '200vh';
  container.style.padding = '2rem 0';

  // Position cards absolutely so they stack visually.
  cards.forEach((card, index) => {
    card.style.position = 'absolute';
    card.style.top = `${index * 50}px`;
    card.style.left = '0';
    card.style.right = '0';
    card.style.margin = '0 auto';
    card.style.zIndex = `${cards.length - index}`;
    card.style.transition = 'transform 0.4s ease-out';
  });

  const thresholds = Array.from({ length: 100 }, (_, i) => i / 100);
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const card = entry.target;
        const idx = Array.from(cards).indexOf(card);
        const progress = 1 - entry.intersectionRatio;
        card.style.transform = `translateY(${progress * idx * 50}px)`;
      });
    },
    { threshold: thresholds }
  );

  cards.forEach(card => observer.observe(card));
}
