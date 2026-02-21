import ScrollReveal from '@/components/ui/ScrollReveal'

const steps = [
  {
    num: '01',
    phase: 'Phase One',
    title: 'The Tasting',
    subtitle: 'Data & Domain Audit',
    desc: "We begin with a rigorous examination of your data landscape, domain vocabulary, and task taxonomy. Like assessing a vineyard's terroir, we evaluate what raw intelligence exists and what must be cultivated.",
  },
  {
    num: '02',
    phase: 'Phase Two',
    title: 'The Pairing',
    subtitle: 'Model Selection & System Design',
    desc: 'Every domain has its perfect model. We architect the retrieval pipeline, select and configure the foundation model, and design the evaluation harness before a single fine-tuning epoch begins.',
  },
  {
    num: '03',
    phase: 'Phase Three',
    title: 'The Cellar',
    subtitle: 'Fine-Tuning & RAG Construction',
    desc: 'In the cellar, the real work begins. QLoRA fine-tuning, vector database population, hybrid retrieval calibration, and systematic red-teaming until the system achieves its target accuracy threshold.',
  },
  {
    num: '04',
    phase: 'Phase Four',
    title: 'The Service',
    subtitle: 'Launch, Monitor, Evolve',
    desc: "Deployment is not delivery — it's the beginning of stewardship. We monitor drift, retrain on edge cases, and evolve the system as your domain evolves. Intelligence that ages like a great wine.",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container-wide">
        <ScrollReveal>
          <div style={{ marginBottom: 80, textAlign: 'center' }}>
            <div style={{ fontFamily: 'Space Mono', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#4361ee', marginBottom: 16 }}>
              // The Method
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.1 }}>
              How We Curate<br />
              <em style={{ color: '#c9a84c' }}>Your Intelligence</em>
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ position: 'relative' }}>
          {/* Spine line */}
          <div style={{
            position: 'absolute',
            left: 32,
            top: 0,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, #00f5d4, rgba(0,245,212,0.1))',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: 48,
                  paddingBottom: 60,
                  paddingLeft: 0,
                  position: 'relative',
                }}>
                  {/* Number + dot */}
                  <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      position: 'absolute',
                      top: 8,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: '#050505',
                      border: '1px solid #00f5d4',
                      zIndex: 2,
                    }} />
                    <div style={{
                      fontFamily: 'Cormorant Garamond',
                      fontSize: 48,
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.06)',
                      lineHeight: 1,
                      marginTop: -4,
                      transition: 'color 0.3s',
                    }}>
                      {step.num}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ paddingTop: 4 }}>
                    <div style={{ fontFamily: 'Space Mono', fontSize: 9, letterSpacing: '0.25em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 8 }}>
                      {step.phase}
                    </div>
                    <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: 28, fontWeight: 400, color: 'rgba(255,255,255,0.9)', marginBottom: 4, lineHeight: 1.2 }}>
                      {step.title} — <em style={{ color: '#c9a84c' }}>{step.subtitle}</em>
                    </h3>
                    <p style={{ fontFamily: 'Syne', fontSize: 14, lineHeight: 1.9, color: 'rgba(255,255,255,0.5)', maxWidth: 600 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
