// src/components/sections/Skills.tsx
"use client";

import { SKILLS } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="section-label reveal">Technical Arsenal</div>
      <h2
        className="reveal"
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 700,
          fontSize: "clamp(32px,5vw,60px)",
          lineHeight: 1.1,
          marginBottom: 16,
          transitionDelay: "0.1s",
        }}
      >
        <span className="grad-text">Skills & </span>
        <span className="acc-text">Technologies</span>
      </h2>
      <p
        className="reveal"
        style={{
          color: "var(--txt-muted)",
          fontSize: 16,
          maxWidth: 540,
          lineHeight: 1.8,
          marginBottom: 60,
          transitionDelay: "0.2s",
        }}
      >
        A curated stack of tools I use to craft high-performance, beautiful web experiences.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 16,
        }}
      >
        {SKILLS.map((skill, i) => (
          <div
            key={skill.name}
            className="skill-card reveal glass-card"
            style={{
              padding: "28px 20px",
              textAlign: "center",
              transitionDelay: `${i * 0.05}s`,
              cursor: "none",
            }}
          >
            <span style={{ fontSize: 36, marginBottom: 12, display: "block" }}>
              {skill.icon}
            </span>
            <div
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--txt-primary)",
              }}
            >
              {skill.name}
            </div>
            {/* Progress bar revealed on hover via CSS */}
            <div
              style={{
                height: 3,
                background: "rgba(255,255,255,0.05)",
                borderRadius: 2,
                marginTop: 12,
                overflow: "hidden",
              }}
            >
              <div
                className="skill-fill-bar"
                style={{
                  height: "100%",
                  width: `${skill.level}%`,
                  borderRadius: 2,
                  background:
                    "linear-gradient(90deg, var(--acc-purple), var(--acc-cyan))",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.8s ease",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skill-card:hover .skill-fill-bar {
          transform: scaleX(1);
        }
      `}</style>
    </section>
  );
}
