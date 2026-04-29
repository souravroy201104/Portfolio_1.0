# Sourav Roy — World-Class Portfolio

> An Awwwards-level personal portfolio built with Next.js 14, Three.js / React Three Fiber, Framer Motion, Tailwind CSS, and GSAP-ready architecture.

---

## ✨ Features

| Category | What's included |
|---|---|
| **3D / WebGL** | React Three Fiber distort-orb hero, orbital rings, star field, floating particles |
| **Animations** | Framer Motion page-load sequence, scroll-triggered reveals, role typewriter, ambient orb drift |
| **UI** | Custom dual-layer cursor, cinematic loader, back-to-top, section dividers, glass cards |
| **Sections** | Hero · About · Skills · Projects · Experience · Testimonials · Contact · Footer |
| **Mobile** | Fully responsive, slide-in mobile drawer menu, touch-friendly interactions |
| **SEO** | Next.js metadata API, OpenGraph tags, sitemap, robots.txt |
| **API** | `/api/contact` route ready to wire up Resend / SendGrid |
| **DX** | TypeScript throughout, path aliases (`@/*`), ESLint, clean folder structure |

---

## 📁 Folder Structure

```
sourav-portfolio/
├── public/                          # Static assets (favicon, og-image, etc.)
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout — fonts + metadata
│   │   ├── page.tsx                 # Home page — composes all sections
│   │   ├── not-found.tsx            # Custom 404
│   │   ├── sitemap.ts               # Auto-generated sitemap
│   │   ├── robots.ts                # robots.txt
│   │   └── api/
│   │       └── contact/route.ts     # Contact form API endpoint
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Sticky glassmorphism navbar
│   │   │   ├── MobileMenu.tsx       # Slide-in mobile drawer
│   │   │   └── Footer.tsx           # Minimal footer with socials
│   │   ├── sections/
│   │   │   ├── Hero.tsx             # Fullscreen 3D hero
│   │   │   ├── About.tsx            # Split layout with holographic card
│   │   │   ├── Skills.tsx           # Interactive skill grid
│   │   │   ├── Projects.tsx         # Premium project cards
│   │   │   ├── Experience.tsx       # Animated vertical timeline
│   │   │   ├── Testimonials.tsx     # Auto-rotating glass cards
│   │   │   └── Contact.tsx          # Futuristic contact form
│   │   ├── three/
│   │   │   └── HeroOrb.tsx          # React Three Fiber distort sphere
│   │   └── ui/
│   │       ├── Loader.tsx           # Cinematic loading screen
│   │       ├── CustomCursor.tsx     # Dual-layer custom cursor
│   │       ├── BackToTop.tsx        # Scroll-aware back-to-top button
│   │       ├── ScrollReveal.tsx     # IntersectionObserver reveal engine
│   │       ├── SectionDivider.tsx   # Gradient line divider
│   │       └── ThemeSwitcher.tsx    # Dark/light toggle
│   ├── data/
│   │   └── portfolio.ts             # All content — skills, projects, experience, etc.
│   ├── hooks/
│   │   ├── useScrollReveal.ts       # Imperative scroll-reveal hook
│   │   ├── useMouseParallax.ts      # Normalised mouse position hook
│   │   └── useCounter.ts            # Animated number counter hook
│   └── styles/
│       └── globals.css              # Design tokens, base styles, animations
├── .env.example                     # Environment variable template
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm start
```

---

## 🎨 Customisation Guide

### Update personal content

All portfolio data lives in **`src/data/portfolio.ts`**:

```ts
// Add / edit your skills
export const SKILLS = [
  { name: "React", icon: "⚛️", level: 92, category: "Frontend" },
  // ...
];

// Add / edit your projects
export const PROJECTS = [
  {
    title: "My Project",
    description: "...",
    tags: ["Next.js", "TypeScript"],
    emoji: "🚀",
    gradient: "linear-gradient(135deg,#1a0533,#0d1b4b)",
    demo: "https://...",
    github: "https://github.com/...",
  },
  // ...
];
```

### Change colour palette

Edit CSS variables in **`src/styles/globals.css`**:

```css
:root {
  --acc-purple: #6c63ff;   /* Primary accent */
  --acc-violet: #a78bfa;   /* Secondary accent */
  --acc-cyan:   #38bdf8;   /* Tertiary accent */
}
```

### Replace the 3D orb

Edit **`src/components/three/HeroOrb.tsx`**. It uses `@react-three/drei` primitives — swap `Sphere` for any geometry, or import a GLTF model with `useGLTF`.

### Wire up the contact form

In **`src/app/api/contact/route.ts`**, uncomment the Resend block and add:

```bash
npm install resend
```

Then set in `.env.local`:
```
RESEND_API_KEY=re_xxxx
CONTACT_TO_EMAIL=you@example.com
```

---

## 📦 Tech Stack

| Tool | Purpose |
|---|---|
| **Next.js 14** (App Router) | Framework, SSR, routing, metadata |
| **React 18** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Declarative animations, page transitions |
| **Three.js + React Three Fiber** | 3D WebGL hero scene |
| **@react-three/drei** | Three.js helpers (Stars, Sphere, Ring, MeshDistortMaterial) |
| **next/font** | Zero-layout-shift font loading |

---

## 🌐 Deployment

### Vercel (recommended — zero config)

```bash
npx vercel --prod
```

### Netlify

```bash
npm run build
# Publish the `.next` folder via Netlify CLI or drag-and-drop
```

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## 📄 License

MIT © Sourav Roy — free to use and modify for personal portfolios.

---

*Built with ❤️ and an unhealthy obsession with 60 fps.*
