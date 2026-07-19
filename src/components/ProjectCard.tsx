import { motion } from 'framer-motion'
import type { Project } from '../types/portfolio'

interface Props {
  project: Project
}

const DOMAIN_STYLE: Record<string, { badge: string; glow: string }> = {
  'Embedded Systems': { badge: 'border-blue-dim bg-blue-dim/20 text-blue', glow: 'glow-ring-blue' },
  'IoT': { badge: 'border-cyan-dim bg-cyan-dim/20 text-cyan', glow: 'glow-ring-cyan' },
  'AI / Machine Learning': { badge: 'border-purple-dim bg-purple-dim/20 text-purple', glow: 'glow-ring-purple' },
  'Computer Vision': { badge: 'border-emerald-dim bg-emerald-dim/20 text-emerald', glow: 'glow-ring-emerald' },
}

export default function ProjectCard({ project }: Props) {
  const style = DOMAIN_STYLE[project.domain] ?? { badge: 'border-signal-dim bg-signal-dim/20 text-signal', glow: 'glow-ring-cyan' }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`glass glow-ring ${style.glow} flex h-full flex-col rounded-xl p-6`}
    >
      <span className={`w-fit rounded-full border px-3 py-1 font-mono text-[10px] tracking-widest ${style.badge}`}>
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
    </motion.div>
  )
}
