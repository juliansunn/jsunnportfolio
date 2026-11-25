"use client";

import { useEffect, useRef } from "react";

/**
 * One-time reveal animation. The server renders everything in its final
 * state, so there is no animation without JS or with reduced motion. On the
 * client the element is marked data-state="idle", then "in" once it scrolls
 * into view; CSS does the rest. The attribute is set on the DOM directly so
 * revealing never re-renders the component.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.dataset.state = "idle";
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          requestAnimationFrame(() => (el.dataset.state = "in"));
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return ref;
}
