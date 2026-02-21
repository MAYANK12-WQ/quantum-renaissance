'use client'

import { useState, useEffect } from 'react'
import { Mic, MicOff } from 'lucide-react'
import { useQRStore } from '@/lib/store'

interface ISpeechRecognition extends EventTarget {
  continuous: boolean
  interimResults: boolean
  onstart: (() => void) | null
  onend: (() => void) | null
  onresult: ((event: ISpeechRecognitionEvent) => void) | null
  start: () => void
}

interface ISpeechRecognitionEvent {
  results: { [index: number]: { [index: number]: { transcript: string } } }
}

interface WindowWithSpeech extends Window {
  SpeechRecognition?: new () => ISpeechRecognition
  webkitSpeechRecognition?: new () => ISpeechRecognition
}

export default function VoiceCommandButton() {
  const [listening, setListening] = useState(false)
  const [supported, setSupported] = useState(false)
  const { setVoiceTranscript, setSiteState } = useQRStore()

  useEffect(() => {
    const w = window as WindowWithSpeech
    setSupported(!!(w.SpeechRecognition || w.webkitSpeechRecognition))
  }, [])

  const handleVoice = () => {
    if (!supported) {
      setVoiceTranscript('Voice commands require Chrome or Edge')
      return
    }

    const w = window as WindowWithSpeech
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition
    if (!SR) return
    const recognition = new SR()
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onstart = () => setListening(true)
    recognition.onend = () => setListening(false)

    recognition.onresult = (event: ISpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript.toLowerCase()
      setVoiceTranscript(transcript)

      if (/service|work/.test(transcript)) {
        setSiteState('SERVICES_FOCUS')
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
      } else if (/concierge|ask|question/.test(transcript)) {
        setSiteState('CONCIERGE_FOCUS')
        document.getElementById('concierge')?.scrollIntoView({ behavior: 'smooth' })
      } else if (/founder|mayank|about/.test(transcript)) {
        setSiteState('FOUNDER_FOCUS')
        document.getElementById('founder')?.scrollIntoView({ behavior: 'smooth' })
      } else if (/process|how/.test(transcript)) {
        document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    recognition.start()
  }

  return (
    <button
      onClick={handleVoice}
      title="Voice Command"
      style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: listening ? 'rgba(0,245,212,0.15)' : 'var(--glass-bg)',
        border: `1px solid ${listening ? '#00f5d4' : 'var(--glass-border)'}`,
        color: listening ? '#00f5d4' : 'rgba(255,255,255,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'none',
        transition: 'all 0.3s ease',
        animation: listening ? 'pulse-ring 2s ease infinite' : 'none',
      }}
    >
      {listening ? <Mic size={16} /> : <MicOff size={16} />}
    </button>
  )
}
