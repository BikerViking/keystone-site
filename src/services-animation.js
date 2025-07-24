export function initServiceAnimations() {
  if (typeof window === 'undefined') return;

  const cards = document.querySelectorAll('.service-card');
  if (!cards.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cards.forEach((c) => c.classList.remove('opacity-0'));
    return;
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
  } else {
    cards.forEach((c) => c.classList.remove('opacity-0'));
  }
}
