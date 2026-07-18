import { usePortfolio } from '../hooks/usePortfolio'

export default function EducationCerts() {
  const { education, certifications } = usePortfolio()

  return (
    <section id="education" className="pad border-t border-panel-line py-24 md:py-32">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-copper">
            05_EDUCATION
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold text-silk md:text-3xl">
            Bootloader
          </h2>
          <div className="mt-8 space-y-6">
            {education.map((ed) => (
              <div key={ed.institution} className="border-l-2 border-panel-line pl-5">
                <p className="font-mono text-[11px] text-muted">{ed.period}</p>
                <p className="mt-1 font-medium text-silk">{ed.credential}</p>
                <p className="text-sm text-muted">{ed.institution}</p>
                <p className="mt-1 font-mono text-xs text-signal">{ed.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-copper">
            06_CERTIFICATIONS
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold text-silk md:text-3xl">
            Fuse Bits
          </h2>
          <ul className="mt-8 space-y-3">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="flex items-center justify-between gap-4 border-b border-panel-line pb-3 text-sm"
              >
                <div>
                  <p className="text-silk">{c.name}</p>
                  <p className="text-xs text-muted">{c.issuer}</p>
                </div>
                <span className="whitespace-nowrap font-mono text-[11px] text-muted">
                  {c.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
