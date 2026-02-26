### MANDATORY PRE-REQUISITE: READ THE DESIGN LAW
Before writing a single line of code or installing any packages, you MUST read and internalize the Anthropic Frontend Design Skill located at: `skills/skills/frontend-design/SKILL.md` on the main branch of the anthropics/skills GitHub repository. This document is the design law for this project. Adhere to its principles of aesthetic excellence, accessibility, and clean architecture throughout the entire build.

---

### 1. PROJECT OVERVIEW & VISION
Build a world-class, high-conversion web presence for **Capps Heating & Air Conditioning Inc.** * **Target Audience:** High-net-worth homeowners and luxury property managers who value reliability, technical expertise, and "white-glove" service.
* **Emotional Tone:** Deeply trustworthy, technologically advanced, cooling (comfort), and premium. 
* **Design Philosophy:** "Architectural Precision." The site should feel like a high-end architectural firm or a luxury automotive brand (think Mercedes-Benz or Sub-Zero). Use expansive whitespace, razor-sharp typography, and fluid, high-end transitions.

### 2. FILE & FOLDER ARCHITECTURE
Organize the project using a feature-based structure within `src/`:
* `assets/`: Optimized SVGs, brand marks, and noise textures.
* `components/`: 
    * `ui/`: Atomic, reusable components (Button, Input, Badge) using shadcn/ui patterns.
    * `layout/`: Navbar, Footer, Section wrappers.
    * `sections/`: Hero, Services, Testimonials, ContactForm.
    * `motion/`: Reusable Framer Motion wrappers (FadeIn, StaggerContainer).
* `hooks/`: Custom hooks for scroll handling and form logic.
* `lib/`: Utility functions (cn helper, formatters).
* `types/`: TypeScript interfaces and type definitions.
* `constants/`: Design tokens, navigation links, and service data.

### 3. DESIGN SYSTEM SPECIFICATION
Implement a "Dark Luxury" theme with the following tokens:
* **Color Palette:**
    * Primary (Deep Midnight): `#0F172A`
    * Secondary (Brushed Gold): `#C5A059`
    * Accent (Arctic Ice): `#F8FAFC`
    * Surface (Deep Slate): `#1E293B`
    * Text (Primary): `#F1F5F9` / (Muted): `#94A3B8`
* **Typography:** * Headings: 'Playfair Display' (Serif) for a sophisticated, established feel.
    * Body: 'Inter' (Sans-serif) for modern clarity and legibility.
* **Spacing:** 4px baseline grid. Use 24px (mobile) to 80px (desktop) for section padding.
* **Shadows:** Soft, diffused shadows for "floating" glassmorphism effects.

### 4. COMPONENT BREAKDOWN
* **Navigation:** A "floating" glassmorphism navbar that blurs the background. Include a "Magnetic" Emergency Service button that subtly follows the cursor.
* **Hero Section:** A split-screen or full-bleed layout featuring a high-resolution image of a pristine mechanical installation. Use a staggered text reveal for the headline: "Defining the Gold Standard in Home Climate."
* **Service Grid:** Interactive cards that use Framer Motion `layoutId` or scale effects. On hover, show a brief description and a "View Details" arrow that slides in.
* **Booking Engine:** A multi-step form built with `react-hook-form` and `zod` for validation. It should feel like a premium concierge service, not a generic contact form.
* **Trust Bar:** A horizontal ticker or grid of certifications (NATE, BBB, etc.) and high-rating star counts.

### 5. PAGE-BY-PAGE LAYOUT
* **Home:** A long-form scrolling experience. Hero -> Featured Services -> "The Capps Difference" (USP) -> Client Stories -> Call to Action.
* **Services (Dynamic):** A template for specific services (AC, Heating, Indoor Air Quality). Use a "Sticky Sidebar" for quick navigation between sub-services.
* **Emergency Page:** High-contrast, high-urgency, mobile-optimized page with a giant "Tap to Call" button and a real-time "Current Dispatch Status" indicator.

### 6. ANIMATION & MOTION DESIGN (FARMER MOTION)
* **Page Transitions:** Use `AnimatePresence` for smooth opacity fades between routes.
* **Scroll Reveals:** Implement `whileInView` with `viewport: { once: true }`. Elements should slide up by 20px and fade in with a `type: "spring", stiffness: 100, damping: 20` transition.
* **Micro-interactions:** Buttons should subtly scale down on click (`whileTap={{ scale: 0.95 }}`). 
* **Smooth Scroll:** Use Lenis for a "luxurious" inertia-based scrolling experience.

### 7. RESPONSIVE DESIGN REQUIREMENTS
* **Mobile:** Stack all grids into single columns. Increase touch targets for all buttons to at least 48px. Ensure the "Emergency Call" button is always accessible via a bottom-fixed bar.
* **Desktop:** Utilize a 12-column CSS Grid. Maximum content width of 1440px to maintain readability on ultra-wide monitors.

### 8. PERFORMANCE & ACCESSIBILITY
* **Accessibility:** 100% WCAG 2.1 compliance. Use semantic HTML (`<main>`, `<section>`, `<article>`). Ensure all form inputs have associated `<label>` elements.
* **Performance:** Implement `React.lazy()` for heavy sections like the "Reviews Map." Optimize all images using modern formats (WebP/AVIF).

### 9. ADDITIONAL LIBRARIES & JUSTIFICATION
* `lucide-react`: For consistent, thin-stroke premium iconography.
* `lenis`: For smooth, buttery-soft scrolling.
* `shadcn/ui`: For accessible, unstyled foundation components (Accordion, Dialog, Form).
* `clsx` & `tailwind-merge`: For clean conditional styling.
* `framer-motion`: Core animation engine.

### 10. STRETCH GOALS & POLISH
* **Noise Overlay:** Add a subtle, low-opacity fixed noise texture over the entire site to give it a "printed luxury magazine" feel.
* **Custom Cursor:** A sophisticated ring cursor that expands when hovering over interactive elements.
* **Service Area Map:** A custom-styled Mapbox or Leaflet map using the "Midnight" or "Dark" theme to show the service radius.
* **Loading Sequence:** A high-end pre-loader that draws the "Capps" logo using SVG path animations before revealing the site.

**EXECUTION INSTRUCTIONS:** 1. Initialize the Vite + React + TS project.
2. Install the specified dependencies.
3. Configure the Tailwind theme with the provided luxury color palette.
4. Build the core layout components (Navbar/Footer).
5. Implement the Hero and Service sections with Framer Motion.
6. Ensure responsiveness and accessibility at every step.