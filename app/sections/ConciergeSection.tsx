'use client'

import { useState, useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useQRStore } from '@/lib/store'

const RAGVisualizerCanvas = dynamic(
  () => import('@/components/canvas/RAGVisualizerCanvas'),
  { ssr: false }
)

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: `Welcome. I am the Quantum Concierge — your guide to Quantum Renaissance's intelligence capabilities.\n\nI can help you understand our RAG architecture services, fine-tuning approaches, and multi-agent orchestration systems. What challenge shall we solve together?`,
}

export default function ConciergeSection() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { setRAGAnimation } = useQRStore()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async () => {
    if (!input.trim() || loading) return
    const userMsg: Message = { role: 'user', content: input }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)
    setRAGAnimation(true)
    setTimeout(() => setRAGAnimation(false), 3000)

    try {
      const res = await fetch('/api/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ''

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          assistantContent += decoder.decode(value, { stream: true })
          setMessages((prev) => {
            const updated = [...prev]
            updated[updated.length - 1] = { role: 'assistant', content: assistantContent }
            return updated
          })
        }
      }
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Connection error. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="concierge" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container-wide">
        <div style={{ marginBottom: 64, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Space Mono', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#00f5d4', marginBottom: 16 }}>
            // Quantum Concierge
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.1 }}>
            Speak to the<br />
            <em style={{ color: '#c9a84c' }}>Intelligence</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
          {/* Left: RAG Visualizer */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00f5d4', animation: 'pulse-ring 2s ease infinite' }} />
              <span style={{ fontFamily: 'Space Mono', fontSize: 8, letterSpacing: '0.2em', color: '#00f5d4', textTransform: 'uppercase' }}>
                Vector Space Active
              </span>
            </div>
            <RAGVisualizerCanvas />
            <div style={{ position: 'absolute', bottom: 12, right: 12, fontFamily: 'Space Mono', fontSize: 8, color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Knowledge Graph: 2,847 nodes
            </div>
          </div>

          {/* Right: Chat */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: 520 }}>
            {/* Header */}
            <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00f5d4', animation: 'pulse-ring 2s ease infinite' }} />
              <span style={{ fontFamily: 'Space Mono', fontSize: 11, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
                Quantum Concierge // RAG-v3
              </span>
              <span style={{ marginLeft: 'auto', fontFamily: 'Space Mono', fontSize: 9, color: '#00f5d4', letterSpacing: '0.15em' }}>
                ONLINE
              </span>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                    background: msg.role === 'user' ? 'rgba(201,168,76,0.2)' : 'rgba(0,245,212,0.15)',
                    border: `1px solid ${msg.role === 'user' ? '#c9a84c' : '#00f5d4'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Space Mono', fontSize: 11, color: msg.role === 'user' ? '#c9a84c' : '#00f5d4',
                  }}>
                    {msg.role === 'user' ? 'M' : '⚛'}
                  </div>
                  <div style={{
                    maxWidth: '75%',
                    background: msg.role === 'user' ? 'rgba(201,168,76,0.08)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${msg.role === 'user' ? 'rgba(201,168,76,0.2)' : 'rgba(255,255,255,0.07)'}`,
                    borderRadius: 8,
                    padding: '10px 14px',
                    fontFamily: 'Syne',
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.8)',
                    whiteSpace: 'pre-wrap',
                  }}>
                    {msg.content}
                    {loading && i === messages.length - 1 && msg.role === 'assistant' && (
                      <span style={{ animation: 'blink 1s step-end infinite', color: '#00f5d4' }}>&#x258C;</span>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 12 }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Ask about RAG, fine-tuning, or multi-agent systems..."
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 6,
                  padding: '10px 14px',
                  fontFamily: 'Syne',
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.8)',
                  outline: 'none',
                  cursor: 'none',
                }}
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                style={{
                  padding: '10px 20px',
                  background: loading ? 'rgba(0,245,212,0.3)' : '#00f5d4',
                  border: 'none',
                  borderRadius: 6,
                  color: '#050505',
                  fontFamily: 'Space Mono',
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: 'none',
                  transition: 'background 0.2s',
                }}
              >
                {loading ? '...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
