'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

const quickLinks = [
  { h: '#about',    l: 'About' },
  { h: '#services', l: 'Services' },
  { h: '#partners', l: 'Brand Partners' },
  { h: '#why',      l: 'Why Us' },
  { h: '#contact',  l: 'Contact' },
]

const greenShadow = { textShadow: '0 0 24px rgba(45,122,88,0.9), 0 2px 8px rgba(0,0,0,0.9)' }
const goldShadow  = { textShadow: '0 0 16px rgba(200,169,91,0.8), 0 2px 6px rgba(0,0,0,0.9)' }

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white" style={{ background: '#05100a' }}>

      {/* ── Green glow at the very top (atmospheric line) ── */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent 0%, #2d7a58 30%, #C8A95B 50%, #2d7a58 70%, transparent 100%)' }} />
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(31,77,58,0.45) 0%, transparent 100%)' }} />

      {/* ── Text content — dark area at top ── */}
      <div className="relative z-10 container-prose pt-16 pb-12">
        <div className="grid md:grid-cols-4 gap-10 pb-10">

          {/* Brand */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="justify-center md:justify-start">
              <div className="font-display font-bold text-2xl" style={{ color: '#C8A95B', ...goldShadow }}>
                DHEV TRADERS
              </div>
              <div className="text-[10px] tracking-widest uppercase text-white/60 mt-0.5">
                FMCG Distribution
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-sm text-white/70">
              Dhev Traders is a trusted FMCG distribution company in Villupuram, Tamil Nadu (605108). We supply 500+ retail outlets across Villupuram with edible oils, home care and food products, through owned last-mile delivery, 6 days a week. GST: 33ATPPG1745E1ZW
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300"
              style={{ border: '1px solid rgba(200,169,91,0.6)', color: '#C8A95B', boxShadow: '0 0 20px rgba(31,77,58,0.4)' }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = '#C8A95B'; el.style.color = '#1F4D3A' }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = '#C8A95B' }}
            >
              Get In Touch
            </a>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h4 className="font-display font-bold text-base mb-4 text-white" style={greenShadow}>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/65">
              {quickLinks.map((l) => (
                <li key={l.h}>
                  <a href={l.h}
                    className="transition-colors hover:text-gold"
                    style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
                  >{l.l}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h4 className="font-display font-bold text-base mb-4 text-white" style={greenShadow}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0" style={{ color: '#C8A95B' }} />
                <a href="mailto:dhevtrader@gmail.com" className="hover:text-gold transition-colors">
                  dhevtrader@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0" style={{ color: '#C8A95B' }} />
                <a href="tel:+918524816197" className="hover:text-gold transition-colors">
                  +91 85248 16197
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: '#C8A95B' }} />
                <a href="https://share.google/perhqlQc51wfbZzHb" target="_blank" rel="noopener noreferrer"
                  className="hover:text-gold transition-colors leading-snug">
                  S-4, West Pondy Road,<br />Valavanur, Villupuram – 605108
                </a>
              </li>
              <li className="flex gap-3 mt-1">
                <span className="text-[10px] uppercase tracking-widest mt-0.5 shrink-0" style={{ color: '#C8A95B' }}>GST</span>
                <span className="text-xs tracking-wide" style={{ color: 'rgba(255,255,255,0.55)' }}>33ATPPG1745E1ZW</span>
              </li>
            </ul>
          </address>
        </div>

      </div>

      {/* ── Video pinned to BOTTOM ── */}
      <div className="relative w-full overflow-hidden" style={{ height: 300, marginTop: -2 }}>
        {/* Full-cover fade — hides seam and blends into text area */}
        <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
          style={{ height: '65%', background: 'linear-gradient(to bottom, #05100a 0%, #05100a 15%, transparent 100%)' }} />

        <img
          src="/videos/footer.gif"
          className="hidden md:block w-full h-full object-cover object-center"
          alt=""
          fetchPriority="low"
          decoding="async"
        />
        <img
          src="/videos/footermobile.gif"
          className="block md:hidden w-full h-full object-cover object-center"
          alt=""
          fetchPriority="low"
          decoding="async"
        />

        {/* Divider line + copyright overlaid on video */}
        <div className="absolute bottom-0 left-0 right-0 z-20 container-prose pb-5">
          <div className="border-t border-white/20 pt-3 flex flex-col md:flex-row items-center md:justify-between gap-1 md:gap-2 text-xs font-semibold text-white/80 text-center md:text-left"
            style={{ textShadow: '0 0 12px rgba(31,77,58,0.9), 0 2px 6px rgba(0,0,0,1)' }}>
            <div>© {new Date().getFullYear()} Dhev Traders. All rights reserved.</div>
            <div>Trusted FMCG Distributor in Villupuram</div>
          </div>
        </div>
      </div>

    </footer>
  )
}
