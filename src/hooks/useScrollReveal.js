import { useEffect, useRef, useState } from "react";

/**
 * Hook to reveal an element when it first enters the viewport.
 * The observer disconnects after the element is visible to avoid
 * repeated animations on scroll.
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
}
