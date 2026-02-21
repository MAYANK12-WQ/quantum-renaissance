import HeroParticleCanvas from '@/components/canvas/HeroParticleCanvas'

export default function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0,245,212,0.04) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 30% 80%, rgba(67,97,238,0.06) 0%, transparent 60%), #050505',
    }}>
      {/* Hero image frame — right side */}
      <div style={{
        position: 'absolute',
        right: '-5%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '65%',
        aspectRatio: '16/9',
        maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
      }}>
        {/* Gradient placeholder for hero image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0,245,212,0.1) 0%, rgba(67,97,238,0.15) 50%, rgba(201,168,76,0.08) 100%)',
          borderRadius: 4,
        }} />
        <HeroParticleCanvas />
      </div>

      {/* Content — left side */}
      <div className="container-wide" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: 700 }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <div style={{ width: 32, height: 1, background: '#00f5d4' }} />
            <span style={{ fontFamily: 'Space Mono', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#00f5d4' }}>
              Est. 2024 · New Delhi, India
            </span>
          </div>

          {/* H1 */}
          <h1 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 300,
            fontSize: 'clamp(52px, 7vw, 96px)',
            lineHeight: 0.95,
            marginBottom: 32,
            overflow: 'hidden',
          }}>
            <span style={{ display: 'block', animation: 'word-rise 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}>Reimagining</span>
            <span style={{ display: 'block', fontStyle: 'italic', color: '#c9a84c', animation: 'word-rise 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}>Intelligence.</span>
            <span style={{ display: 'block', animation: 'word-rise 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both' }}>Redefining</span>
            <span style={{ display: 'block', color: '#00f5d4', animation: 'word-rise 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s both' }}>Innovation.</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'Syne',
            fontSize: 15,
            lineHeight: 1.9,
            color: 'rgba(255,255,255,0.55)',
            maxWidth: 480,
            marginBottom: 40,
            animation: 'fade-up 0.8s ease 0.5s both',
          }}>
            We curate bespoke AI models with the precision of a master sommelier —
            selecting the perfect blend of GPT, Claude, and Llama to solve your most
            demanding intelligence challenges.
          </p>

          {/* CTA Row */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', animation: 'fade-up 0.8s ease 0.6s both' }}>
            <a href="#concierge" style={{
              padding: '14px 32px',
              background: '#00f5d4',
              color: '#050505',
              fontFamily: 'Space Mono',
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 700,
              borderRadius: 4,
              textDecoration: 'none',
              cursor: 'none',
              transition: 'background 0.2s',
            }}>
              Speak to Concierge →
            </a>
            <a href="#services" style={{
              padding: '14px 32px',
              background: 'transparent',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'Space Mono',
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 4,
              textDecoration: 'none',
              cursor: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}>
              Our Work →
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 48, marginTop: 64, animation: 'fade-up 0.8s ease 0.7s both' }}>
            {[
              { num: '47+', label: 'Models Deployed' },
              { num: '99%', label: 'Accuracy Rate' },
              { num: '3×', label: 'Avg. ROI Gain' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 36, fontWeight: 300, color: '#00f5d4', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: 'Space Mono', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: 40,
        left: 48,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        animation: 'fade-up 1s ease 1s both',
      }}>
        <div style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, #00f5d4, transparent)', animation: 'scroll-pulse 2s ease infinite' }} />
        <span style={{
          fontFamily: 'Space Mono',
          fontSize: 9,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
        }}>Scroll to explore</span>
      </div>
    </section>
  )
}
