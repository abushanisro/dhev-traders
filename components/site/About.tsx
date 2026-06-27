import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-surface" aria-label="About Dhev Traders — FMCG Distributor Villupuram">
      <div className="container-prose grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-gold">About Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Built for FMCG. Trusted by retailers.
          </h2>
          <div className="mt-4 h-1 w-16 bg-gold rounded-full" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            At Dhev Traders, we are a trusted wholesale distributor of premium edible oils and FMCG products, serving retailers, wholesalers, supermarkets and businesses across Tamil Nadu and Puducherry. We are committed to delivering quality products, competitive pricing, reliable service, and timely deliveries to help our customers grow with confidence.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Driven by quality, trust, and integrity, we work closely with leading brands and business partners to ensure a consistent and efficient supply chain. Our mission is to build long-term relationships by providing exceptional service and becoming one of South India's most trusted FMCG distribution companies.
          </p>
        </div>

        <div className="fmcg-img-wrap">
          <Image
            src="/videos/fmcg.svg"
            alt="FMCG products distributed by Dhev Traders"
            width={570}
            height={760}
            className="fmcg-img"
            sizes="(max-width: 768px) 90vw, 45vw"
            unoptimized
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
