import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { usePortfolio } from '../hooks/usePortfolio'
import CircuitBackground from './CircuitBackground'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function HeroSection() {
  const { profile, specSheet } = usePortfolio()

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pad pt-24"
    >
      <CircuitBackground />

      <motion.div
        className="relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="glass mb-5 inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-xs tracking-[0.25em] text-copper"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-copper" />
          {profile.status.toUpperCase()}
        </motion.p>

        <motion.h1
          variants={item}
          className="text-gradient font-display font-bold leading-[0.95]"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 6.5rem)' }}
        >
          {profile.name}
        </motion.h1>

        <motion.p variants={item} className="mt-5 max-w-xl text-lg text-muted md:text-xl">
          {profile.tagline}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-2 max-w-2xl font-mono text-sm leading-relaxed tracking-wide text-signal"
        >
          {profile.specialization}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {specSheet.map((sItem) => (
            <div
              key={sItem.label}
              className="glow-ring glow-ring-cyan glass rounded-lg px-4 py-3 transition-transform hover:-translate-y-0.5"
            >
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted">
                {sItem.label.toUpperCase()}
              </p>
              <p className="mt-1 text-sm text-silk">{sItem.value}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-muted"
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  )
}
