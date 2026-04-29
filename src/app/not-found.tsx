// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-primary)",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(80px, 15vw, 160px)",
          fontWeight: 800,
          background: "linear-gradient(135deg, var(--acc-purple), var(--acc-cyan))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
          marginBottom: 16,
        }}
      >
        404
      </div>

      <h1
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: 28,
          fontWeight: 700,
          color: "var(--txt-primary)",
          marginBottom: 12,
        }}
      >
        Page Not Found
      </h1>

      <p
        style={{
          fontSize: 16,
          color: "var(--txt-muted)",
          maxWidth: 400,
          lineHeight: 1.7,
          marginBottom: 40,
        }}
      >
        Looks like this page drifted into the void. Let's get you back to solid ground.
      </p>

      <Link
        href="/"
        style={{
          padding: "16px 40px",
          background: "linear-gradient(135deg, var(--acc-purple), var(--acc-violet))",
          color: "white",
          borderRadius: 30,
          textDecoration: "none",
          fontWeight: 500,
          fontSize: 14,
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}
