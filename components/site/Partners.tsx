import Image from 'next/image'

type Brand = { id: string; name: string; logo: string; subtitle: string }

const BRANDS: Brand[] = [
  { id: 'aishwarya', name: 'Aishwarya Oil', logo: '/images/partners/aishwarya.png', subtitle: 'Edible Oil Brand Partner' },
  { id: 'mr-gold', name: 'Mr. Gold Oils', logo: '/images/partners/mr-gold.png', subtitle: 'Refined Oil Distributor Tamil Nadu' },
  { id: 'nella', name: 'Nalla Refined Rice Bran Oil', logo: '/images/partners/nella.png', subtitle: 'Authorised Distributor Villupuram' },
  { id: 'wopper', name: 'Whooper Washing Liquid', logo: '/images/partners/wopper.png', subtitle: 'Home Care FMCG Partner' },
  { id: 'unibic', name: 'Unibic Cookies', logo: '/images/partners/unibic.png', subtitle: 'Snacks & Biscuits Distributor Tamil Nadu' },
]

export function Partners() {
  const marqueeBrands = [...BRANDS, ...BRANDS]

  return (
    <section id="partners" className="py-12 md:py-16 bg-surface">
      {/* Header stays constrained */}
      <div className="container-prose">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Trusted By</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Authorised FMCG Brand Distributor in Villupuram, Tamil Nadu
          </h2>
          <div className="mt-4 h-1 w-16 bg-gold rounded-full mx-auto" />
          <p className="mt-5 text-muted-foreground">
            Dhev Traders is an authorised distributor for leading FMCG brands across edible oil, home care and food categories in Villupuram district, Tamil Nadu.
          </p>
        </div>
      </div>

      {/* Marquee spans full viewport width */}
      <div className="mt-14 marquee-mask overflow-hidden w-full" role="list" aria-label="Brand partners">
        <div className="marquee-track flex w-max gap-5 px-5">
          {marqueeBrands.map((b, i) => (
            <div
              key={`${b.id}-${i}`}
              role="listitem"
              className="group relative shrink-0 w-56 md:w-64 rounded-2xl bg-background border border-border p-6 flex flex-col items-center justify-center min-h-[200px] hover:border-gold/50 hover:shadow-card transition-all"
            >
              <div className="h-24 w-full grid place-items-center">
                <Image
                  src={b.logo}
                  alt={`${b.name} — brand partner of Dhev Traders`}
                  width={192}
                  height={96}
                  className="max-h-24 max-w-[80%] object-contain"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-center text-sm font-semibold text-foreground">{b.name}</div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                {b.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
