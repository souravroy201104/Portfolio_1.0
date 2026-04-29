// src/components/layout/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "20px 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        background: scrolled ? "rgba(5,5,8,0.8)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(108,99,255,0.1)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 800,
          fontSize: 22,
          background: "linear-gradient(135deg, var(--acc-purple), var(--acc-cyan))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        SR
      </span>

      {/* Links */}
      <ul
        style={{
          display: "flex",
          gap: 32,
          listStyle: "none",
        }}
        className="nav-links-desktop"
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => scroll(link.href)}
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: 13,
                color: "var(--txt-secondary)",
                background: "none",
                border: "none",
                letterSpacing: 1,
                textTransform: "uppercase",
                cursor: "none",
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
            </button>
          </li>
        ))}
      </ul>

      {/* Right cluster */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <ThemeSwitcher />
        <button
          onClick={() => scroll("#contact")}
          className="nav-cta-btn"
          style={{
            padding: "10px 24px",
            border: "1px solid var(--acc-purple)",
            color: "var(--acc-purple)",
            borderRadius: 30,
            background: "transparent",
            fontSize: 13,
            cursor: "none",
            transition: "all 0.3s",
            fontFamily: "var(--font-dm-sans)",
          }}
          onMouseEnter={(e) => {
            const el = e.target as HTMLElement;
            el.style.background = "var(--acc-purple)";
            el.style.color = "white";
            el.style.boxShadow = "0 0 20px var(--glow-purple)";
          }}
          onMouseLeave={(e) => {
            const el = e.target as HTMLElement;
            el.style.background = "transparent";
            el.style.color = "var(--acc-purple)";
            el.style.boxShadow = "none";
          }}
        >
          Hire Me
        </button>
        <MobileMenu />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none; }
          .nav-cta-btn { display: none; }
        }
      `}</style>
    </motion.nav>
  );
}
