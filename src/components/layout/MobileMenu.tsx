// src/components/layout/MobileMenu.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const scroll = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* Hamburger — visible only on small screens */}
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "none",           // shown via CSS media query below
          background: "none",
          border: "1px solid rgba(108,99,255,0.3)",
          borderRadius: 10,
          padding: "8px 10px",
          cursor: "none",
          color: "var(--txt-primary)",
          fontSize: 18,
          lineHeight: 1,
        }}
        className="mobile-hamburger"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.7)",
                backdropFilter: "blur(4px)",
                zIndex: 998,
              }}
            />

            {/* Panel */}
            <motion.nav
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: 280,
                background: "var(--bg-secondary)",
                borderLeft: "1px solid rgba(108,99,255,0.2)",
                zIndex: 999,
                padding: "80px 32px 40px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: 10,
                  color: "var(--txt-muted)",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                Navigation
              </p>

              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scroll(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    fontFamily: "var(--font-syne)",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--txt-secondary)",
                    cursor: "none",
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(108,99,255,0.08)",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--acc-violet)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--txt-secondary)")
                  }
                >
                  {link.label}
                </motion.button>
              ))}

              <button
                onClick={() => scroll("#contact")}
                style={{
                  marginTop: "auto",
                  padding: "14px 24px",
                  background: "linear-gradient(135deg, var(--acc-purple), var(--acc-violet))",
                  color: "white",
                  border: "none",
                  borderRadius: 30,
                  fontWeight: 500,
                  fontSize: 14,
                  cursor: "none",
                }}
              >
                Hire Me
              </button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .mobile-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
