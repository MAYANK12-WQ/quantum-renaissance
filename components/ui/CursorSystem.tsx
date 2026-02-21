'use client'

import { useEffect, useRef } from 'react'

export default function CursorSystem() {
  const mainRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const trailPos = useRef({ x: 0, y: 0 })
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    let animId: number

    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (mainRef.current) {
        mainRef.current.style.left = `${e.clientX}px`
        mainRef.current.style.top = `${e.clientY}px`
      }
    }

    const animate = () => {
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.12
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.12
      if (trailRef.current) {
        trailRef.current.style.left = `${trailPos.current.x}px`
        trailRef.current.style.top = `${trailPos.current.y}px`
      }
      animId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (mainRef.current) {
        mainRef.current.style.width = '20px'
        mainRef.current.style.height = '20px'
      }
      if (trailRef.current) {
        trailRef.current.style.width = '60px'
        trailRef.current.style.height = '60px'
        trailRef.current.style.borderColor = 'rgba(0,245,212,0.8)'
      }
    }

    const onLeave = () => {
      if (mainRef.current) {
        mainRef.current.style.width = '12px'
        mainRef.current.style.height = '12px'
      }
      if (trailRef.current) {
        trailRef.current.style.width = '36px'
        trailRef.current.style.height = '36px'
        trailRef.current.style.borderColor = 'rgba(0,245,212,0.4)'
      }
    }

    document.addEventListener('mousemove', onMove)
    animId = requestAnimationFrame(animate)

    const interactives = document.querySelectorAll('a, button, .card')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div
        id="cursor-main"
        ref={mainRef}
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
      <div
        id="cursor-trail"
        ref={trailRef}
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s',
        }}
      />
    </>
  )
}
