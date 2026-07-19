import { usePortfolio } from '../hooks/usePortfolio'
import { Reveal } from './motion/Reveal'

export default function AboutSection() {
  const { profile } = usePortfolio()

  return (
    <section id="about" className="pad relative border-t border-panel-line py-24 md:py-32">
      <Reveal>
        <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-blue">
          01 / ABOUT
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-silk md:text-4xl">
          About Me
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="glow-ring glow-ring-blue glass relative mt-8 max-w-2xl overflow-hidden rounded-xl p-6 md:p-8">
          <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-cyan via-blue to-purple" />
          <p
            className="text-base leading-relaxed text-muted md:text-lg"
            style={{ overflowWrap: 'normal', wordBreak: 'normal' }}
          >
            {profile.bio}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
