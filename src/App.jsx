import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50/40 text-slate-800">
      <Navbar />
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
