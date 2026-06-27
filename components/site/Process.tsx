'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  { n: '01', title: 'FMCG Brand Onboarding & SKU Alignment', desc: 'We align on SKUs, pricing, schemes and target outlets before the first carton moves.' },
  { n: '02', title: 'Warehouse Stock Intake & Expiry Tracking', desc: 'Goods received, checked and warehoused with batch and expiry visibility.' },
  { n: '03', title: 'Retailer Order Capture: Beat-wise Field Visits', desc: 'Field team visits beats, captures retailer orders and confirms stock availability.' },
  { n: '04', title: 'Route-wise Dispatch & Same-Week Delivery', desc: 'Route-wise loading and same-week delivery to every outlet in the beat.' },
  { n: '05', title: 'Invoice Settlement & Brand Sell-out Reporting', desc: 'Clean invoicing, collections and sell-out reporting back to the brand.' },
]

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(-1)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearAllTimers = () => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const startFlow = () => {
      clearAllTimers()
      setActive(0)
      steps.forEach((_, i) => {
        timersRef.current.push(setTimeout(() => setActive(i), i * 600))
      })
      timersRef.current.push(
        setTimeout(() => {
          setActive(-1)
          timersRef.current.push(setTimeout(startFlow, 800))
        }, steps.length * 600 + 1000)
      )
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startFlow()
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(section)

    return () => {
      obs.disconnect()
      clearAllTimers()
    }
  }, [])

  return (
    <section id="process" ref={sectionRef} className="py-12 md:py-16">
      <div className="container-prose">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">How We Operate</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our FMCG Distribution Process: Villupuram to Retail Shelf
          </h2>
          <div className="mt-4 h-1 w-16 bg-gold rounded-full mx-auto" />
          <p className="mt-5 text-muted-foreground">
            A transparent, five-step FMCG supply chain that brands can audit and retailers can rely on, operating daily across Villupuram, Tindivanam, Gingee and Marakkanam.
          </p>
        </div>

        <ol className="mt-16 relative">
          {/* Connector line — desktop only */}
          <div className="absolute left-0 right-0 top-6 h-px bg-border hidden lg:block" aria-hidden="true">
            <div
              className="h-full bg-gold origin-left"
              style={{
                transform: `scaleX(${active < 0 ? 0 : active / (steps.length - 1)})`,
                transition: 'transform 0.55s cubic-bezier(0.4,0,0.2,1)',
                boxShadow: '0 0 8px 2px rgba(200,169,91,0.55)',
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => {
              const lit = active >= i
              return (
                <li key={s.n} className="relative list-none">
                  <div
                    className="h-12 w-12 rounded-xl grid place-items-center font-display font-bold relative z-10 transition-all duration-500"
                    style={{
                      background: lit ? '#C8A95B' : 'var(--color-primary)',
                      color: lit ? '#1F4D3A' : '#ffffff',
                      boxShadow: lit
                        ? '0 0 20px 4px rgba(200,169,91,0.55), 0 0 40px 8px rgba(200,169,91,0.2)'
                        : 'none',
                      transform: lit ? 'scale(1.12)' : 'scale(1)',
                    }}
                  >
                    {s.n}
                  </div>

                  {i < steps.length - 1 && (
                    <div className="lg:hidden absolute left-6 top-12 w-px h-6 bg-border overflow-hidden" aria-hidden="true">
                      <div
                        className="w-full bg-gold transition-all duration-500"
                        style={{
                          height: lit ? '100%' : '0%',
                          boxShadow: lit ? '0 0 4px rgba(200,169,91,0.6)' : 'none',
                        }}
                      />
                    </div>
                  )}

                  <h3
                    className="mt-5 font-display font-bold transition-colors duration-500"
                    style={{ color: lit ? '#C8A95B' : 'var(--color-foreground)' }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </li>
              )
            })}
          </div>
        </ol>
      </div>
    </section>
  )
}
