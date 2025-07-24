export function initScrollAnimations() {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  const prefersReducedMotion =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Respect user preference or lack of IntersectionObserver support
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    return; // Leave elements unmodified
  }

  startAnimations(elements);
}

function startAnimations(elements) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const cls = entry.target.dataset.animate;
        if (!cls) return;
        if (entry.isIntersecting) {
          entry.target.classList.add(cls);
        } else {
          // Remove class on exit so element can animate again
          entry.target.classList.remove(cls);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}
