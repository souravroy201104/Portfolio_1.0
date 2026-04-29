// src/data/portfolio.ts

export const SKILLS = [
  { name: "HTML5",      icon: "🌐", level: 95, category: "Frontend" },
  { name: "CSS3",       icon: "🎨", level: 92, category: "Frontend" },
  { name: "JavaScript", icon: "⚡", level: 90, category: "Frontend" },
  { name: "React",      icon: "⚛️", level: 92, category: "Frontend" },
  { name: "Next.js",    icon: "▲",  level: 85, category: "Frontend" },
  { name: "Tailwind",   icon: "💨", level: 90, category: "Frontend" },
  { name: "Three.js",   icon: "🔮", level: 75, category: "3D / Graphics" },
  { name: "Node.js",    icon: "🟢", level: 80, category: "Backend" },
  { name: "MongoDB",    icon: "🍃", level: 75, category: "Backend" },
  { name: "TypeScript", icon: "🔷", level: 82, category: "Frontend" },
  { name: "Figma",      icon: "🖌️", level: 85, category: "Design" },
  { name: "Git",        icon: "🌿", level: 90, category: "Tools" },
];

export const PROJECTS = [
  {
    title: "Nebula Dashboard",
    description:
      "A real-time analytics platform with 3D data visualization, AI-powered insights, and a fully customisable widget system.",
    tags: ["React", "Three.js", "Node.js", "WebSocket"],
    emoji: "🚀",
    gradient: "linear-gradient(135deg,#1a0533,#0d1b4b)",
    demo: "#",
    github: "#",
  },
  {
    title: "Luminary eCommerce",
    description:
      "Premium fashion marketplace with AR try-on, cinematic animations, and a seamless Stripe-powered checkout.",
    tags: ["Next.js", "Stripe", "MongoDB", "Framer Motion"],
    emoji: "✨",
    gradient: "linear-gradient(135deg,#0d1f1a,#1a3a2a)",
    demo: "#",
    github: "#",
  },
  {
    title: "Synapse AI Chat",
    description:
      "Conversational AI interface with real-time streaming, markdown rendering, syntax highlighting, and conversation history.",
    tags: ["React", "OpenAI API", "WebSocket", "Tailwind"],
    emoji: "🧠",
    gradient: "linear-gradient(135deg,#1a1024,#2d1b69)",
    demo: "#",
    github: "#",
  },
  {
    title: "Atlas Portfolio",
    description:
      "Award-winning portfolio template featuring WebGL shaders, GSAP scroll-based animations, and Sanity CMS integration.",
    tags: ["Three.js", "GSAP", "Sanity", "Next.js"],
    emoji: "🌍",
    gradient: "linear-gradient(135deg,#0d2233,#1a4a5e)",
    demo: "#",
    github: "#",
  },
  {
    title: "Pulse Music App",
    description:
      "Streaming platform with an audio visualiser, waveform scrubbing, playlist management, and real-time social features.",
    tags: ["React", "Web Audio API", "Socket.io", "Redis"],
    emoji: "🎵",
    gradient: "linear-gradient(135deg,#2d0d1a,#4d1a3a)",
    demo: "#",
    github: "#",
  },
  {
    title: "Forge CMS",
    description:
      "Headless CMS with a drag-and-drop page builder, granular role management, media library, and multi-site support.",
    tags: ["Next.js", "PostgreSQL", "AWS S3", "tRPC"],
    emoji: "⚒️",
    gradient: "linear-gradient(135deg,#1a1400,#3a2d00)",
    demo: "#",
    github: "#",
  },
];

export const EXPERIENCE = [
  {
    date: "2024 — Present",
    role: "Senior Frontend Developer",
    company: "TechVision Labs",
    description:
      "Leading frontend architecture for enterprise SaaS products. Built a component library adopted across 6 products, optimised Core Web Vitals to 99+ scores, and mentored 4 junior developers.",
  },
  {
    date: "2022 — 2024",
    role: "Frontend Developer",
    company: "Creative Minds Agency",
    description:
      "Delivered 20+ client websites with immersive 3D experiences and micro-animations. Specialised in React, Three.js, and GSAP-powered interfaces.",
  },
  {
    date: "2021 — 2022",
    role: "Junior Web Developer",
    company: "StartupHub Inc.",
    description:
      "Built responsive web applications and internal tools. Contributed to a design system with 100+ reusable components adopted across 8 products.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Sourav transformed our vision into a stunning digital experience. His attention to detail and ability to blend design with cutting-edge tech is unmatched.",
    name: "Priya Sharma",
    position: "CEO, NexGen Startups",
    initials: "PS",
  },
  {
    quote:
      "Working with Sourav was a revelation. He delivered a portfolio site so beautiful it won an Awwwards nomination. Incredible talent and professionalism.",
    name: "Marcus Chen",
    position: "Creative Director, Studio Eight",
    initials: "MC",
  },
  {
    quote:
      "The performance, the animations, the sheer polish of what he built — our conversion rates jumped 40% in the first month. Absolutely brilliant work.",
    name: "Sarah Williams",
    position: "Head of Product, Luminary",
    initials: "SW",
  },
];

export const SOCIAL_LINKS = [
  { label: "GitHub",   href: "https://roy",            icon: "🐙" },
  { label: "LinkedIn", href: "https://linkedin.com/in/souravroy",       icon: "🔗" },
  { label: "Twitter",  href: "https://twitter.com/souravroy",           icon: "🐦" },
  { label: "Dribbble", href: "https://dribbble.com/souravroy",          icon: "🎨" },
  { label: "Email",    href: "mailto:souravroy201104@gmail.com",               icon: "📧" },
];

export const CONTACT_INFO = [
  { label: "Email",    value: "souravroy201104@gmail.com",          href: "mailto:sourav@example.com", icon: "📧" },
  { label: "WhatsApp", value: "+880 15189 25767",             href: "#",                         icon: "💬" },
  { label: "LinkedIn", value: "linkedin.com/in/souravroy",   href: "#",                         icon: "🔗" },
  { label: "GitHub",   value: "https://github.com/souravroy201104",        href: "#",                         icon: "🐙" },
];
