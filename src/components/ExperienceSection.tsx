import { usePortfolio } from '../hooks/usePortfolio'

export default function ExperienceSection() {
  const { experience } = usePortfolio()

  return (
    <section id="experience" className="pad border-t border-panel-line py-24 md:py-32">
      <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-orange">
        04 / EXPERIENCE
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-silk md:text-4xl">
        Professional Experience
      </h2>

      <div className="mt-10 border-t border-panel-line">
        {experience.map((role, i) => (
          <div
            key={role.company}
            className="grid gap-4 border-b border-panel-line py-8 md:grid-cols-[110px_1fr]"
          >
            <div className="font-mono text-sm text-copper">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-silk">
                  {role.role} <span className="text-muted">— {role.company}</span>
                </h3>
                <span className="rounded border border-panel-line px-2 py-1 font-mono text-[11px] text-muted">
                  {role.period}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs tracking-wide text-muted">
                {role.location}
              </p>
              <p className="mt-3 text-sm text-silk/90">{role.summary}</p>
              <ul className="mt-3 space-y-2">
                {role.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-muted">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-signal" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
