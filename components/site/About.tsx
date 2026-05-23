import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-surface" aria-label="About Dhev Traders — FMCG Distributor Villupuram">
      <div className="container-prose grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-gold">About Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            About Dhev Traders: FMCG Distribution Company, Villupuram
          </h2>
          <div className="mt-4 h-1 w-16 bg-gold rounded-full" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Dhev Traders is a trusted FMCG distribution company based in Valavanur, Villupuram, Tamil Nadu (605108). We are the operational bridge between national FMCG brands and local retail outlets, delivering stock on time, every time, across Villupuram, Tindivanam, Gingee, Marakkanam, Vikravandi and Mailam.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            As an authorised distributor for Aishwarya Oil, Mr. Gold Oils, Nalla Refined Rice Bran Oil, Whooper Washing Liquid and Unibic Cookies, we manage the full distribution cycle, from brand depot intake to retail shelf placement. With 500+ active shopkeepers and 100% owned last-mile delivery, we give FMCG brands a dependable, auditable distribution network in the Villupuram district.
          </p>
        </div>

        <div className="fmcg-img-wrap">
          <Image
            src="/images/fmcg.svg"
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
