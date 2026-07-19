import { Cpu, CircuitBoard, Wifi, Brain, Network, Eye, Code2, Car, Zap } from 'lucide-react'
import type { ComponentType } from 'react'
import { usePortfolio } from '../hooks/usePortfolio'

const ICONS: Record<string, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  cpu: Cpu,
  chip: CircuitBoard,
  wifi: Wifi,
  brain: Brain,
  network: Network,
  eye: Eye,
  code: Code2,
  car: Car,
  zap: Zap,
}

const ACCENT_CLASSES: Record<string, { border: string; text: string; bg: string }> = {
  cyan: { border: 'group-hover:border-cyan-dim', text: 'text-cyan', bg: 'bg-cyan-dim/25' },
  blue: { border: 'group-hover:border-blue-dim', text: 'text-blue', bg: 'bg-blue-dim/25' },
  purple: { border: 'group-hover:border-purple-dim', text: 'text-purple', bg: 'bg-purple-dim/25' },
  emerald: { border: 'group-hover:border-emerald-dim', text: 'text-emerald', bg: 'bg-emerald-dim/25' },
  orange: { border: 'group-hover:border-orange-dim', text: 'text-orange', bg: 'bg-orange-dim/25' },
}

export default function CoreDomains() {
  const { coreDomains } = usePortfolio()

  return (
    <section id="domains" className="pad border-t border-panel-line py-24 md:py-32">
      <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-purple">
        02 / CORE DOMAINS
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-silk md:text-4xl">
        Where my interests lie
      </h2>
      <p className="mt-4 max-w-2xl text-muted">
        A multidisciplinary engineering profile spanning hardware, firmware, software, and
        intelligent systems — built on strong fundamentals and hands-on projects.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coreDomains.map((domain) => {
          const Icon = ICONS[domain.icon] ?? Cpu
          const accent = ACCENT_CLASSES[domain.accent] ?? ACCENT_CLASSES.cyan
          return (
            <div
              key={domain.name}
              className={`group rounded-md border border-panel-line bg-panel/60 p-6 transition-all hover:-translate-y-1 ${accent.border}`}
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-md border border-panel-line ${accent.bg} ${accent.text}`}>
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-silk">
                {domain.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {domain.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
