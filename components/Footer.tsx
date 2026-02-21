'use client'

const footerLinks = {
  Services: ['RAG Architecture', 'Fine-Tuning', 'Multi-Agent Systems', 'AI Strategy', 'Model Evaluation'],
  Models: ['GPT-4o / o1', 'Claude 3.5 Sonnet', 'Llama 3.1', 'Mistral', 'Gemini Pro'],
}

export default function Footer() {
  return (
    <footer style={{
      background: '#0a0a0f',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '80px 0 40px',
      position: 'relative',
      zIndex: 10,
    }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, border: '1px solid #c9a84c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Mono', fontSize: 13, fontWeight: 700, color: '#c9a84c' }}>QR</div>
              <span style={{ fontFamily: 'Cormorant Garamond', fontSize: 18, color: 'rgba(255,255,255,0.9)' }}>Quantum Renaissance</span>
            </div>
            <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 300 }}>
              &ldquo;Reimagining <span style={{ color: '#c9a84c' }}>Intelligence</span>. Redefining <span style={{ color: '#00f5d4' }}>Innovation</span>.&rdquo;
            </p>
            <p style={{ fontFamily: 'Syne', fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 16, lineHeight: 1.7, maxWidth: 280 }}>
              An elite AI consultancy curating bespoke intelligence solutions with sommelier-level precision.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <div style={{ fontFamily: 'Space Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
                {heading}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map((link) => (
                  <a key={link} href="#" style={{ fontFamily: 'Syne', fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', cursor: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00f5d4')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Connect */}
          <div>
            <div style={{ fontFamily: 'Space Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
              Connect
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: '+91 6201 096937', href: 'tel:+916201096937' },
                { label: 'quantumrenessiance@gmail.com', href: 'mailto:quantumrenessiance@gmail.com' },
                { label: 'LinkedIn', href: '#' },
                { label: 'GitHub', href: 'https://github.com/MAYANK12-WQ' },
                { label: 'Book a Call', href: '#concierge' },
              ].map((item) => (
                <a key={item.label} href={item.href} style={{ fontFamily: 'Syne', fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', cursor: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00f5d4')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontFamily: 'Space Mono', fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>
            © 2025 Quantum Renaissance. All intelligence curated with precision.
          </span>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            {['Privacy Policy', 'Terms'].map((t) => (
              <a key={t} href="#" style={{ fontFamily: 'Space Mono', fontSize: 10, color: 'rgba(255,255,255,0.25)', textDecoration: 'none', letterSpacing: '0.1em', cursor: 'none' }}>{t}</a>
            ))}
            <span style={{ fontFamily: 'Space Mono', fontSize: 10, color: '#00f5d4', letterSpacing: '0.1em' }}>CSP v3.0 Active</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
