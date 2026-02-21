import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/navigation/Nav'
import CursorSystem from '@/components/ui/CursorSystem'
import VoiceToast from '@/components/ui/VoiceToast'
import NeuralNetworkWrapper from '@/components/canvas/NeuralNetworkWrapper'

export const metadata: Metadata = {
  title: 'Quantum Renaissance — Reimagining Intelligence. Redefining Innovation.',
  description: 'Elite AI consultancy specializing in RAG architecture, LLM fine-tuning, and multi-agent orchestration systems. Founded by Mayank Shekhar.',
  openGraph: {
    title: 'Quantum Renaissance',
    description: 'The Sommelier of Intelligence — bespoke AI systems curated with precision.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NeuralNetworkWrapper />
        <CursorSystem />
        <VoiceToast />
        <Nav />
        <main style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  )
}
