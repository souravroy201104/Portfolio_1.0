// src/components/layout/Footer.tsx
import { SOCIAL_LINKS } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(108,99,255,0.1)",
        padding: "60px 5%",
        textAlign: "center",
        marginTop: 60,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: 28,
          fontWeight: 800,
          background: "linear-gradient(135deg, var(--acc-purple), var(--acc-cyan))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: 24,
        }}
      >
        Sourav Roy
      </div>

      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          marginBottom: 32,
          flexWrap: "wrap",
        }}
      >
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.label}
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "var(--bg-secondary)",
              border: "1px solid rgba(108,99,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              textDecoration: "none",
              cursor: "none",
              transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--acc-purple)";
              el.style.transform = "translateY(-4px)";
              el.style.boxShadow = "0 10px 30px var(--glow-purple)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(108,99,255,0.15)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            {link.icon}
          </a>
        ))}
      </div>

      <p style={{ fontSize: 13, color: "var(--txt-muted)" }}>
        © {new Date().getFullYear()} Sourav Roy. Crafted with passion & precision.
      </p>
    </footer>
  );
}
