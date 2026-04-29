// src/components/sections/Testimonials.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/data/portfolio";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="section-container">
      <div className="section-label reveal">Social Proof</div>
      <h2
        className="reveal"
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 700,
          fontSize: "clamp(32px,5vw,60px)",
          lineHeight: 1.1,
          marginBottom: 60,
          transitionDelay: "0.1s",
        }}
      >
        <span className="grad-text">What Clients </span>
        <span className="acc-text">Say</span>
      </h2>

      <div className="reveal" style={{ maxWidth: 800, margin: "0 auto" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: 48,
              background: "var(--bg-secondary)",
              border: "1px solid rgba(108,99,255,0.15)",
              borderRadius: 24,
            }}
          >
            {/* Stars */}
            <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
              {Array(5).fill("⭐").map((_, i) => (
                <span key={i} style={{ fontSize: 16, color: "var(--acc-gold)" }}>★</span>
              ))}
            </div>

            <p
              style={{
                fontSize: 18,
                color: "var(--txt-primary)",
                lineHeight: 1.8,
                marginBottom: 32,
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              "{t.quote}"
            </p>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--acc-purple), var(--acc-cyan))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "white",
                  fontFamily: "var(--font-syne)",
                }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{t.name}</div>
                <div style={{ fontSize: 13, color: "var(--txt-muted)" }}>{t.position}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 24 }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                height: 8,
                width: i === current ? 24 : 8,
                borderRadius: 4,
                background: i === current ? "var(--acc-purple)" : "var(--txt-muted)",
                border: "none",
                cursor: "none",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
