// src/components/ui/ThemeSwitcher.tsx
// NOTE: The portfolio is dark-first. This component toggles a subtle
// "light-accent" mode that softens the palette for daytime viewing.
// Full light-mode requires additional CSS variables (see globals.css TODO).
"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    if (saved) applyTheme(saved);
  }, []);

  const applyTheme = (t: Theme) => {
    setTheme(t);
    localStorage.setItem("portfolio-theme", t);
    document.documentElement.setAttribute("data-theme", t);
  };

  const toggle = () => applyTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "var(--bg-secondary)",
        border: "1px solid rgba(108,99,255,0.2)",
        cursor: "none",
        fontSize: 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "border-color 0.3s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--acc-purple)";
        (e.currentTarget as HTMLElement).style.transform = "rotate(20deg)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(108,99,255,0.2)";
        (e.currentTarget as HTMLElement).style.transform = "rotate(0deg)";
      }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
