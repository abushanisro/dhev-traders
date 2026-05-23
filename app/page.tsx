import type { Metadata } from 'next'
import { Navbar } from '@/components/site/Navbar'
import { Hero } from '@/components/site/Hero'
import { Stats } from '@/components/site/Stats'
import { About } from '@/components/site/About'
import { Services } from '@/components/site/Services'
import { Process } from '@/components/site/Process'
import { Network } from '@/components/site/Network'
import { WhyUs } from '@/components/site/WhyUs'
import { Partners } from '@/components/site/Partners'
import { PartnershipCTA } from '@/components/site/PartnershipCTA'
import { FAQ } from '@/components/site/FAQ'
import { Contact } from '@/components/site/Contact'
import { Footer } from '@/components/site/Footer'
import { WhatsAppButton } from '@/components/site/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Dhev Traders | Trusted FMCG Distributor in Villupuram, Tamil Nadu',
  description:
    'Dhev Traders is a reliable FMCG distribution company in Villupuram, Tamil Nadu. We connect 5+ national brands to 500+ active retail outlets across Villupuram, Tindivanam, Gingee & more. Authorised distributor of Aishwarya Oil, Mr. Gold, Nalla Refined Oil & Unibic. Same-week delivery.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dhev Traders | Trusted FMCG & Edible Oil Distributor Villupuram Tamil Nadu',
    description:
      'Trusted FMCG distribution company in Villupuram. Aishwarya Oil, Mr. Gold, Nalla & Unibic distributor. 500+ active retailers. Same-week delivery across Villupuram district, Tamil Nadu.',
    url: '/',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Partners />
      <About />
      <Process />
      <Network />
      <WhyUs />
      <PartnershipCTA />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
