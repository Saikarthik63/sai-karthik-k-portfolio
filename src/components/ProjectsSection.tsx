import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { usePortfolio } from '../hooks/usePortfolio'
import ProjectCard from './ProjectCard'
import { Reveal, StaggerGroup, StaggerItem } from './motion/Reveal'

const ALL = 'All'

export default function ProjectsSection() {
  const { projects, projectDomains } = usePortfolio()
  const [active, setActive] = useState<string>(ALL)

  const filters = useMemo(() => [ALL, ...projectDomains], [projectDomains])
  const visible = active === ALL ? projects : projects.filter((p) => p.domain === active)

  return (
    <section id="projects" className="pad relative border-t border-panel-line py-24 md:py-32">
      <Reveal>
        <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-cyan">
          05 / PROJECTS
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-silk md:text-4xl">
          Projects
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative rounded-full px-4 py-2 font-mono text-xs tracking-wide transition-colors ${
                active === f ? 'text-void' : 'border border-panel-line text-muted hover:border-copper-dim hover:text-silk'
              }`}
            >
              {active === f && (
                <motion.span
                  layoutId="active-filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan to-purple"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}
