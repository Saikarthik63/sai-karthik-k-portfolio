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
    CoreDomains.tsx         8 domain cards (Embedded, Firmware, IoT, AI, ML, CV, Software, Automotive)
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

## Design notes

- Palette: near-black PCB-style background, copper + signal-green accents, off-white
  "silkscreen" text — a technical, engineering-grounded look without leaning on embedded-only
  vocabulary, so it reads as multidisciplinary rather than a single-specialty student site.
- Signature element: an animated signal pulse traveling along a circuit trace in the hero.
- Respects `prefers-reduced-motion` and is responsive from 375px up (nav collapses to a
  simple link below the `lg` breakpoint).
