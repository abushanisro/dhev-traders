'use client'

export function Hero() {
  return (
    <section
      className="relative w-full h-svh min-h-[100svh] overflow-hidden bg-black"
      aria-label="Hero section"
    >
      {/* Desktop — single native-loop video; browser handles seamless loop at codec level */}
      <div className="hidden md:block absolute inset-0">
        <video
          src="/videos/home.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-warehouse.jpg"
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
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
