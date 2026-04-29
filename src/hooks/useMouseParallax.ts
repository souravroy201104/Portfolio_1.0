// src/hooks/useMouseParallax.ts
"use client";

import { useEffect, useState } from "react";

interface ParallaxPos {
  x: number; // -1 to 1
  y: number; // -1 to 1
}

/**
 * Returns normalised (-1 to 1) mouse position relative to window centre.
 * Useful for parallax transforms on hero elements.
 */
export function useMouseParallax(): ParallaxPos {
  const [pos, setPos] = useState<ParallaxPos>({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return pos;
}
