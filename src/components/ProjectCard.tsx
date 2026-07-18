import type { Project } from '../types/portfolio'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <div
      className="sticky top-[84px] mb-6 rounded-lg border border-panel-line bg-panel p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition-colors hover:border-copper-dim md:p-10"
      style={{ top: `${84 + index * 14}px` }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-copper">
            {String(index + 1).padStart(2, '0')} · {project.subtitle.toUpperCase()}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-silk md:text-3xl">
            {project.title}
          </h3>
        </div>
        {project.highlight && (
          <span className="rounded-full border border-signal-dim bg-signal-dim/30 px-3 py-1 font-mono text-[10px] tracking-widest text-signal">
            FLAGSHIP
          </span>
        )}
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-panel-line px-3 py-1 font-mono text-[11px] text-silk/80"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-panel-line pt-4 font-mono text-xs text-muted">
        <span>ROLE: {project.role}</span>
        <span className="h-1 w-1 rounded-full bg-panel-line" />
        <span>{project.year}</span>
        {project.link && (
          <>
            <span className="h-1 w-1 rounded-full bg-panel-line" />
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-signal hover:underline"
            >
              VIEW PROJECT →
            </a>
          </>
        )}
      </div>
    </div>
  )
}
