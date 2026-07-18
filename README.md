# Sai Karthik K — Portfolio

A personal portfolio site built with React, TypeScript, Vite, and Tailwind CSS, styled around
an embedded-systems / PCB visual language (circuit traces, register maps, datasheet labels)
to match Sai's background in firmware, IoT, and embedded hardware.

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
  data/portfolio.json     ← all content lives here (edit this file, not the components)
  types/portfolio.ts       ← TypeScript types for the content shape
  hooks/usePortfolio.ts    ← typed hook that components read content through
  components/
    Navbar.tsx             chip-pin style nav
    CircuitBackground.tsx  animated circuit-trace hero background (signature element)
    HeroSection.tsx
    AboutSection.tsx
    SkillsSection.tsx       "Pinout" — skills grouped by category
    ExperienceSection.tsx   "Register Map" — work experience
    ProjectsSection.tsx / ProjectCard.tsx   "Build Log" — sticky-stacked project cards
    EducationCerts.tsx      education + certifications
    Footer.tsx / SocialLinks.tsx
```

## Editing content

Everything text-based — name, bio, skills, experience, projects, education, certifications,
social links — lives in `src/data/portfolio.json`. Change that file; no component needs to
be touched. Leave a social link (`github`, `instagram`, `website`) as an empty string to hide
its icon automatically.

To add a new project, append an object to the `projects` array with a unique `id`. Set
`"highlight": true` on at most one project to pin it first and give it a "FLAGSHIP" badge.

## Design notes

- Palette: near-black PCB substrate background, copper accent, signal-green accent, off-white
  "silkscreen" text — drawn from the subject matter (embedded hardware / circuit boards)
  rather than a generic dark theme.
- Signature element: an animated signal pulse traveling along an SVG circuit trace in the hero.
- Experience entries are numbered like memory-mapped registers (`0x00`, `0x01`...) and section
  eyebrows read like header-file comments (`// 01_ABOUT`), tying structure to the domain.
- Respects `prefers-reduced-motion` and is responsive from 375px up.
