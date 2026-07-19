import { usePortfolio } from '../hooks/usePortfolio'
import { Reveal, StaggerGroup, StaggerItem } from './motion/Reveal'

const CATEGORY_COLORS = ['text-cyan', 'text-blue', 'text-purple', 'text-emerald', 'text-orange', 'text-cyan']
const GLOW_RINGS = ['glow-ring-cyan', 'glow-ring-blue', 'glow-ring-purple', 'glow-ring-emerald', 'glow-ring-orange', 'glow-ring-cyan']

export default function SkillsSection() {
  const { technicalSkills } = usePortfolio()

  return (
    <section id="skills" className="pad relative border-t border-panel-line py-24 md:py-32">
      <Reveal>
        <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-emerald">
          03 / TECHNICAL SKILLS
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-silk md:text-4xl">
          Skills
        </h2>
      </Reveal>

      <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technicalSkills.map((cat, i) => (
          <StaggerItem key={cat.name}>
            <div className={`glass glow-ring ${GLOW_RINGS[i % GLOW_RINGS.length]} h-full rounded-xl p-6`}>
              <p className={`font-mono text-[11px] tracking-[0.2em] ${CATEGORY_COLORS[i % CATEGORY_COLORS.length]}`}>
                {cat.name.toUpperCase()}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((skillItem) => (
                  <span
                    key={skillItem}
                    className="rounded-full border border-panel-line px-3 py-1 text-xs text-silk/90 transition-colors hover:border-silk/30 hover:bg-white/5"
                  >
                    {skillItem}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}
