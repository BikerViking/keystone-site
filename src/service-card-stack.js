// Animate service cards into a vertical stack as the page scrolls.
// Scrolling events update each card's position so it slides
// smoothly into place. Reduced-motion preferences and
// unsupported browsers simply skip the animation.

export function initServiceCardStack() {
  if (typeof window === 'undefined') return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const container = document.querySelector('.stacked-services');
  if (!container) return;
  const cards = Array.from(container.querySelectorAll('.service-card'));
  if (!cards.length) return;

  const spacing = 60; // px each card moves

  container.style.position = 'relative';
  container.style.padding = '2rem 0';
  container.style.height = `${window.innerHeight + spacing * (cards.length - 1)}px`;

  cards.forEach((card, index) => {
    card.style.position = 'absolute';
    card.style.top = '0';
    card.style.left = '0';
    card.style.right = '0';
    card.style.margin = '0 auto';
    card.style.zIndex = String(cards.length - index);
    card.style.transition = 'transform 0.4s ease-out';
  });

  const update = () => {
    const rect = container.getBoundingClientRect();
    const progress = Math.min(
      Math.max(-rect.top / (spacing * (cards.length - 1)), 0),
      1
    );
    cards.forEach((card, idx) => {
      card.style.transform = `translateY(${progress * idx * spacing}px)`;
    });
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}
