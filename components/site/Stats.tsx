'use client'

import { useEffect, useRef, useState } from 'react'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const dur = 1600
            const start = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - start) / dur, 1)
              setN(Math.floor(to * (1 - Math.pow(1 - p, 3))))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [to])

  return (
    <dd ref={ref} className="font-display font-bold text-3xl md:text-5xl text-gold" aria-label={`${to}${suffix}`}>
      {n}{suffix}
    </dd>
  )
}

const stats: Array<{ value?: number; suffix?: string; text?: string; label: string }> = [
  { value: 500, suffix: '+', label: 'Active Retail Outlets in Villupuram District' },
  { value: 5,   suffix: '+', label: 'Authorised FMCG Brand Partnerships' },
  { value: 6,   suffix: '+', label: 'Days/Week FMCG Delivery in Tamil Nadu' },
  { text: '100%',             label: 'Owned Last-Mile Distribution Fleet' },
]

export function Stats() {
  return (
    <section className="py-10 md:py-12 bg-primary text-primary-foreground relative overflow-hidden" aria-label="Key statistics">
      <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" aria-hidden="true" />
      <div className="container-prose relative">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">By the numbers</span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold">Operational scale you can plan around</h2>
        </div>

        {/*
          DOM order: <dt> FIRST then <dd> — required by dl spec.
          flex-col-reverse flips visual order so <dd> (number) appears
          on top and <dt> (label) appears below.
        */}
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse items-center gap-2">
              <dt className="text-sm md:text-base text-primary-foreground/80 font-medium">
                {s.label}
              </dt>
              {s.value !== undefined ? (
                <Counter to={s.value} suffix={s.suffix} />
              ) : (
                <dd className="font-display font-bold text-3xl md:text-5xl text-gold" aria-label={s.text}>
                  {s.text}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
