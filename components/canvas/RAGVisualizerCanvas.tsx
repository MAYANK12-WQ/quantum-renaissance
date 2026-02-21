'use client'

import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { useQRStore } from '@/lib/store'

const TOPICS = [
  'RAG Systems',
  'Case Studies',
  'Fine-Tuning',
  'Multi-Agent',
  'GPT-4o',
  'Llama 3',
  'Claude',
  'Pinecone',
  'LangChain',
  'Eval Harness',
  'Embeddings',
]

export interface RAGVisualizerRef {
  triggerSearch: () => void
}

const RAGVisualizerCanvas = forwardRef<RAGVisualizerRef>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const searchingRef = useRef(false)
  const { ragAnimationActive } = useQRStore()

  useImperativeHandle(ref, () => ({
    triggerSearch: () => {
      searchingRef.current = true
      setTimeout(() => { searchingRef.current = false }, 3000)
    },
  }))

  useEffect(() => {
    if (ragAnimationActive) {
      searchingRef.current = true
      setTimeout(() => { searchingRef.current = false }, 3000)
    }
  }, [ragAnimationActive])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = 480
    const H = 480
    canvas.width = W
    canvas.height = H

    const cx = W / 2
    const cy = H / 2
    const radius = 160

    const nodePositions = TOPICS.map((_, i) => {
      if (i === 0) return { x: cx, y: cy }
      const angle = ((i - 1) / (TOPICS.length - 1)) * Math.PI * 2 - Math.PI / 2
      return { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius }
    })

    let t = 0
    let animId: number
    const pulsePhases = TOPICS.map(() => Math.random() * Math.PI * 2)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Grid background
      ctx.strokeStyle = 'rgba(255,255,255,0.03)'
      ctx.lineWidth = 0.5
      for (let x = 0; x < W; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = 0; y < H; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }

      const searching = searchingRef.current

      // Draw connections
      for (let i = 1; i < nodePositions.length; i++) {
        const p = nodePositions[i]
        const progress = searching ? Math.min(1, ((t * 0.04) - (i - 1) * 0.15)) : 0

        if (!searching || progress <= 0) {
          ctx.beginPath()
          ctx.moveTo(cx, cy)
          ctx.lineTo(p.x, p.y)
          ctx.strokeStyle = 'rgba(255,255,255,0.06)'
          ctx.lineWidth = 0.5
          ctx.stroke()
        } else {
          const ex = cx + (p.x - cx) * Math.min(1, progress)
          const ey = cy + (p.y - cy) * Math.min(1, progress)
          const grad = ctx.createLinearGradient(cx, cy, ex, ey)
          grad.addColorStop(0, 'rgba(0,245,212,0.8)')
          grad.addColorStop(1, 'rgba(67,97,238,0.4)')
          ctx.beginPath()
          ctx.moveTo(cx, cy)
          ctx.lineTo(ex, ey)
          ctx.strokeStyle = grad
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      }

      // Draw nodes
      for (let i = 0; i < nodePositions.length; i++) {
        const { x, y } = nodePositions[i]
        const isCentral = i === 0
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.05 + pulsePhases[i])
        const nodeRadius = isCentral ? 24 : 14 + pulse * 2

        const isActivated = searching && i > 0 &&
          ((t * 0.04) - (i - 1) * 0.15) > 1

        const color = isCentral
          ? `rgba(0,245,212,${0.8 + pulse * 0.2})`
          : isActivated
            ? `rgba(0,245,212,${0.9})`
            : `rgba(67,97,238,${0.4 + pulse * 0.2})`

        // Glow
        if (isCentral || isActivated) {
          const glow = ctx.createRadialGradient(x, y, 0, x, y, nodeRadius * 2.5)
          glow.addColorStop(0, 'rgba(0,245,212,0.15)')
          glow.addColorStop(1, 'transparent')
          ctx.beginPath()
          ctx.arc(x, y, nodeRadius * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(x, y, nodeRadius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(5,5,5,0.8)'
        ctx.fill()
        ctx.strokeStyle = color
        ctx.lineWidth = isCentral ? 2 : 1
        ctx.stroke()

        // Label
        ctx.fillStyle = isActivated ? '#00f5d4' : 'rgba(255,255,255,0.5)'
        ctx.font = `${isCentral ? '10px' : '8px'} Space Mono, monospace`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(TOPICS[i], x, y + (isCentral ? 0 : nodeRadius + 10))
      }

      t++
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', maxWidth: 480, height: 480, borderRadius: 12 }}
    />
  )
})

RAGVisualizerCanvas.displayName = 'RAGVisualizerCanvas'
export default RAGVisualizerCanvas
