import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initServiceCardStack() {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;
  if (prefersReducedMotion) return;

  const cards = document.querySelectorAll('.stacked-services .service-card');
  if (!cards.length) return;

  gsap.registerPlugin(ScrollTrigger);
  const rootFont = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  const step = 1.5 * rootFont; // 1.5rem

  cards.forEach((card, index) => {
    const offset = index * step;
    ScrollTrigger.create({
      trigger: card,
      start: 'top 80%',
      onEnter: () => applyStack(card, offset, index + 1),
      onLeaveBack: () => removeStack(card),
    });
  });
}

function applyStack(el, y, z) {
  gsap.to(el, {
    y: -y,
    zIndex: z,
    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.15)',
    duration: 0.3,
    overwrite: 'auto',
  });
}

function removeStack(el) {
  gsap.to(el, {
    y: 0,
    zIndex: 0,
    boxShadow: 'none',
    duration: 0.3,
    overwrite: 'auto',
  });
}
