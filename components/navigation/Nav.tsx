'use client'

import { useEffect, useState } from 'react'
import VoiceCommandButton from './VoiceCommandButton'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Concierge', href: '#concierge' },
  { label: 'Founder', href: '#founder' },
  { label: 'Process', href: '#process' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 48px' : '24px 48px',
        background: scrolled ? 'rgba(5,5,5,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          width: 40, height: 40,
          border: '1px solid #c9a84c',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Space Mono', fontWeight: 700, fontSize: 13,
          color: '#c9a84c', letterSpacing: '0.1em',
        }}>QR</div>
        <div>
          <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 16, fontWeight: 400, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.05em' }}>
            Quantum Renaissance
          </div>
          <div style={{ fontFamily: 'Space Mono', fontSize: 9, color: '#00f5d4', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Sommelier of Intelligence
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <div style={{ display: 'flex', gap: 36 }}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{
              fontFamily: 'Space Mono',
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)',
              textDecoration: 'none',
              cursor: 'none',
              transition: 'color 0.2s',
              position: 'relative',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00f5d4')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <VoiceCommandButton />
        <a
          href="#concierge"
          style={{
            padding: '10px 24px',
            background: '#00f5d4',
            color: '#050505',
            fontFamily: 'Space Mono',
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: 4,
            fontWeight: 700,
            cursor: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#c9a84c')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#00f5d4')}
        >
          Commission Intelligence
        </a>
      </div>
    </nav>
  )
}
