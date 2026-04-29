// src/components/sections/Projects.tsx
"use client";

import { PROJECTS } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="section-label reveal">My Work</div>
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
        <span className="grad-text">Featured </span>
        <span className="acc-text">Projects</span>
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
        A selection of my best work — each project a unique challenge solved with creativity and technical depth.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}
      >
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className="project-card reveal glass-card"
            style={{
              overflow: "hidden",
              transitionDelay: `${i * 0.08}s`,
              cursor: "none",
            }}
          >
            {/* Thumbnail */}
            <div
              style={{
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 64,
                background: project.gradient,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span style={{ filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.5))" }}>
                {project.emoji}
              </span>
              {/* Shimmer line */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)",
                }}
              />
            </div>

            {/* Body */}
            <div style={{ padding: 28 }}>
              {/* Tags */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 12px",
                      background: "rgba(108,99,255,0.1)",
                      border: "1px solid rgba(108,99,255,0.2)",
                      borderRadius: 20,
                      fontSize: 11,
                      color: "var(--acc-violet)",
                      fontFamily: "var(--font-jetbrains)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 8,
                  color: "var(--txt-primary)",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--txt-muted)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                {project.description}
              </p>

              {/* Links */}
              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href={project.demo}
                  style={{
                    padding: "10px 20px",
                    borderRadius: 20,
                    fontSize: 12,
                    textDecoration: "none",
                    fontWeight: 500,
                    background: "var(--acc-purple)",
                    color: "white",
                    border: "1px solid var(--acc-purple)",
                    transition: "all 0.3s",
                    cursor: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--acc-violet)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 20px var(--glow-purple)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--acc-purple)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  Live Demo ↗
                </a>
                <a
                  href={project.github}
                  style={{
                    padding: "10px 20px",
                    borderRadius: 20,
                    fontSize: 12,
                    textDecoration: "none",
                    fontWeight: 500,
                    background: "transparent",
                    color: "var(--txt-secondary)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.3s",
                    cursor: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--acc-violet)";
                    (e.currentTarget as HTMLElement).style.color = "var(--acc-violet)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "var(--txt-secondary)";
                  }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
