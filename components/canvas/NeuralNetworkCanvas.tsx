'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  phase: number
  r: number
}

export default function NeuralNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const nodesRef = useRef<Node[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const initNodes = () => {
      nodesRef.current = Array.from({ length: 80 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        phase: Math.random() * Math.PI * 2,
        r: 1.5 + Math.random() * 2,
      }))
    }
    initNodes()

    let animId: number
    let t = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.01
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (const node of nodesRef.current) {
        const dx = node.x - mx
        const dy = node.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 200) {
          const force = (200 - dist) / 200
          node.vx += (dx / dist) * force * 0.1
          node.vy += (dy / dist) * force * 0.1
        }

        node.vx *= 0.99
        node.vy *= 0.99
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0) node.x = canvas.width
        if (node.x > canvas.width) node.x = 0
        if (node.y < 0) node.y = canvas.height
        if (node.y > canvas.height) node.y = 0

        const pulse = 0.5 + 0.5 * Math.sin(t * 2 + node.phase)
        const isNear = dist < 200
        const color = isNear ? `rgba(0,245,212,${0.6 + pulse * 0.4})` : `rgba(67,97,238,${0.3 + pulse * 0.2})`

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r * (isNear ? 1.5 : 1), 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      }

      const nodes = nodesRef.current
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 150) {
            const opacity = (1 - d / 150) * 0.15
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0,245,212,${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', () => { resize(); initNodes() })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
