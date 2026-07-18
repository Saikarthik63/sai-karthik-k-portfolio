import { useEffect, useState } from 'react'

const PINS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-void/90 backdrop-blur border-b border-panel-line' : 'bg-transparent'
      }`}
    >
      <nav className="pad flex h-[64px] items-center justify-between">
        <a href="#home" className="font-mono text-xs tracking-[0.2em] text-signal">
          SK<span className="text-copper">.</span>DEV
        </a>
        <ul className="hidden gap-1 md:flex">
          {PINS.map((pin) => (
            <li key={pin.href}>
              <a
                href={pin.href}
                className="group flex items-center gap-2 rounded px-3 py-2 font-mono text-[11px] tracking-widest text-muted transition-colors hover:text-silk"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-copper-dim transition-colors group-hover:bg-signal" />
                {pin.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="font-mono text-[11px] tracking-widest text-copper hover:text-signal md:hidden"
        >
          MENU
        </a>
      </nav>
    </header>
  )
}
