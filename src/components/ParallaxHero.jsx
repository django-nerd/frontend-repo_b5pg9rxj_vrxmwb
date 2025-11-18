import FloatingLeaves from './FloatingLeaves'

export default function ParallaxHero({ children }) {
  return (
    <div className="relative">
      {/* Parallax layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-emerald-50/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.08),transparent_50%)]" />
      </div>

      {/* Floating leaves animation */}
      <FloatingLeaves />

      {/* Foreground content */}
      <div className="relative">{children}</div>
    </div>
  )
}
