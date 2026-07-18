import { usePortfolio } from '../hooks/usePortfolio'

export default function AboutSection() {
  const { profile } = usePortfolio()

  return (
    <section id="about" className="pad border-t border-panel-line py-24 md:py-32">
      <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-copper">
        01 / ABOUT
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-silk md:text-4xl">
        About Me
      </h2>
      <p
        className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        style={{ overflowWrap: 'normal', wordBreak: 'normal' }}
      >
        {profile.bio}
      </p>
    </section>
  )
}
