import { Mail, Phone } from 'lucide-react'

export function PartnershipCTA() {
  return (
    <section className="py-12 md:py-16 bg-surface" aria-label="Partnership call to action">
      <div className="container-prose">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground p-10 md:p-16 shadow-card">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />

          <div className="relative text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Partner With Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to grow your brand in Tamil Nadu?
            </h2>
            <p className="mt-5 text-primary-foreground/80 text-lg">
              Plug into a working distribution network with active retailers, owned logistics and a team
              that treats your stock like its own.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:dhevtrader@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-gold text-primary px-7 py-3.5 font-semibold hover:bg-gold-soft transition-colors shadow-gold"
              >
                <Mail size={18} aria-hidden="true" /> Email Us
              </a>
              <a
                href="tel:+918524816197"
                className="inline-flex items-center gap-2 rounded-full bg-background/10 border border-primary-foreground/20 text-primary-foreground px-7 py-3.5 font-semibold hover:bg-background/20 transition-colors backdrop-blur"
              >
                <Phone size={18} aria-hidden="true" /> Call Now
              </a>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/80">
              dhevtrader@gmail.com &nbsp;·&nbsp; +91 85248 16197
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
