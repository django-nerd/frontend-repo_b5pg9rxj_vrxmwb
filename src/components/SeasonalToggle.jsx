import { Leaf } from 'lucide-react'

export default function SeasonalToggle({ mode = 'default', onToggle }) {
  const isAutumn = mode === 'autumn'
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border shadow-sm transition 
        ${isAutumn ? 'bg-amber-100/70 border-amber-400/40 text-amber-800 hover:bg-amber-200/70' : 'bg-white/70 border-emerald-500/30 text-emerald-700 hover:bg-emerald-50'}
      `}
      aria-pressed={isAutumn}
      aria-label="Toggle seasonal mode"
    >
      <Leaf className={`w-4 h-4 ${isAutumn ? 'text-amber-600' : 'text-emerald-600'}`} />
      <span className="text-sm">{isAutumn ? 'Autumn mode' : 'Spring mode'}</span>
    </button>
  )
}
