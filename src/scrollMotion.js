export function initScrollMotion() {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach((el) => {
      const cls = el.dataset.animate;
      if (cls) el.classList.add(cls);
    });
    return;
  }

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
          entry.target.classList.remove(cls);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}
