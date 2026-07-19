import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Download } from 'lucide-react'
import { usePortfolio } from '../hooks/usePortfolio'
import SocialLinks from './SocialLinks'
import { Reveal } from './motion/Reveal'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Domains', href: '#domains' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
]

export default function Footer() {
  const { profile } = usePortfolio()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.social.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard unavailable — no-op
    }
  }

  return (
    <footer id="contact" className="pad relative border-t border-panel-line pt-20">
      <Reveal>
        <p className="trace-line pl-10 font-mono text-xs tracking-[0.2em] text-emerald">
          08 / CONTACT
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-silk md:text-4xl">
          Let's talk
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Open to opportunities in embedded systems, firmware, software development, AI/ML, IoT,
          and automotive embedded systems.
        </p>

        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
          download
          className="glow-ring glow-ring-cyan mt-6 inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-cyan/20 via-blue/20 to-purple/20 px-5 py-2.5 font-mono text-xs tracking-widest text-silk shadow-[0_0_0_1px_rgba(77,141,255,0.4)]"
        >
          <Download size={14} /> DOWNLOAD RESUME
        </motion.a>
      </Reveal>

      <div className="mt-16 grid gap-12 pb-16 md:grid-cols-3">
        <Reveal delay={0.05}>
          <p className="font-display text-2xl font-semibold text-silk">
            {profile.shortName}
          </p>
          <p className="mt-1 text-sm text-muted">{profile.specialization}</p>
          <p className="mt-1 font-mono text-xs text-muted">{profile.location}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-mono text-[11px] tracking-[0.2em] text-copper">NAVIGATE</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-muted transition-colors hover:text-signal">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-mono text-[11px] tracking-[0.2em] text-copper">REACH OUT</p>
          <button
            onClick={copyEmail}
            className="mt-4 flex items-center gap-2 text-sm text-muted transition-colors hover:text-silk"
          >
            {profile.social.email}
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                >
                  <Check size={14} className="text-signal" />
                </motion.span>
              ) : (
                <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Copy size={14} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <p className="mt-2 text-sm text-muted">{profile.social.phone}</p>
          <div className="mt-4">
            <SocialLinks />
          </div>
        </Reveal>
      </div>

      <div className="flex flex-col gap-3 border-t border-panel-line py-6 font-mono text-[11px] text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React · TypeScript · Tailwind CSS</p>
      </div>
    </footer>
  )
}
