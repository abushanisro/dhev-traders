import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Navbar } from '@/components/site/Navbar'
import { Hero } from '@/components/site/Hero'
import { About } from '@/components/site/About'

// Below-fold sections: code-split so they don't block initial paint
const Services      = dynamic(() => import('@/components/site/Services').then(m => ({ default: m.Services })))
const Partners      = dynamic(() => import('@/components/site/Partners').then(m => ({ default: m.Partners })))
const Stats         = dynamic(() => import('@/components/site/Stats').then(m => ({ default: m.Stats })))
const Process       = dynamic(() => import('@/components/site/Process').then(m => ({ default: m.Process })))
const Network       = dynamic(() => import('@/components/site/Network').then(m => ({ default: m.Network })))
const WhyUs         = dynamic(() => import('@/components/site/WhyUs').then(m => ({ default: m.WhyUs })))
const PartnershipCTA = dynamic(() => import('@/components/site/PartnershipCTA').then(m => ({ default: m.PartnershipCTA })))
const FAQ           = dynamic(() => import('@/components/site/FAQ').then(m => ({ default: m.FAQ })))
const Contact       = dynamic(() => import('@/components/site/Contact').then(m => ({ default: m.Contact })))
const Footer        = dynamic(() => import('@/components/site/Footer').then(m => ({ default: m.Footer })))
const WhatsAppButton = dynamic(() => import('@/components/site/WhatsAppButton').then(m => ({ default: m.WhatsAppButton })))

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
      <About />
      <Suspense>
        <Services />
        <Partners />
        <Stats />
        <Process />
        <Network />
        <WhyUs />
        <PartnershipCTA />
        <FAQ />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </main>
  )
}
