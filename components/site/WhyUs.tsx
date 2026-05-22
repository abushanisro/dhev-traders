import { Users, HeartHandshake, PackageCheck, MapPinned, Settings, Zap } from 'lucide-react'

const items = [
  { icon: Users,          title: '500+ Active Retail Outlets in Villupuram District', desc: 'Wide, engaged retailer base covering kirana stores and modern trade outlets.' },
  { icon: HeartHandshake, title: 'Strong Retailer Trust Built Over Years',            desc: 'Consistent, reliable supply builds long-term loyalty across every beat.' },
  { icon: PackageCheck,   title: 'Streamlined FMCG Logistics, Zero Gaps',            desc: 'Organised route planning eliminates delays, breakage and stockouts.' },
  { icon: MapPinned,      title: 'Native Knowledge of Villupuram FMCG Market',       desc: 'Deep understanding of local buying patterns, seasonal demand and retail needs.' },
  { icon: Settings,       title: 'Predictable, Professional FMCG Execution',         desc: 'Auditable operations with clean invoicing and transparent reporting.' },
  { icon: Zap,            title: 'Rapid Brand Activation Across Tamil Nadu',         desc: 'New brand SKUs reach 500+ outlets within days of onboarding.' },
]

export function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-28 bg-primary">
      <div className="container-prose">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Why Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Why FMCG Brands Choose Dhev Traders as Their Villupuram Distributor
          </h2>
          <div className="mt-4 h-1 w-16 bg-gold rounded-full mx-auto" />
        </div>

        <ul className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <li
              key={it.title}
              className="group relative flex gap-4 rounded-2xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold/40 transition-all duration-300"
            >
              {/* Gold top accent */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gold opacity-0 group-hover:opacity-40 transition-opacity" />

              <div className="shrink-0 h-12 w-12 rounded-xl grid place-items-center"
                style={{ background: 'rgba(200,169,91,0.15)', border: '1px solid rgba(200,169,91,0.3)' }}>
                <it.icon size={22} style={{ color: '#C8A95B' }} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white">{it.title}</h3>
                <p className="mt-1 text-sm text-white/60 leading-relaxed">{it.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
