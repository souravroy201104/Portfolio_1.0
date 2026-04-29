// src/components/ui/BackToTop.tsx
"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "var(--acc-purple)",
        color: "white",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "none",
        zIndex: 100,
        fontSize: 20,
        boxShadow: "0 8px 24px var(--glow-purple)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.3s, transform 0.3s, background 0.3s",
      }}
      onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "var(--acc-violet)")}
      onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "var(--acc-purple)")}
    >
      ↑
    </button>
  );
}
