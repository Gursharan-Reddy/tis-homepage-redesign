# Tulas International School (TIS) - Homepage Redesign

A modern, animated, high-converting redesign of the Tulas International School homepage, engineered with fluid animations, mobile responsiveness, and a modular architecture.

## Live Demo

- **Live URL:** [Insert Vercel / Netlify Link Here]
- **Repository:** [Insert GitHub Repo Link Here]

## Tech Stack

- **Framework:** React.js 18+ with Vite
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel / Netlify

## Standout Features Implemented

### 1. Scroll Progress Bar

- **Concept:** A fixed indicator bar pinned to the top of the viewport that represents the user's scroll depth in real time.
- **Implementation:** Driven by a custom React hook that tracks `window.scrollY` against the document height, scaled smoothly using Framer Motion transformations.

### 2. Scroll-Triggered Reveals

- **Concept:** Content blocks, statistics, and academic program cards stagger smoothly into view as the user scrolls down the page.
- **Implementation:** Uses Framer Motion's `whileInView` with optimized viewport triggers (`viewport={{ once: true }}`) to maintain consistent 60 FPS performance.

## Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tis-homepage-redesign.git
cd tis-homepage-redesign
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to view the application.

## Component Architecture Overview

The project is structured modularly to maintain separation of concerns and clean code practices:

- `src/components/ui/` - Reusable UI primitives (buttons, badges, cards).
- `src/components/layout/` - Layout wrappers (`Navbar.jsx`, `Footer.jsx`).
- `src/components/sections/` - Main page sections (`HeroSection.jsx`, `AboutSection.jsx`, `ProgramsSection.jsx`, `TestimonialsSection.jsx`, `CtaSection.jsx`).
- `src/components/animation/` - Animation drivers (`ScrollProgress.jsx`).
- `src/hooks/` - Custom React hooks (`useScrollProgress.js`).
- `src/data/` - Static content and school statistics (`schoolData.js`).

## Brand Identity Retained

The redesign faithfully preserves Tulas International School's official brand identity, incorporating the official school color palette (Deep Navy `#0F2C59` and Warm Gold `#C5A059`), authentic copy, and high-conversion Call-To-Action layouts from tis.edu.in.