// src/components/sections/Experience.tsx
"use client";

import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="section-label reveal">My Journey</div>
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
        <span className="grad-text">Work </span>
        <span className="acc-text">Experience</span>
      </h2>

      {/* Timeline */}
      <div
        style={{
          position: "relative",
          paddingLeft: 40,
        }}
      >
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 1,
            background: "linear-gradient(to bottom, var(--acc-purple), var(--acc-cyan), transparent)",
          }}
        />

        {EXPERIENCE.map((exp, i) => (
          <div
            key={exp.role}
            className="reveal"
            style={{
              position: "relative",
              padding: "32px 0 32px 48px",
              transitionDelay: `${i * 0.15}s`,
            }}
          >
            {/* Dot */}
            <div
              className="tl-dot"
              style={{
                position: "absolute",
                left: -5,
                top: 42,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "var(--acc-purple)",
                boxShadow: "0 0 20px var(--glow-purple)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
            />

            <div
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: 11,
                color: "var(--acc-violet)",
                letterSpacing: 2,
                marginBottom: 8,
              }}
            >
              {exp.date}
            </div>

            <h3
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 4,
                color: "var(--txt-primary)",
              }}
            >
              {exp.role}
            </h3>

            <div
              style={{
                fontSize: 14,
                color: "var(--acc-purple)",
                marginBottom: 12,
              }}
            >
              @ {exp.company}
            </div>

            <p
              style={{
                fontSize: 14,
                color: "var(--txt-muted)",
                lineHeight: 1.8,
                maxWidth: 580,
              }}
            >
              {exp.description}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .tl-dot:hover {
          transform: scale(1.5);
          box-shadow: 0 0 30px var(--glow-purple);
        }
      `}</style>
    </section>
  );
}
