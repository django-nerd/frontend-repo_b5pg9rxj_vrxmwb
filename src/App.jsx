import { useState, useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import AutumnLeaves from './components/AutumnLeaves'

function App() {
  const [seasonMode, setSeasonMode] = useState('default') // 'default' | 'autumn'
  const isAutumn = seasonMode === 'autumn'

  const background = useMemo(() => (
    isAutumn
      ? 'from-amber-50 via-white to-emerald-50/30'
      : 'from-emerald-50 via-white to-emerald-50/40'
  ), [isAutumn])

  return (
    <div className={`min-h-screen bg-gradient-to-b ${background} text-slate-800 transition-colors`}> 
      <AutumnLeaves enabled={isAutumn} />
      <Navbar
        seasonalMode={seasonMode}
        onToggleSeason={() => setSeasonMode((m) => (m === 'autumn' ? 'default' : 'autumn'))}
      />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <footer className="py-10 text-center text-sm text-slate-600">© {new Date().getFullYear()} Budapest Garden • All rights reserved</footer>
    </div>
  )
}

export default App
