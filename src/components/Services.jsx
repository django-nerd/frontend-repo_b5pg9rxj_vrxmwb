import { useEffect, useState } from 'react'
import { Sprout, Leaf, Flower2, Droplets, Trees } from 'lucide-react'

const iconMap = {
  sprout: Sprout,
  leaf: Leaf,
  flower: Flower2,
  droplet: Droplets,
  trees: Trees,
}

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/services`)
        const data = await res.json()
        setServices(data.services || [])
      } catch (e) {
        setServices([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our services</h2>
          <p className="mt-3 text-slate-600">Thoughtfully crafted for Budapest's climate and architecture.</p>
        </div>

        {loading ? (
          <p className="text-center text-slate-600 mt-10">Loading services…</p>
        ) : (
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = iconMap[s.icon] || Sprout
              return (
                <div key={s.id} className="group relative rounded-2xl border border-emerald-500/20 bg-white p-6 shadow-sm hover:shadow-md transition">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-slate-600">{s.description}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
