import { usePortfolio } from '../hooks/usePortfolio'
import CircuitBackground from './CircuitBackground'

export default function HeroSection() {
  const { profile, specSheet } = usePortfolio()

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pad pt-24"
    >
      <CircuitBackground />

      <div className="relative z-10">
        <p className="reveal mb-4 font-mono text-xs tracking-[0.3em] text-copper">
          // {profile.status.toUpperCase()}
        </p>

        <h1
          className="reveal font-display font-bold leading-[0.95] text-silk"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 6.5rem)', animationDelay: '0.08s' }}
        >
          {profile.name}
        </h1>

        <p
          className="reveal mt-5 max-w-xl text-lg text-muted md:text-xl"
          style={{ animationDelay: '0.16s' }}
        >
          {profile.tagline}
        </p>

        <p
          className="reveal mt-2 max-w-2xl font-mono text-sm leading-relaxed tracking-wide text-signal"
          style={{ animationDelay: '0.22s' }}
        >
          {profile.specialization}
        </p>

        <div
          className="reveal mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-4 border-t border-panel-line pt-6 sm:grid-cols-4"
          style={{ animationDelay: '0.3s' }}
        >
          {specSheet.map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted">
                {item.label.toUpperCase()}
              </p>
              <p className="mt-1 text-sm text-silk">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
