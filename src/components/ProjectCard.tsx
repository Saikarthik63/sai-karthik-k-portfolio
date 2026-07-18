import type { Project } from '../types/portfolio'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-panel-line bg-panel p-6 transition-all hover:-translate-y-1 hover:border-copper-dim">
      <span className="w-fit rounded-full border border-signal-dim bg-signal-dim/20 px-3 py-1 font-mono text-[10px] tracking-widest text-signal">
        {project.domain.toUpperCase()}
      </span>

      <h3 className="mt-4 font-display text-xl font-semibold text-silk">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-muted">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-copper" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <div className="flex flex-wrap gap-2 border-t border-panel-line pt-4">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-panel-line px-3 py-1 font-mono text-[11px] text-silk/80"
            >
              {s}
            </span>
          ))}
        </div>
        <p className="mt-3 font-mono text-[11px] text-muted">{project.year}</p>
      </div>
    </div>
  )
}
