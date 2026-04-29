// src/components/ui/Loader.tsx
"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1200);
    const t2 = setTimeout(() => setHidden(true), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "var(--bg-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.8s",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          border: "2px solid #1e1e3a",
          borderTop: "2px solid var(--acc-purple)",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <p
        style={{
          marginTop: 24,
          fontFamily: "var(--font-jetbrains)",
          fontSize: 12,
          color: "var(--txt-muted)",
          letterSpacing: 4,
          textTransform: "uppercase",
          animation: "pulse 1.5s ease-in-out infinite",
        }}
      >
        Initializing
      </p>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse {
          0%,100%{opacity:0.3} 50%{opacity:1}
        }
      `}</style>
    </div>
  );
}
