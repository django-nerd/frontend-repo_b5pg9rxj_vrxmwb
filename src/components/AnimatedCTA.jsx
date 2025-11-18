import { motion } from 'framer-motion'

export default function AnimatedCTA({ onPrimaryClick }) {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-3">
      <motion.a
        href="#contact"
        onClick={(e)=>{ if(onPrimaryClick){ onPrimaryClick(e) } }}
        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 relative overflow-hidden"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">Request a free visit</span>
        <motion.span
          className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0"
          initial={{ x: '-100%' }}
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.a>

      <motion.a
        href="#services"
        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-emerald-700 border border-emerald-500/30 font-semibold shadow hover:bg-emerald-50"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        Explore services
      </motion.a>
    </div>
  )
}
