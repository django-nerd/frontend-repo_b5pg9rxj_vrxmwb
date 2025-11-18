import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Anna — District II',
    text: 'Beautiful design and flawless maintenance. Our courtyard finally feels alive!',
  },
  {
    name: 'Miklós — Újlipótváros',
    text: 'Quick, professional, and friendly. The balcony garden is stunning.',
  },
  {
    name: 'Bianka — Buda',
    text: 'They handled everything from irrigation to planting. Highly recommend!',
  },
  {
    name: 'Károly — Zugló',
    text: 'Reliable team with great taste. Our lawn has never looked better.',
  },
]

export default function TestimonialTicker() {
  const items = [...testimonials, ...testimonials]
  return (
    <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-white">
      <motion.div
        className="flex gap-6 py-4 px-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((t, i) => (
          <div key={i} className="min-w-[22rem] px-4 py-3 rounded-xl border border-emerald-500/20 bg-emerald-50/40">
            <div className="flex items-center gap-1 text-amber-500">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <p className="text-sm text-slate-700 mt-2 line-clamp-2">“{t.text}”</p>
            <p className="text-xs text-slate-500 mt-1">{t.name}</p>
          </div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
    </div>
  )
}
