import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Create a scroll-driven stack animation for service cards.
// Cards slide upward as the container scrolls into view.
export function initServiceCardStack() {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cards = Array.from(document.querySelectorAll('.service-card'));
  if (!cards.length) return;

  // Force cards visible without animation to debug layout issues
  cards.forEach(card => {
    card.style.opacity = '1';
    card.style.transform = 'none';
  });

  // Animation disabled temporarily
  // gsap.registerPlugin(ScrollTrigger);

  // cards.forEach((card, index) => {
  //   gsap.fromTo(
  //     card,
  //     { y: 40, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: card,
  //         start: 'top 80%',
  //         end: 'top 50%',
  //         scrub: true,
  //       },
  //     },
  //   );
  // });
}
