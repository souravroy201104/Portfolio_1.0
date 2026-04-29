// src/components/sections/About.tsx
"use client";

const STATS = [
  { num: "3+", label: "Years Experience" },
  { num: "40+", label: "Projects Completed" },
  { num: "15+", label: "Happy Clients" },
  { num: "∞", label: "Lines of Code" },
];

export default function About() {
  return (
    <section id="about" className="section-container">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Visual */}
        <div className="reveal" style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              aspectRatio: "4/5",
              background: "linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))",
              border: "1px solid rgba(108,99,255,0.2)",
            }}
          >
            {/* Rings + Avatar */}
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {[200, 260, 320].map((size, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: size,
                    height: size,
                    borderRadius: "50%",
                    border: "1px solid rgba(108,99,255,0.2)",
                    animation: `ringPulse 3s ease-in-out ${i * 0.5}s infinite`,
                  }}
                />
              ))}
              <div
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--acc-purple), var(--acc-cyan))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-syne)",
                  fontSize: 60,
                  fontWeight: 800,
                  color: "white",
                  position: "relative",
                  zIndex: 2,
                  boxShadow: "0 0 60px var(--glow-purple)",
                }}
              >
                SR
              </div>
            </div>
          </div>

          {/* Floating badges */}
          {[
            { val: "3+", label: "Years Exp.", pos: { bottom: 32, left: -24 } },
            { val: "40+", label: "Projects", pos: { top: 32, right: -24 } },
          ].map((b) => (
            <div
              key={b.val}
              style={{
                position: "absolute",
                padding: "12px 20px",
                borderRadius: 16,
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(108,99,255,0.2)",
                background: "rgba(10,10,20,0.8)",
                fontSize: 13,
                fontWeight: 500,
                ...b.pos,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 24,
                  fontWeight: 700,
                  color: "var(--acc-violet)",
                }}
              >
                {b.val}
              </div>
              <div style={{ fontSize: 12, color: "var(--txt-muted)" }}>{b.label}</div>
            </div>
          ))}

          <style>{`
            @keyframes ringPulse {
              0%,100%{opacity:0.2;transform:scale(1)}
              50%{opacity:0.6;transform:scale(1.05)}
            }
          `}</style>
        </div>

        {/* Text */}
        <div className="reveal" style={{ transitionDelay: "0.15s" }}>
          <div className="section-label">Who I Am</div>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "clamp(32px,5vw,56px)",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            <span className="grad-text">Designing the</span>
            <br />
            <span className="acc-text">Future Web</span>
          </h2>

          <p
            style={{
              color: "var(--txt-secondary)",
              lineHeight: 1.9,
              marginBottom: 20,
              fontSize: 16,
            }}
          >
            I'm Sourav Roy — a frontend developer and creative technologist passionate about
            building immersive digital experiences that live at the intersection of aesthetics
            and performance.
          </p>
          <p
            style={{
              color: "var(--txt-secondary)",
              lineHeight: 1.9,
              marginBottom: 40,
              fontSize: 16,
            }}
          >
            With expertise in React ecosystems, Three.js, and modern design systems, I transform
            complex ideas into elegant, responsive interfaces that users love to interact with.
          </p>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="reveal glass-card"
                style={{
                  padding: 24,
                  transitionDelay: `${0.1 * (i + 1)}s`,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: 36,
                    fontWeight: 700,
                    background: "linear-gradient(135deg, var(--acc-purple), var(--acc-cyan))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.num}
                </div>
                <div style={{ fontSize: 13, color: "var(--txt-muted)", marginTop: 4 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
