import { usePortfolio } from '../hooks/usePortfolio'

export default function SkillsSection() {
  const { technicalSkills } = usePortfolio()

  return (
    <section id="skills" className="pad border-t border-panel-line py-24 md:py-32">
      <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-copper">
        03 / TECHNICAL SKILLS
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-silk md:text-4xl">
        Skills
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technicalSkills.map((cat) => (
          <div
            key={cat.name}
            className="rounded-md border border-panel-line bg-panel/60 p-6 transition-colors hover:border-copper-dim"
          >
            <p className="font-mono text-[11px] tracking-[0.2em] text-signal">
              {cat.name.toUpperCase()}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-panel-line px-3 py-1 text-xs text-silk/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
