'use client'

import { useEffect, useState } from 'react'
import { useQRStore } from '@/lib/store'

export default function VoiceToast() {
  const { voiceTranscript } = useQRStore()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!voiceTranscript) return
    setVisible(true)
    const t = setTimeout(() => setVisible(false), 4000)
    return () => clearTimeout(t)
  }, [voiceTranscript])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 32,
        left: '50%',
        transform: `translateX(-50%) translateY(${visible ? 0 : '20px'})`,
        opacity: visible ? 1 : 0,
        transition: 'all 0.3s ease',
        zIndex: 9000,
        background: 'rgba(0,0,0,0.85)',
        border: '1px solid rgba(0,245,212,0.4)',
        backdropFilter: 'blur(20px)',
        borderRadius: 8,
        padding: '12px 20px',
        minWidth: 280,
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 9, fontFamily: 'Space Mono', color: '#00f5d4', letterSpacing: '0.2em', marginBottom: 4 }}>
        VOICE COMMAND DETECTED
      </div>
      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', fontFamily: 'Syne' }}>
        &ldquo;{voiceTranscript}&rdquo;
      </div>
    </div>
  )
}
