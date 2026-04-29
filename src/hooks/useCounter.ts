// src/hooks/useCounter.ts
"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 → `target` over `duration` ms
 * once the returned `ref` enters the viewport.
 *
 * @example
 * const { ref, value } = useCounter(40);
 * return <div ref={ref}>{value}+</div>;
 */
export function useCounter(target: number, duration = 1500) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}
