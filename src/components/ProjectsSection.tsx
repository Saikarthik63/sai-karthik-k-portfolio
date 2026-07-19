import { useMemo, useState } from 'react'
import { usePortfolio } from '../hooks/usePortfolio'
import ProjectCard from './ProjectCard'

const ALL = 'All'

export default function ProjectsSection() {
  const { projects, projectDomains } = usePortfolio()
  const [active, setActive] = useState<string>(ALL)

  const filters = useMemo(() => [ALL, ...projectDomains], [projectDomains])
  const visible = active === ALL ? projects : projects.filter((p) => p.domain === active)

  return (
    <section id="projects" className="pad border-t border-panel-line py-24 md:py-32">
      <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-cyan">
        05 / PROJECTS
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-silk md:text-4xl">
        Projects
      </h2>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-2 font-mono text-xs tracking-wide transition-all ${
              active === f
                ? 'border-transparent bg-gradient-to-r from-cyan/25 to-purple/25 text-silk shadow-[0_0_0_1px_rgba(34,211,238,0.4)]'
                : 'border-panel-line text-muted hover:border-copper-dim hover:text-silk'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
