import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Create a scroll-driven stack animation for service cards.
// Cards slide upward as the container scrolls into view.
export function initServiceCardStack() {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const container = document.querySelector('.stacked-services');
  if (!container) return;

  const cards = Array.from(container.querySelectorAll('.service-card'));
  if (!cards.length) return;

  gsap.registerPlugin(ScrollTrigger);

  const spacing = 60; // offset between cards

  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { y: index * spacing },
      {
        y: 0,
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${spacing * (cards.length - 1)}`,
          scrub: true,
          pin: index === 0,
        },
      },
    );
  });
}
