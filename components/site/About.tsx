import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-surface" aria-label="About Dhev Traders — FMCG Distributor Villupuram">
      <div className="container-prose grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">About Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Built for FMCG. Trusted by retailers.
          </h2>
          <div className="mt-4 h-1 w-16 bg-gold rounded-full" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Dhev Traders is an FMCG distribution company operating out of Villupuram, Tamil Nadu. We function as the operational bridge between national FMCG brands and the retail outlets that move their products every single day.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our work isn't about flashy promises — it's stock that arrives on time, invoices that match, retailers who pick up the call, and brands that grow market share month after month. With 500+ active retailers and a tightly run supply chain, we give brands a dependable runway into the local market.
          </p>
        </div>

        <div className="fmcg-img-wrap">
          <Image
            src="/images/fmcg.png"
            alt="FMCG products distributed by Dhev Traders"
            width={570}
            height={760}
            className="fmcg-img"
            sizes="(max-width: 768px) 90vw, 45vw"
          />
          {/* Gold shine sweep overlay */}
          <span className="fmcg-shine" aria-hidden="true" />
          {/* Gold radial glow overlay */}
          <span className="fmcg-glow" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
