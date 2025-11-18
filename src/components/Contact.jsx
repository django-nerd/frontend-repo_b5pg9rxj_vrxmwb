import { useState } from 'react'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '', city: 'Budapest' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        setStatus({ ok: true, msg: 'Thanks! We will get back to you within 24 hours.' })
        setForm({ name: '', email: '', phone: '', service: '', message: '', city: 'Budapest' })
      } else {
        throw new Error(data.detail || 'Submission failed')
      }
    } catch (e) {
      setStatus({ ok: false, msg: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-emerald-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 rounded-2xl bg-white p-6 sm:p-8 border border-emerald-500/20 shadow">
            <h3 className="text-2xl font-bold text-slate-900">Get a free on-site visit</h3>
            <p className="text-slate-600 mt-2">Tell us a bit about your space and goals.</p>
            <form onSubmit={submit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Full name" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input required type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder="Email" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} placeholder="Phone" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input value={form.service} onChange={(e)=>setForm({...form,service:e.target.value})} placeholder="Service of interest (e.g. design, maintenance)" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <textarea required value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} placeholder="Your message" rows={4} className="sm:col-span-2 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <button disabled={loading} className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition disabled:opacity-60">
                <Send className="w-4 h-4" /> {loading ? 'Sending…' : 'Send inquiry'}
              </button>
              {status && (
                <div className={`sm:col-span-2 text-sm p-3 rounded-lg ${status.ok ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-700'}`}>
                  {status.msg}
                </div>
              )}
            </form>
          </div>
          <div className="rounded-2xl bg-white p-6 border border-emerald-500/20 shadow">
            <h4 className="font-semibold text-slate-900">Contact</h4>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-emerald-600" /> +36 30 123 4567</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-emerald-600" /> hello@budapestgarden.hu</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-600" /> Budapest, Hungary</li>
            </ul>
            <div className="mt-6 aspect-video rounded-xl overflow-hidden ring-1 ring-emerald-500/20">
              <iframe title="Budapest" src="https://www.openstreetmap.org/export/embed.html?bbox=19.018%2C47.44%2C19.34%2C47.60&layer=mapnik" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
