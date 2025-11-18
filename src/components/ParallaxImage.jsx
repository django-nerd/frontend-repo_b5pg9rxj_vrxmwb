import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxImage({ src, alt = '', depth = 0.25, className = '', rounded = 'rounded-2xl' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // Map scroll progress to vertical translation for parallax
  const y = useTransform(scrollYProgress, [0, 1], [depth * 40, depth * -40])
  const scale = useTransform(scrollYProgress, [0, 1], [1 + depth * 0.03, 1])

  return (
    <div ref={ref} className={`relative overflow-hidden ${rounded} ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
        style={{ y, scale }}
        loading="lazy"
      />
    </div>
  )
}
