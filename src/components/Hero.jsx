import { Leaf, Sprout } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400/30 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-300/30 blur-3xl rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-emerald-500/20 shadow-sm mb-5">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span className="text-sm text-slate-600">Budapest • Family-owned since 2016</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Gardens that feel like home
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              We design, build and care for green spaces across Budapest — from cozy courtyards to elegant villas and lively balconies.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition">
                Request a free visit
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-emerald-700 border border-emerald-500/30 font-semibold shadow hover:bg-emerald-50 transition">
                Explore services
              </a>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 text-slate-600">
              <Sprout className="w-5 h-5 text-emerald-600" /> Trusted by homeowners, cafes and HOAs
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-emerald-500/30 shadow-xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <div className="absolute -bottom-5 -left-5 bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-emerald-500/20 shadow">
              <p className="text-sm text-slate-700"><span className="font-semibold text-emerald-700">Free</span> on-site consultation in Budapest</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
