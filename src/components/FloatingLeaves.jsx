import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'

const leaves = [
  { id: 1, top: '8%', left: '6%', size: 28, hue: 'text-emerald-500', delay: 0 },
  { id: 2, top: '18%', left: '80%', size: 22, hue: 'text-lime-500', delay: 3 },
  { id: 3, top: '45%', left: '12%', size: 20, hue: 'text-emerald-600', delay: 1.2 },
  { id: 4, top: '70%', left: '85%', size: 24, hue: 'text-teal-500', delay: 2.1 },
  { id: 5, top: '30%', left: '50%', size: 18, hue: 'text-emerald-400', delay: 4 },
  { id: 6, top: '80%', left: '20%', size: 26, hue: 'text-lime-600', delay: 2.8 },
]

export default function FloatingLeaves() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{ top: leaf.top, left: leaf.left }}
          initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
          animate={{
            x: [0, 20, -15, 0],
            y: [0, -50, -20, 0],
            rotate: [0, 15, -10, 0],
            opacity: [0, 1, 1, 0.8],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: leaf.delay }}
        >
          <Leaf className={`${leaf.hue} drop-shadow-sm`} style={{ width: leaf.size, height: leaf.size, opacity: 0.8 }} />
        </motion.div>
      ))}

      {/* soft wind sweep */}
      <motion.div
        className="absolute -right-40 top-1/3 h-40 w-[50rem] rounded-full bg-gradient-to-l from-emerald-300/10 via-emerald-200/10 to-transparent blur-3xl"
        initial={{ x: 150 }}
        animate={{ x: [-150, 150] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
    </div>
  )
}
