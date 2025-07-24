// IntersectionObserver-based stacking effect ensures smooth behavior
// even if GSAP fails to initialize. This keeps dependencies minimal
// and respects user motion preferences.

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
  const step = 1.5 * rootFont; // 1.5rem

  const indexMap = new Map();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const card = entry.target;
        const idx = indexMap.get(card);
        if (entry.isIntersecting) {
          applyStack(card, idx * step, idx + 1);
        } else if (entry.boundingClientRect.top > 0) {
          removeStack(card);
        }
      });
    },
    {
      rootMargin: '0px 0px -20% 0px',
      threshold: 0,
    },
  );

  cards.forEach((card, index) => {
    indexMap.set(card, index);
    observer.observe(card);
  });
}

function applyStack(el, y, z) {
  el.style.transform = `translateY(${-y}px)`;
  el.style.zIndex = z;
  el.classList.add('stacked');
}

function removeStack(el) {
  el.style.transform = '';
  el.style.zIndex = '';
  el.classList.remove('stacked');
}
