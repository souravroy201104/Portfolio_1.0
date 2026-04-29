// src/components/sections/Hero.tsx
"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Lazy-load Three.js canvas (SSR disabled)
const HeroOrb = dynamic(() => import("@/components/three/HeroOrb"), { ssr: false });

const ROLES = ["Frontend Developer", "Creative Web Designer", "React Specialist"];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* 3D Canvas background */}
      <HeroOrb />

      {/* Radial vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(5,5,8,0.9) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 20px" }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            border: "1px solid rgba(108,99,255,0.3)",
            borderRadius: 30,
            fontFamily: "var(--font-jetbrains)",
            fontSize: 11,
            color: "var(--acc-violet)",
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 32,
            background: "rgba(108,99,255,0.05)",
            backdropFilter: "blur(10px)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              background: "var(--acc-purple)",
              borderRadius: "50%",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
          Available for work
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: "-3px",
            marginBottom: 16,
          }}
        >
          <div
            style={{
              fontSize: "clamp(52px, 10vw, 120px)",
              background: "linear-gradient(135deg, #fff 0%, var(--txt-secondary) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Sourav
          </div>
          <div
            style={{
              fontSize: "clamp(52px, 10vw, 120px)",
              background: "linear-gradient(135deg, var(--acc-purple) 0%, var(--acc-cyan) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Roy
          </div>
        </motion.div>

        {/* Role rotator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          style={{ height: 44, overflow: "hidden", marginBottom: 32 }}
        >
          <div className="role-list">
            {ROLES.map((role, i) => (
              <div
                key={i}
                style={{
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "clamp(14px, 2.5vw, 22px)",
                  color: "var(--txt-secondary)",
                  fontWeight: 300,
                  letterSpacing: 2,
                }}
              >
                {role.split(" ").map((word, wi) => (
                  <span key={wi}>
                    {wi === role.split(" ").length - 1 ? (
                      <em style={{ fontStyle: "normal", color: "var(--acc-violet)", fontWeight: 500 }}>
                        {" "}{word}
                      </em>
                    ) : (
                      word + " "
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          style={{
            maxWidth: 480,
            margin: "0 auto 48px",
            fontSize: 15,
            color: "var(--txt-muted)",
            lineHeight: 1.8,
          }}
        >
          Crafting digital experiences that blur the line between design and technology.
          Every pixel intentional, every interaction meaningful.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
        >
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            <span>Hire Me</span>
          </button>
          <button className="btn-outline" onClick={() => scrollTo("projects")}>
            View Projects
          </button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0.4,
          zIndex: 2,
        }}
      >
        <div
          className="scroll-line"
          style={{
            width: 1,
            height: 60,
            background: "linear-gradient(to bottom, var(--acc-purple), transparent)",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: 10,
            color: "var(--txt-muted)",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
      </div>

      <style>{`
        @keyframes pulse {
          0%,100%{opacity:0.4} 50%{opacity:1}
        }
      `}</style>
    </section>
  );
}
