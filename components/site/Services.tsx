'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const services = [
  {
    num: '01',
    img: '/images/scroll/primary1.svg',
    title: 'Primary Distribution',
    desc: 'Brand stock moved from depot to retail shelves across Villupuram district with controlled inventory management, SKU-level tracking and disciplined route planning. We ensure zero stockouts at every retail beat.',
  },
  {
    num: '02',
    img: '/images/scroll/RetailChannel.svg',
    title: 'Retail Management',
    desc: 'Active relationship management across 500+ kirana stores and retail shopkeepers in Villupuram, Tindivanam and Gingee, covering order capture, credit management, returns and repeat ordering every week.',
  },
  {
    num: '03',
    img: '/images/scroll/MarketExpansion.svg',
    title: 'Market Expansion',
    desc: 'On-ground brand activation, new retail outlet onboarding and category growth in underserved local markets across Gingee, Vikravandi, Mailam and rural Villupuram district. We scale your brand\'s market share systematically.',
  },
  {
    num: '04',
    img: '/images/scroll/lastmiledelivery.svg',
    title: 'Last-mile Logistics',
    desc: '100% owned delivery operations ensuring FMCG stock reaches retail outlets fast, without breakage or stockouts, 6+ days a week across all active routes in Villupuram district.',
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const scrolled = -rect.top
      const scrollable = rect.height - window.innerHeight
      if (scrollable <= 0) return
      const progress = Math.max(0, Math.min(0.9999, scrolled / scrollable))
      setActive(Math.floor(progress * services.length))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ height: `${services.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Slides */}
        {services.map((s, i) => (
          <div
            key={s.num}
            className="absolute inset-0"
            style={{
              transform: `translateY(${(i - active) * 100}%)`,
              transition: 'transform 0.75s cubic-bezier(0.77,0,0.18,1)',
              zIndex: services.length - Math.abs(i - active),
            }}
          >
            {/* Full-bleed image from top — no black gap */}
            <Image
              src={s.img}
              alt={s.title}
              fill
              className="object-cover object-top"
              priority={i === 0}
              sizes="100vw"
              quality={100}
            />

            {/* Gradient at bottom for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Section label — top left */}
            <div className="absolute top-8 left-6 md:top-10 md:left-12">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold/80">
                What We Do
              </span>
            </div>

            {/* Progress indicator — right side */}
            <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-10 flex flex-col items-center gap-2.5">
              {services.map((_, di) => (
                <div
                  key={di}
                  className="w-[3px] rounded-full transition-all duration-500"
                  style={{
                    height: di === active ? '2.5rem' : '0.5rem',
                    background: di === active ? '#C8A95B' : 'rgba(255,255,255,0.35)',
                  }}
                />
              ))}
            </div>

            {/* Text — higher on mobile, bottom on desktop */}
            <div className={`absolute md:bottom-0 left-0 right-0 px-6 md:px-16 md:pb-16 ${(s.num === '01' || s.num === '04') ? 'bottom-0 pb-10' : 'bottom-[68%]'}`}>
              <span
                className="font-display font-bold leading-none block mb-3 text-[5rem] md:text-[8rem]"
                style={{
                  color: '#C8A95B',
                  textShadow: '0 0 60px rgba(200,169,91,0.9), 0 2px 8px rgba(0,0,0,0.8)',
                  WebkitTextStroke: '1px rgba(200,169,91,0.6)',
                }}
                aria-hidden="true"
              >
                {s.num}
              </span>
              <h3 className="font-display font-bold text-white text-2xl sm:text-3xl md:text-5xl leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-white/70 text-sm md:text-base max-w-xl leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
