import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function showDiag(msg) {
  let el = document.getElementById('diag-log');
  if (!el) {
    el = document.createElement('div');
    el.id = 'diag-log';
    el.style =
      'background:#222;color:#fff;padding:1em;font-size:1.1em;position:fixed;top:0;left:0;width:100vw;z-index:9999;';
    document.body.prepend(el);
  }
  el.innerText += `${msg}\n`;
}

// Create a scroll-driven stack animation for service cards.
// Cards slide upward as the container scrolls into view.
export function initServiceCardStack() {
  showDiag('initServiceCardStack running');
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cards = Array.from(document.querySelectorAll('.service-card'));
  showDiag(`Cards found: ${cards.length}`);
  if (!cards.length) return;

  // Force cards visible without animation to debug layout issues
  cards.forEach(card => {
    card.style.opacity = '1';
    card.style.transform = 'none';
  });

  // Animation disabled temporarily
  // gsap.registerPlugin(ScrollTrigger);

  // cards.forEach((card, index) => {
  //   showDiag(`Animating card index ${index}`);
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
