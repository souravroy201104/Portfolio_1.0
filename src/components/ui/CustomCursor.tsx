// src/components/ui/CustomCursor.tsx
"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current!;
    const ring = ringRef.current!;
    let trailX = 0, trailY = 0;

    const onMove = (e: MouseEvent) => {
      dot.style.left = e.clientX + "px";
      dot.style.top  = e.clientY + "px";
      setTimeout(() => {
        ring.style.left = e.clientX + "px";
        ring.style.top  = e.clientY + "px";
      }, 80);
    };

    const onEnter = () => {
      ring.style.width  = "60px";
      ring.style.height = "60px";
    };
    const onLeave = () => {
      ring.style.width  = "36px";
      ring.style.height = "36px";
    };

    document.addEventListener("mousemove", onMove);

    const interactives = document.querySelectorAll(
      "button, a, .skill-card, .project-card, .contact-item, input, textarea"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: 12,
          height: 12,
          background: "var(--acc-purple)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
          transition: "transform 0.1s",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: 36,
          height: 36,
          border: "1px solid var(--acc-violet)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition: "left 0.12s ease, top 0.12s ease, width 0.2s, height 0.2s",
          opacity: 0.5,
        }}
      />
    </>
  );
}
