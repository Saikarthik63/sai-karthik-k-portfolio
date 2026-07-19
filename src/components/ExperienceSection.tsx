import { usePortfolio } from '../hooks/usePortfolio'
import { Reveal } from './motion/Reveal'

export default function ExperienceSection() {
  const { experience } = usePortfolio()

  return (
    <section id="experience" className="pad relative border-t border-panel-line py-24 md:py-32">
      <Reveal>
        <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-orange">
          04 / EXPERIENCE
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-silk md:text-4xl">
          Professional Experience
        </h2>
      </Reveal>

      <div className="relative mt-12 space-y-8 pl-8">
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-orange via-copper-dim to-transparent" />
        {experience.map((role, i) => (
          <Reveal key={role.company} delay={i * 0.1}>
            <div className="relative">
              <span className="node-pulse absolute -left-8 top-2 h-3.5 w-3.5 rounded-full border-2 border-orange bg-void" />
              <div className="glow-ring glow-ring-orange glass rounded-xl p-6 md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-silk">
                    {role.role} <span className="text-muted">— {role.company}</span>
                  </h3>
                  <span className="rounded-full border border-panel-line px-2.5 py-1 font-mono text-[11px] text-muted">
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
          </Reveal>
        ))}
      </div>
    </section>
  )
}
