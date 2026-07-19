import { Award } from 'lucide-react'
import { usePortfolio } from '../hooks/usePortfolio'

const CERT_ACCENTS = [
  'text-cyan bg-cyan-dim/25',
  'text-blue bg-blue-dim/25',
  'text-purple bg-purple-dim/25',
  'text-emerald bg-emerald-dim/25',
  'text-orange bg-orange-dim/25',
]

export default function EducationCerts() {
  const { education, certifications } = usePortfolio()

  return (
    <>
      <section id="certifications" className="pad border-t border-panel-line py-24 md:py-32">
        <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-blue">
          06 / CERTIFICATIONS
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-silk md:text-4xl">
          Certifications
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <div
              key={c.name}
              className="flex flex-col gap-3 rounded-md border border-panel-line bg-panel/60 p-5 transition-colors hover:border-copper-dim"
            >
              <div className="flex items-start justify-between gap-3">
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-panel-line ${CERT_ACCENTS[i % CERT_ACCENTS.length]}`}>
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
          ))}
        </div>
      </section>

      <section id="education" className="pad border-t border-panel-line py-24 md:py-32">
        <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-purple">
          07 / EDUCATION
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-silk md:text-4xl">
          Education
        </h2>

        <div className="relative mt-10 max-w-2xl space-y-8 border-l-2 border-panel-line pl-6">
          {education.map((ed) => (
            <div key={`${ed.institution}-${ed.credential}`} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-signal bg-void" />
              <p className="font-mono text-[11px] text-muted">{ed.period}</p>
              <p className="mt-1 font-medium text-silk">{ed.credential}</p>
              <p className="text-sm text-muted">{ed.institution}</p>
              <p className="mt-1 font-mono text-xs text-signal">{ed.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
