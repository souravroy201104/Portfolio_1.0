// src/components/ui/SectionDivider.tsx
// Decorative gradient line used between sections

interface Props {
  /** Extra Tailwind / inline classes */
  className?: string;
}

export default function SectionDivider({ className }: Props) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 5%",
      }}
    >
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(108,99,255,0.4), rgba(56,189,248,0.4), transparent)",
        }}
      />
    </div>
  );
}
