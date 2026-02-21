import ScrollReveal from '@/components/ui/ScrollReveal'

const expertise = [
  { label: 'RAG Architecture', color: '#00f5d4' },
  { label: 'LLM Fine-Tuning', color: '#c9a84c' },
  { label: 'Multi-Agent Systems', color: '#4361ee' },
  { label: 'Vector Databases', color: '#00f5d4' },
  { label: 'Model Evaluation', color: '#c9a84c' },
  { label: 'AI Product Strategy', color: '#4361ee' },
]

export default function FounderSection() {
  return (
    <section id="founder" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left: Image */}
          <ScrollReveal>
            <div style={{ position: 'relative', paddingTop: 24, paddingRight: 24 }}>
              {/* Gold offset border */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 24,
                right: -24,
                bottom: -24,
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: 4,
                transition: 'all 0.4s ease',
              }} />
              {/* Image placeholder */}
              <div style={{
                position: 'relative',
                aspectRatio: '3/4',
                background: 'linear-gradient(160deg, rgba(0,245,212,0.08) 0%, rgba(67,97,238,0.12) 50%, rgba(201,168,76,0.06) 100%)',
                borderRadius: 4,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 72, fontWeight: 300, color: 'rgba(0,245,212,0.3)', lineHeight: 1 }}>MS</div>
                  <div style={{ fontFamily: 'Space Mono', fontSize: 10, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.2em', marginTop: 8 }}>FOUNDER</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="glass-card" style={{
                position: 'absolute',
                bottom: -8,
                right: -8,
                padding: '14px 18px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>🏆</div>
                <div style={{ fontFamily: 'Space Mono', fontSize: 8, letterSpacing: '0.15em', color: '#00f5d4', textTransform: 'uppercase', lineHeight: 1.6 }}>
                  Expert in<br />RAG · Fine-Tuning<br />Multi-Agent
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal delay={200}>
            <div>
              <div style={{ fontFamily: 'Space Mono', fontSize: 10, letterSpacing: '0.25em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: 20 }}>
                // The Sommelier
              </div>

              <h2 style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 300,
                fontSize: 'clamp(40px, 4vw, 60px)',
                lineHeight: 1.05,
                marginBottom: 8,
              }}>
                Mayank<br />Shekhar
              </h2>

              <div style={{ fontFamily: 'Space Mono', fontSize: 10, letterSpacing: '0.25em', color: '#00f5d4', textTransform: 'uppercase', marginBottom: 32 }}>
                AI/ML Engineer &amp; Founder
              </div>

              <p style={{ fontFamily: 'Syne', fontSize: 15, lineHeight: 1.9, color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>
                Just as a master sommelier can identify a wine&apos;s vintage, terroir, and winemaker from a single sip, Mayank curates AI models with the same precision — selecting the exact blend of GPT-4o, Claude, and Llama architectures that your domain demands.
              </p>

              <p style={{ fontFamily: 'Syne', fontSize: 15, lineHeight: 1.9, color: 'rgba(255,255,255,0.6)', marginBottom: 40 }}>
                With deep expertise in RAG architecture, QLoRA fine-tuning, and multi-agent orchestration, he has deployed over 47 production AI systems across healthcare, legal, and fintech verticals — achieving 99% accuracy benchmarks where generic models plateau at 71%.
              </p>

              {/* Expertise grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 40 }}>
                {expertise.map((e) => (
                  <div key={e.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: e.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: 'Syne', fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{e.label}</span>
                  </div>
                ))}
              </div>

              {/* Contact chips */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="tel:+916201096937" className="glass-card" style={{
                  padding: '10px 18px',
                  fontFamily: 'Space Mono',
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  cursor: 'none',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  📞 +91 6201 096937
                </a>
                <a href="mailto:quantumrenessiance@gmail.com" className="glass-card" style={{
                  padding: '10px 18px',
                  fontFamily: 'Space Mono',
                  fontSize: 11,
                  color: '#00f5d4',
                  textDecoration: 'none',
                  cursor: 'none',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  ✉ quantumrenessiance@gmail.com
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
