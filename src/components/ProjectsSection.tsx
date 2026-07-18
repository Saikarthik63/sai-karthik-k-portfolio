import { usePortfolio } from '../hooks/usePortfolio'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  const { projects } = usePortfolio()
  const sorted = [...projects].sort((a, b) => Number(b.highlight) - Number(a.highlight))

  return (
    <section id="projects" className="pad border-t border-panel-line py-24 md:py-32">
      <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-copper">
        04_PROJECTS
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-silk md:text-4xl">
        Build Log
      </h2>

      <div className="mt-10">
        {sorted.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
