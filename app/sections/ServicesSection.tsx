'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

const services = [
  {
    num: '01',
    icon: '🧠',
    title: 'RAG Systems & Knowledge Architecture',
    accentColor: '#00f5d4',
    body: 'We design retrieval-augmented generation systems that eliminate hallucination and unlock your proprietary knowledge. From vector database architecture to chunking strategies and hybrid retrieval pipelines, every system is engineered for production-grade accuracy.',
    tags: ['LangChain', 'Pinecone', 'ChromaDB', 'LlamaIndex'],
  },
  {
    num: '02',
    icon: '⚗️',
    title: 'Fine-Tuning & Model Distillation',
    accentColor: '#c9a84c',
    body: 'Domain-specific fine-tuning transforms general-purpose models into precise instruments calibrated for your industry. Using QLoRA and PEFT techniques, we deliver model ownership without the infrastructure overhead of full training runs.',
    tags: ['QLoRA', 'PEFT', 'DeepSpeed', 'Hugging Face'],
  },
  {
    num: '03',
    icon: '🕸️',
    title: 'Multi-Agent Orchestration Systems',
    accentColor: '#4361ee',
    body: 'Autonomous pipelines of specialist agents — each with defined roles, memory, and tools — that execute complex research-to-action workflows. From competitive intelligence to automated code review, multi-agent systems compress weeks of work into hours.',
    tags: ['AutoGen', 'CrewAI', 'LangGraph', 'Anthropic API'],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container-wide">
        <ScrollReveal>
          <div style={{ marginBottom: 64, textAlign: 'center' }}>
            <div style={{ fontFamily: 'Space Mono', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#00f5d4', marginBottom: 16 }}>
              // Intelligence Services
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.1 }}>
              The Three Pillars of<br />
              <em style={{ color: '#c9a84c' }}>Curated Intelligence</em>
            </h2>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 12,
          overflow: 'hidden',
        }}>
          {services.map((svc, i) => (
            <ScrollReveal key={svc.num} delay={i * 100}>
              <div
                className="card"
                style={{
                  background: '#050505',
                  padding: '48px 40px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'none',
                  transition: 'background 0.3s ease',
                  height: '100%',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0,245,212,0.03)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#050505'
                }}
              >
                {/* Accent line */}
                <div style={{
                  width: 32,
                  height: 2,
                  background: svc.accentColor,
                  marginBottom: 32,
                  transition: 'width 0.3s ease',
                }} />

                {/* Icon */}
                <div style={{ fontSize: 32, marginBottom: 20, filter: 'grayscale(0.5)', transition: 'filter 0.3s' }}>
                  {svc.icon}
                </div>

                <h3 style={{
                  fontFamily: 'Cormorant Garamond',
                  fontSize: 24,
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: 16,
                  lineHeight: 1.3,
                }}>
                  {svc.title}
                </h3>

                <p style={{
                  fontFamily: 'Syne',
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: 28,
                }}>
                  {svc.body}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {svc.tags.map((tag) => (
                    <span key={tag} style={{
                      fontFamily: 'Space Mono',
                      fontSize: 9,
                      letterSpacing: '0.15em',
                      padding: '5px 10px',
                      border: `1px solid ${svc.accentColor}33`,
                      color: svc.accentColor,
                      borderRadius: 4,
                      textTransform: 'uppercase',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Ghost number */}
                <div style={{
                  position: 'absolute',
                  bottom: 16,
                  right: 24,
                  fontFamily: 'Cormorant Garamond',
                  fontSize: 80,
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.03)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}>
                  {svc.num}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
