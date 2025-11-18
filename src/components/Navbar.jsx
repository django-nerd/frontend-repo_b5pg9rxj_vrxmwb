import { useState } from 'react'
import { Menu, Leaf, Phone, MapPin } from 'lucide-react'
import SeasonalToggle from './SeasonalToggle'

export default function Navbar({ seasonalMode = 'default', onToggleSeason }) {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-white/70 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between px-5 py-4">
            <button onClick={() => scrollTo('home')} className="inline-flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500 text-white shadow-md">
                <Leaf className="w-5 h-5" />
              </span>
              <span className="font-semibold text-slate-800">Budapest Garden</span>
            </button>

            <nav className="hidden md:flex items-center gap-8 text-slate-700">
              <button className="hover:text-emerald-600" onClick={() => scrollTo('services')}>Services</button>
              <button className="hover:text-emerald-600" onClick={() => scrollTo('gallery')}>Gallery</button>
              <button className="hover:text-emerald-600" onClick={() => scrollTo('about')}>About</button>
              <button className="hover:text-emerald-600" onClick={() => scrollTo('contact')}>Contact</button>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <SeasonalToggle mode={seasonalMode} onToggle={onToggleSeason} />
              <span className="hidden lg:inline-flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-emerald-600" /> Budapest
              </span>
              <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow hover:bg-emerald-700 transition">
                <Phone className="w-4 h-4" /> Get a quote
              </a>
            </div>

            <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-emerald-500/30 text-emerald-700" onClick={()=>setOpen(!open)}>
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-emerald-500/20 px-5 py-3 bg-white/60">
              <div className="grid gap-2 text-slate-700">
                <div className="py-2"><SeasonalToggle mode={seasonalMode} onToggle={onToggleSeason} /></div>
                <button className="py-2 text-left" onClick={() => scrollTo('services')}>Services</button>
                <button className="py-2 text-left" onClick={() => scrollTo('gallery')}>Gallery</button>
                <button className="py-2 text-left" onClick={() => scrollTo('about')}>About</button>
                <button className="py-2 text-left" onClick={() => scrollTo('contact')}>Contact</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
