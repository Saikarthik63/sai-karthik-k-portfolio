import { useEffect, useState } from 'react'

const PINS = [
  { label: 'HOME', href: '#home', id: 'home' },
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'DOMAINS', href: '#domains', id: 'domains' },
  { label: 'SKILLS', href: '#skills', id: 'skills' },
  { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
  { label: 'PROJECTS', href: '#projects', id: 'projects' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = PINS.map((p) => document.getElementById(p.id)).filter(
      (el): el is HTMLElement => !!el
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-[0_8px_32px_-16px_rgba(0,0,0,0.6)]' : 'bg-transparent'
      }`}
    >
      <nav className="pad flex h-[64px] items-center justify-between">
        <a href="#home" className="group flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-signal">
          <span className="relative flex h-2 w-2">
            <span className="node-pulse absolute inline-flex h-full w-full rounded-full bg-signal" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          SK<span className="text-copper">.</span>DEV
        </a>
        <ul className="hidden gap-0.5 lg:flex">
          {PINS.map((pin) => (
            <li key={pin.href}>
              <a
                href={pin.href}
                className={`group relative flex items-center gap-2 rounded-full px-3 py-2 font-mono text-[11px] tracking-widest transition-colors ${
                  active === pin.id ? 'text-silk' : 'text-muted hover:text-silk'
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    active === pin.id ? 'bg-signal shadow-[0_0_8px_2px_rgba(77,255,168,0.6)]' : 'bg-copper-dim group-hover:bg-signal'
                  }`}
                />
                {pin.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-panel-line px-3 py-1.5 font-mono text-[11px] tracking-widest text-copper transition-colors hover:border-signal-dim hover:text-signal lg:hidden"
        >
          MENU
        </a>
      </nav>
    </header>
  )
}
