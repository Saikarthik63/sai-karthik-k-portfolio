# Sai Karthik K — Portfolio

A personal portfolio site built with React, TypeScript, Vite, and Tailwind CSS, presenting a
multidisciplinary engineering profile — embedded systems, firmware, IoT, AI/ML, computer
vision, software development, and automotive embedded systems — pulled directly from the
resume in `public/SaiKarthikK_Resume.pdf`.

## Install & run

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  data/portfolio.json      ← all content lives here (edit this file, not the components)
  types/portfolio.ts        ← TypeScript types for the content shape
  hooks/usePortfolio.ts     ← typed hook that components read content through
  components/
    Navbar.tsx              nav with Home / About / Domains / Skills / Experience / Projects / Contact
    CircuitBackground.tsx   animated circuit-trace hero background
    HeroSection.tsx
    AboutSection.tsx
    CoreDomains.tsx         9 domain cards (Embedded Systems, Embedded Software, IoT, AI, ML, CV, Edge AI, Automotive, Software Dev)
    SkillsSection.tsx       technical skills grouped by category
    ExperienceSection.tsx   internships
    ProjectsSection.tsx / ProjectCard.tsx   projects, filterable by domain
    EducationCerts.tsx      certification cards + education timeline
    Footer.tsx / SocialLinks.tsx   contact, resume download, socials
public/
  SaiKarthikK_Resume.pdf    served by the "Download Resume" button
```

## Editing content

Everything text-based lives in `src/data/portfolio.json` — profile, core domains, technical
skills, experience, projects, education, and certifications. Change that file; no component
needs to be touched.

- To add a project, append to `projects` with a `domain` matching one of the values in
  `projectDomains` (or add a new domain there too) — the filter tabs on the Projects section
  are generated from `projectDomains` automatically.
- Leave a social link (`github`, `instagram`, `website`) as an empty string to hide its icon.
- Replace `public/SaiKarthikK_Resume.pdf` with an updated resume any time — the filename is
  read from `profile.resumeFile` in the JSON, so update both together if you rename the file.

## Multicolor theme

Accent colors — cyan, electric blue, purple, emerald, and orange — are layered subtly on top of
the existing dark PCB-style base: rotating through section eyebrows, core-domain icon tiles,
skill-category labels, certification icons, and the resume-download button. The base surface,
text, and card colors are unchanged, so the effect reads as a professional multicolor tech
theme rather than a redesign.

## Premium visual pass (Framer Motion + glassmorphism)

This layer is 100% visual — no content, copy, links, or section order changed from the prior
version (`src/data/portfolio.json` is untouched).

- **Glassmorphism**: `.glass` / `.glass-strong` utilities (blurred translucent panels) on every
  card — domains, skills, projects, certifications, experience, footer.
- **Glow**: `.glow-ring-<color>` utilities add a colored ring + soft blur shadow on hover,
  matched per section/domain accent.
- **Gradient text**: the hero name uses an animated cyan → silk → purple → emerald sheen
  (`.text-gradient`).
- **Depth**: `CircuitBackground` now layers ambient blurred color blobs, multicolor traveling
  signal pulses, scattered pulsing particles, and a faint grain texture behind the circuit-trace
  grid.
- **Motion**: `src/components/motion/Reveal.tsx` provides `Reveal` / `StaggerGroup` /
  `StaggerItem` — Framer Motion scroll-triggered reveals used across every section. The Projects
  filter uses a `layoutId`-based sliding pill. Cards lift on hover via spring transitions.
  `MotionConfig reducedMotion="user"` in `App.tsx` makes all of this respect the OS-level
  "reduce motion" setting automatically.
- **Navbar**: persistent glass background, active-section indicator driven by
  `IntersectionObserver` (purely visual — same links, same click behavior as before).

## Design notes

- Palette: near-black PCB-style background, copper + signal-green accents, off-white
  "silkscreen" text — a technical, engineering-grounded look without leaning on embedded-only
  vocabulary, so it reads as multidisciplinary rather than a single-specialty student site.
- Signature element: an animated signal pulse traveling along a circuit trace in the hero.
- Respects `prefers-reduced-motion` and is responsive from 375px up (nav collapses to a
  simple link below the `lg` breakpoint).
