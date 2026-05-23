const services = [
  {
    num: '01',
    title: 'Primary Distribution',
    desc: 'Brand stock moved from depot to retail shelves across Villupuram district with controlled inventory management, SKU-level tracking and disciplined route planning. We ensure zero stockouts at every retail beat.',
  },
  {
    num: '02',
    title: 'Retail Management',
    desc: 'Active relationship management across 500+ kirana stores and retail shopkeepers in Villupuram, Tindivanam and Gingee, covering order capture, credit management, returns and repeat ordering every week.',
  },
  {
    num: '03',
    title: 'Market Expansion',
    desc: 'On-ground brand activation, new retail outlet onboarding and category growth in underserved local markets across Gingee, Vikravandi, Mailam and rural Villupuram district. We scale your brand\'s market share systematically.',
  },
  {
    num: '04',
    title: 'Last-mile Logistics',
    desc: '100% owned delivery operations ensuring FMCG stock reaches retail outlets fast, without breakage or stockouts, 6+ days a week across all active routes in Villupuram district.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-prose">

        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">What We Do</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Distribution services built around the retailer
          </h2>
          <div className="mt-4 h-1 w-16 bg-gold rounded-full mx-auto" />
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.num}
              className="relative rounded-2xl border border-border bg-surface p-6 overflow-hidden hover:border-gold/40 transition-colors duration-300"
            >
              {/* Gold number — top right watermark */}
              <span
                className="absolute top-3 right-4 font-display font-bold text-6xl leading-none select-none pointer-events-none"
                style={{ color: '#C8A95B' }}
                aria-hidden="true"
              >
                {s.num}
              </span>
              <h3 className="mt-12 font-display font-bold text-foreground text-lg leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
