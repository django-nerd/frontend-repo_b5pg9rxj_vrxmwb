import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

const colors = ['#D97706', '#EA580C', '#B45309', '#92400E', '#16A34A']

function Leaf({ x, size, delay, duration, rotateDir }) {
  const path = useMemo(() => [
    { x: x + (Math.random() * 80 - 40), y: -20 },
    { x: x + (Math.random() * 120 - 60), y: 200 },
    { x: x + (Math.random() * 160 - 80), y: 400 },
    { x: x + (Math.random() * 200 - 100), y: 650 },
  ], [x])

  const color = colors[Math.floor(Math.random() * colors.length)]

  return (
    <motion.span
      initial={{ opacity: 0, y: -30, x }}
      animate={{
        opacity: [0, 1, 1, 0.9],
        x: path.map(p => p.x),
        y: path.map(p => p.y),
        rotate: rotateDir > 0 ? [0, 45, 0, -45, 0] : [0, -45, 0, 45, 0],
      }}
      transition={{ duration, delay, ease: 'easeInOut', repeat: Infinity }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: size,
        height: size,
        borderRadius: 6,
        background: color,
        boxShadow: '0 8px 18px rgba(0,0,0,0.08)',
        transformOrigin: 'center',
      }}
      aria-hidden="true"
    />
  )
}

export default function AutumnLeaves({ enabled }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--leaf-filter', enabled ? 'saturate(110%)' : 'none')
    return () => {
      document.documentElement.style.removeProperty('--leaf-filter')
    }
  }, [enabled])

  if (!enabled) return null

  const leaves = new Array(18).fill(0).map((_, i) => ({
    id: i,
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
    size: 8 + Math.random() * 14,
    delay: Math.random() * 6,
    duration: 10 + Math.random() * 10,
    rotateDir: Math.random() > 0.5 ? 1 : -1,
  }))

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" style={{ filter: 'var(--leaf-filter)' }}>
      {leaves.map((l) => (
        <Leaf key={l.id} {...l} />
      ))}
    </div>
  )
}
