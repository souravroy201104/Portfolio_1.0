// src/app/layout.tsx
import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sourav Roy — Frontend Developer & Creative Technologist",
  description:
    "Portfolio of Sourav Roy — a frontend developer crafting immersive 3D web experiences with React, Three.js, and Framer Motion.",
  keywords: [
    "Sourav Roy",
    "frontend developer",
    "React developer",
    "Three.js",
    "Next.js",
    "portfolio",
    "web designer",
  ],
  authors: [{ name: "Sourav Roy" }],
  openGraph: {
    title: "Sourav Roy — Frontend Developer",
    description: "Crafting digital experiences that blur design and technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
