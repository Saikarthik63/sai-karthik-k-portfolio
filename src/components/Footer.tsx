import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { usePortfolio } from '../hooks/usePortfolio'
import SocialLinks from './SocialLinks'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
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
    <footer id="contact" className="pad border-t border-panel-line pt-20">
      <div className="grid gap-12 pb-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold text-silk">
            {profile.shortName}
          </p>
          <p className="mt-1 text-sm text-muted">{profile.specialization}</p>
          <p className="mt-1 font-mono text-xs text-muted">{profile.location}</p>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-copper">NAVIGATE</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-muted hover:text-silk">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-copper">REACH OUT</p>
          <button
            onClick={copyEmail}
            className="mt-4 flex items-center gap-2 text-sm text-muted hover:text-silk"
          >
            {profile.social.email}
            {copied ? <Check size={14} className="text-signal" /> : <Copy size={14} />}
          </button>
          <p className="mt-2 text-sm text-muted">{profile.social.phone}</p>
          <div className="mt-4">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-panel-line py-6 font-mono text-[11px] text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React · TypeScript · Tailwind CSS</p>
      </div>
    </footer>
  )
}
