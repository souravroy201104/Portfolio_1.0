// src/hooks/useScrollReveal.ts
"use client";

import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to all `.reveal` elements
 * and adds the `.in` class when they enter the viewport.
 *
 * Usage: call once at the top of a page component.
 */
export function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
