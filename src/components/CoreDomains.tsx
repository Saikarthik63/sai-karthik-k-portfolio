import { motion } from 'framer-motion'
import { Cpu, CircuitBoard, Wifi, Brain, Network, Eye, Code2, Car, Zap } from 'lucide-react'
import type { ComponentType } from 'react'
import { usePortfolio } from '../hooks/usePortfolio'
import { Reveal, StaggerGroup, StaggerItem } from './motion/Reveal'

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

const ACCENT_CLASSES: Record<string, { glow: string; text: string; bg: string; shadow: string }> = {
  cyan: { glow: 'glow-ring-cyan', text: 'text-cyan', bg: 'bg-cyan-dim/25', shadow: '0 0 20px -4px rgba(34,211,238,0.55)' },
  blue: { glow: 'glow-ring-blue', text: 'text-blue', bg: 'bg-blue-dim/25', shadow: '0 0 20px -4px rgba(77,141,255,0.55)' },
  purple: { glow: 'glow-ring-purple', text: 'text-purple', bg: 'bg-purple-dim/25', shadow: '0 0 20px -4px rgba(180,139,250,0.55)' },
  emerald: { glow: 'glow-ring-emerald', text: 'text-emerald', bg: 'bg-emerald-dim/25', shadow: '0 0 20px -4px rgba(52,211,153,0.55)' },
  orange: { glow: 'glow-ring-orange', text: 'text-orange', bg: 'bg-orange-dim/25', shadow: '0 0 20px -4px rgba(251,146,60,0.55)' },
}

export default function CoreDomains() {
  const { coreDomains } = usePortfolio()

  return (
    <section id="domains" className="pad relative border-t border-panel-line py-24 md:py-32">
      <Reveal>
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
      </Reveal>

      <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coreDomains.map((domain) => {
          const Icon = ICONS[domain.icon] ?? Cpu
          const accent = ACCENT_CLASSES[domain.accent] ?? ACCENT_CLASSES.cyan
          return (
            <StaggerItem key={domain.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`glass glow-ring ${accent.glow} group h-full rounded-xl p-6`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-lg ${accent.bg} ${accent.text} transition-shadow duration-300 group-hover:shadow-[var(--icon-glow)]`}
                  style={{ ['--icon-glow' as string]: accent.shadow }}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-silk">
                  {domain.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {domain.description}
                </p>
              </motion.div>
            </StaggerItem>
          )
        })}
      </StaggerGroup>
    </section>
  )
}
