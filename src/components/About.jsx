export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="prose prose-emerald max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Rooted in Budapest</h2>
            <p className="text-slate-600 mt-4">
              We're a local, family-run team with a passion for creating spaces where people connect with nature. We understand the rhythm of Budapest's seasons and the character of its courtyards, terraces and streets.
            </p>
            <p className="text-slate-600 mt-4">
              From concept to care, we handle design, installation and maintenance with craftsmanship and care. Our approach is simple: listen well, design thoughtfully, and deliver reliably.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden ring-1 ring-emerald-500/20 shadow-xl">
            <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1400&auto=format&fit=crop" alt="Team at work in a garden" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
