export function initScrollAnimations() {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  // Skip animations entirely for users who prefer reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // Fallback: immediately apply classes if IntersectionObserver unsupported
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => {
      const cls = el.dataset.animate;
      if (cls) el.classList.add(cls);
    });
    return;
  }

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
