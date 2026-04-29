// src/components/sections/Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "16px 20px",
    background: "var(--bg-secondary)",
    border: "1px solid rgba(108,99,255,0.15)",
    borderRadius: 14,
    color: "var(--txt-primary)",
    fontFamily: "var(--font-dm-sans)",
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-label reveal">Get In Touch</div>
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
        <span className="grad-text">Let's Build </span>
        <span className="acc-text">Together</span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 80,
          marginTop: 60,
          alignItems: "start",
        }}
      >
        {/* Info */}
        <div className="reveal">
          <p
            style={{
              color: "var(--txt-secondary)",
              lineHeight: 1.9,
              marginBottom: 32,
              fontSize: 16,
            }}
          >
            Have a project in mind? I'd love to bring your vision to life. Reach out and let's
            create something extraordinary together.
          </p>

          {CONTACT_INFO.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="contact-item"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: 20,
                background: "var(--bg-secondary)",
                border: "1px solid rgba(108,99,255,0.1)",
                borderRadius: 16,
                marginBottom: 16,
                textDecoration: "none",
                color: "var(--txt-primary)",
                cursor: "none",
                transition: "border-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(108,99,255,0.4)";
                e.currentTarget.style.transform = "translateX(8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(108,99,255,0.1)";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(108,99,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: 12, color: "var(--txt-muted)", marginBottom: 2 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <div className="reveal" style={{ transitionDelay: "0.15s" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { key: "name", label: "NAME", placeholder: "Your name", type: "text" },
              { key: "email", label: "EMAIL", placeholder: "your@email.com", type: "email" },
              { key: "subject", label: "SUBJECT", placeholder: "Project inquiry", type: "text" },
            ].map((field) => (
              <div key={field.key} style={{ position: "relative" }}>
                <label
                  style={{
                    position: "absolute",
                    top: -10,
                    left: 16,
                    background: "var(--bg-secondary)",
                    padding: "0 8px",
                    fontSize: 12,
                    color: "var(--acc-violet)",
                    fontFamily: "var(--font-jetbrains)",
                    letterSpacing: 1,
                    zIndex: 1,
                  }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--acc-purple)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(108,99,255,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(108,99,255,0.15)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            ))}

            <div style={{ position: "relative" }}>
              <label
                style={{
                  position: "absolute",
                  top: -10,
                  left: 16,
                  background: "var(--bg-secondary)",
                  padding: "0 8px",
                  fontSize: 12,
                  color: "var(--acc-violet)",
                  fontFamily: "var(--font-jetbrains)",
                  letterSpacing: 1,
                  zIndex: 1,
                }}
              >
                MESSAGE
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--acc-purple)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(108,99,255,0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(108,99,255,0.15)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <motion.button
              onClick={handleSubmit}
              disabled={status === "sending"}
              whileHover={{ translateY: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "18px 40px",
                background:
                  status === "sent"
                    ? "linear-gradient(135deg,#10b981,#34d399)"
                    : "linear-gradient(135deg, var(--acc-purple), var(--acc-violet))",
                color: "white",
                border: "none",
                borderRadius: 30,
                fontSize: 15,
                fontWeight: 500,
                cursor: "none",
                transition: "background 0.4s, box-shadow 0.3s",
                boxShadow:
                  status === "sending" ? "none" : "0 0 30px var(--glow-purple)",
              }}
            >
              {status === "idle" && "Send Message →"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "✓ Message Sent!"}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
