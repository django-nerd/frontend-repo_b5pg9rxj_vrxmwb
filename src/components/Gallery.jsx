import TestimonialTicker from './TestimonialTicker'
import ParallaxImage from './ParallaxImage'

export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503217194810-0d5d80fa2f47?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1456273531317-827b7c3b0417?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Recent work</h2>
          <p className="mt-3 text-slate-600">A glimpse into gardens we've brought to life across Budapest.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <ParallaxImage key={i} src={src} alt="Garden project" depth={(i % 3 + 1) * 0.08} className="aspect-[4/3] ring-1 ring-emerald-500/20 shadow-sm bg-slate-100" />
          ))}
        </div>

        <div className="mt-10">
          <TestimonialTicker />
        </div>
      </div>
    </section>
  )
}
