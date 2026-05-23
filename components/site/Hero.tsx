'use client'

import { useEffect, useRef } from 'react'

const CROSSFADE_BEFORE = 0.8  // seconds before end to begin fade
const CROSSFADE_MS     = 800  // fade duration in ms

function LoopingVideo({ src, className }: { src: string; className: string }) {
  const aRef   = useRef<HTMLVideoElement>(null)
  const bRef   = useRef<HTMLVideoElement>(null)
  const active = useRef<'a' | 'b'>('a')  // which video is currently showing
  const fading = useRef(false)

  useEffect(() => {
    const a = aRef.current
    const b = bRef.current
    if (!a || !b) return

    const crossfade = (from: HTMLVideoElement, to: HTMLVideoElement, next: 'a' | 'b') => {
      fading.current = true
      active.current = next          // mark the incoming video as active immediately
      to.currentTime = 0
      to.play().catch(() => {})
      const t0 = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - t0) / CROSSFADE_MS, 1)
        from.style.opacity = `${1 - p}`
        to.style.opacity   = `${p}`
        if (p < 1) {
          requestAnimationFrame(tick)
        } else {
          from.pause()
          fading.current = false
        }
      }
      requestAnimationFrame(tick)
    }

    // Single handler — only the active video can trigger a switch
    const onTimeUpdate = () => {
      if (fading.current) return
      const cur  = active.current === 'a' ? a : b
      const next = active.current === 'a' ? b : a
      const nextLabel = active.current === 'a' ? 'b' : 'a'
      if (!cur.duration) return
      if (cur.currentTime >= cur.duration - CROSSFADE_BEFORE) {
        crossfade(cur, next, nextLabel)
      }
    }

    a.addEventListener('timeupdate', onTimeUpdate)
    b.addEventListener('timeupdate', onTimeUpdate)
    return () => {
      a.removeEventListener('timeupdate', onTimeUpdate)
      b.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [])

  return (
    <>
      <video ref={aRef} src={src} autoPlay muted playsInline preload="auto"
        className={className} style={{ opacity: 1 }} />
      <video ref={bRef} src={src}        muted playsInline preload="auto"
        className={className} style={{ opacity: 0 }} />
    </>
  )
}

export function Hero() {
  return (
    <section
      className="relative w-full h-svh min-h-[100svh] overflow-hidden bg-black"
      aria-label="Hero section"
    >
      {/* Desktop */}
      <div className="hidden md:block absolute inset-0">
        <img
          src="/videos/home.gif"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Mobile */}
      <div className="block md:hidden absolute inset-0">
        <img
          src="/videos/mobile.gif"
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Headline overlay */}
      <div className="absolute inset-0 flex items-end justify-center pb-36 md:pb-12 px-4">
        <div className="text-center fade-up">
          <h1 className="font-display font-bold text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-snug">
            <span
              className="block"
              style={{ textShadow: '0 0 40px rgba(200,169,91,0.85), 0 0 80px rgba(200,169,91,0.4), 0 2px 12px rgba(0,0,0,0.95)' }}
            >
              Trusted FMCG Distributor in
            </span>
            <span className="block">
              <span style={{ textShadow: '0 0 40px rgba(200,169,91,0.85), 0 2px 12px rgba(0,0,0,0.95)' }}>
                Villupuram,{' '}
              </span>
              <span
                className="px-2 py-0.5 rounded-lg"
                style={{
                  background: 'rgba(200,169,91,0.45)',
                  color: '#ffffff',
                  textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                }}
              >
                Tamil Nadu
              </span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}
