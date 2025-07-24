import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initHeroAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.hero-title', {
    scrollTrigger: {
      trigger: '.hero-title',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
  });

  gsap.from('.hero-subtitle', {
    scrollTrigger: {
      trigger: '.hero-subtitle',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    y: 30,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: 'power3.out',
  });

  gsap.from('.hero-cta', {
    scrollTrigger: {
      trigger: '.hero-cta',
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: 'power2.out',
  });
}
