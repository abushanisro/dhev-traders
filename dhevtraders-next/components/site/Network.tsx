'use client'

import dynamic from 'next/dynamic'
import { Route, Warehouse, Clock } from 'lucide-react'

const IndiaMap = dynamic(
  () => import('./IndiaMap').then((m) => m.IndiaMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[420px] rounded-2xl bg-[#e8f4ee] animate-pulse" />
    ),
  }
)

const ops = [
  { icon: Warehouse, title: 'Central Depot', desc: 'FMCG Central Depot at Valavanur, Villupuram (605108). Bulk storage with organised SKU-level inventory and batch/expiry tracking.' },
  { icon: Route,    title: 'Beat-wise Routing', desc: 'Fixed FMCG delivery beats covering every retail cluster across Villupuram, Tindivanam, Gingee and Marakkanam.' },
  { icon: Clock,    title: 'Same-week Fulfilment', desc: 'FMCG orders captured today, delivered to retail outlets within the same week, 6+ days a week.' },
]

export function Network() {
  return (
    <section id="network" className="py-20 md:py-28 bg-surface">
      <div className="container-prose">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Distribution Network</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            FMCG Distribution Network: Villupuram District, Tamil Nadu
          </h2>
          <div className="mt-4 h-1 w-16 bg-gold rounded-full mx-auto" />
          <p className="mt-5 text-muted-foreground">
            Dhev Traders operates a focused FMCG distribution network across the Villupuram district, Tamil Nadu. Our owned routes cover Villupuram, Tindivanam, Marakkanam, Gingee, Vikravandi and Mailam, with beat-wise routing, same-week fulfillment and outlet-level delivery visibility for every brand partner.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-[3fr_2fr] gap-8 items-stretch">

          {/* Tamil Nadu Map */}
          <div>
            <IndiaMap />
          </div>

          {/* Ops cards */}
          <div className="flex flex-col justify-between gap-4 h-full">
            {ops.map((o) => (
              <div
                key={o.title}
                className="group relative flex-1 rounded-2xl overflow-hidden border border-primary/20 bg-primary p-6 transition-all duration-300 hover:shadow-[0_8px_32px_-8px_rgba(31,77,58,0.45)] hover:-translate-y-0.5"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold opacity-70 group-hover:opacity-100 transition-opacity" />
                <div
                  className="h-11 w-11 rounded-xl grid place-items-center"
                  style={{ background: 'rgba(200,169,91,0.15)', border: '1px solid rgba(200,169,91,0.3)' }}
                >
                  <o.icon size={20} style={{ color: '#C8A95B' }} aria-hidden="true" />
                </div>
                <h4 className="mt-4 font-display font-bold text-white">{o.title}</h4>
                <p className="mt-1 text-sm text-white/65 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
