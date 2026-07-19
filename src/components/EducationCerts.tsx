import { Award } from 'lucide-react'
import { usePortfolio } from '../hooks/usePortfolio'
import { Reveal, StaggerGroup, StaggerItem } from './motion/Reveal'

const CERT_ACCENTS = [
  { text: 'text-cyan', bg: 'bg-cyan-dim/25', glow: 'glow-ring-cyan' },
  { text: 'text-blue', bg: 'bg-blue-dim/25', glow: 'glow-ring-blue' },
  { text: 'text-purple', bg: 'bg-purple-dim/25', glow: 'glow-ring-purple' },
  { text: 'text-emerald', bg: 'bg-emerald-dim/25', glow: 'glow-ring-emerald' },
  { text: 'text-orange', bg: 'bg-orange-dim/25', glow: 'glow-ring-orange' },
]

export default function EducationCerts() {
  const { education, certifications } = usePortfolio()

  return (
    <>
      <section id="certifications" className="pad relative border-t border-panel-line py-24 md:py-32">
        <Reveal>
          <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-blue">
            06 / CERTIFICATIONS
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-silk md:text-4xl">
            Certifications
          </h2>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => {
            const accent = CERT_ACCENTS[i % CERT_ACCENTS.length]
            return (
              <StaggerItem key={c.name}>
                <div className={`glass glow-ring ${accent.glow} flex h-full flex-col gap-3 rounded-xl p-5`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${accent.bg} ${accent.text}`}>
                      <Award size={16} strokeWidth={1.75} />
                    </div>
                    <span className="whitespace-nowrap font-mono text-[11px] text-muted">
                      {c.date}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-snug text-silk">{c.name}</p>
                    <p className="mt-1 text-xs text-muted">{c.issuer}</p>
                    {c.id && (
                      <p className="mt-1 font-mono text-[10px] text-muted/70">ID: {c.id}</p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </section>

      <section id="education" className="pad relative border-t border-panel-line py-24 md:py-32">
        <Reveal>
          <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-purple">
            07 / EDUCATION
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-silk md:text-4xl">
            Education
          </h2>
        </Reveal>

        <div className="relative mt-10 max-w-2xl space-y-8 pl-7">
          <div className="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-purple via-signal-dim to-transparent" />
          {education.map((ed, i) => (
            <Reveal key={`${ed.institution}-${ed.credential}`} delay={i * 0.08}>
              <div className="relative">
                <span className="node-pulse absolute -left-7 top-1.5 h-3 w-3 rounded-full border-2 border-signal bg-void" />
                <p className="font-mono text-[11px] text-muted">{ed.period}</p>
                <p className="mt-1 font-medium text-silk">{ed.credential}</p>
                <p className="text-sm text-muted">{ed.institution}</p>
                <p className="mt-1 font-mono text-xs text-signal">{ed.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
