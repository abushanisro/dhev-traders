import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Toaster } from 'sonner'
import './globals.css'

const GA_ID = 'G-W85SG7HME5'

const siteUrl   = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dhevtraders.in'
const bizName   = 'Dhev Traders'
const phone     = '+918939591197'
const whatsapp  = 'https://wa.me/918939591197'
const pincode   = '605108'
const gst       = '33ATPPG1745E1ZW'
const lat       = 11.9401
const lng       = 79.4861

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Dhev Traders | Trusted FMCG & Edible Oil Distributor in Villupuram, Tamil Nadu',
    template: '%s | Dhev Traders — FMCG Distributor Villupuram Tamil Nadu',
  },

  description:
    'Dhev Traders is a trusted FMCG distribution company in Villupuram, Tamil Nadu (605108). We connect 5+ national FMCG brands to 500+ active retail outlets across Villupuram, Tindivanam, Gingee, Marakkanam & more. Authorised distributor of Aishwarya Oil, Mr. Gold Oils, Nalla Refined Rice Bran Oil, Unibic Cookies & Whooper. Same-week delivery. Call +91 89395 91197.',

  keywords: [
    // ── Primary homepage keywords ──
    'FMCG distributor in Villupuram',
    'FMCG distribution company Villupuram Tamil Nadu',
    'trusted FMCG distributor Villupuram',
    'Dhev Traders Villupuram FMCG',
    'FMCG supply chain Villupuram Tamil Nadu',
    'retail distribution company Villupuram',
    'FMCG distributor Villupuram 605108',

    // ── Geo-targeted local ──
    'wholesale FMCG supplier Villupuram',
    'FMCG stockist Villupuram Tamil Nadu',
    'kirana store supplier Villupuram',
    'retail outlet supplier Villupuram',
    'daily essentials distributor Villupuram',
    'grocery distributor Villupuram Tamil Nadu',
    'FMCG wholesale market Villupuram',
    'FMCG shop Villupuram',
    'oil agency near Villupuram',
    'distributor Villupuram 605108',
    'wholesale market Villupuram Tamil Nadu',

    // ── Nearby town coverage ──
    'FMCG distributor Tindivanam',
    'FMCG supplier Marakkanam',
    'FMCG stockist Gingee',
    'wholesale distributor Vikravandi',
    'FMCG delivery partner Mailam',
    'FMCG distributor Gingee Tamil Nadu',
    'retail supply chain Tindivanam Tamil Nadu',
    'FMCG distributor Kallakurichi',
    'Gingee Cuddalore Kallakurichi FMCG supplier',
    'grocery wholesale Tindivanam Villupuram',
    'Villupuram FMCG super stockist',

    // ── District-level ──
    'FMCG distributor Villupuram district',
    'FMCG company Villupuram district Tamil Nadu',
    'B2B FMCG distributor South Tamil Nadu',
    'FMCG distribution network Tamil Nadu',
    'largest FMCG distributor Tamil Nadu',

    // ── Oil brand-specific ──
    'Aishwarya Oil distributor Villupuram',
    'Mr Gold edible oil distributor Tamil Nadu',
    'Nalla Rice Bran Oil distributor Villupuram',
    'refined rice bran oil wholesale Villupuram',
    'edible oil distributor Villupuram Tamil Nadu',
    'cooking oil bulk supplier Villupuram',
    'sunflower oil wholesale distributor Tamil Nadu',
    'edible oil FMCG distribution Tamil Nadu',
    'cooking oil bulk price Tamil Nadu',
    'bulk cooking oil supplier Villupuram',
    'edible oil supplier Villupuram',
    'oil agency in Villupuram Tamil Nadu',
    'largest oil distributor Villupuram',

    // ── FMCG product category ──
    'Unibic cookies distributor Villupuram',
    'biscuits and snacks wholesale Tamil Nadu',
    'washing liquid distributor Tamil Nadu',
    'home care products distributor Villupuram',
    'FMCG food and beverages distributor Tamil Nadu',
    'packaged goods distributor Villupuram',
    'household products wholesale near me',
    'premium biscuit distributor Tamil Nadu',

    // ── B2B & brand partnership ──
    'FMCG distribution partner Tamil Nadu',
    'FMCG brand distributor wanted Villupuram',
    'primary distributor for FMCG brands Tamil Nadu',
    'become FMCG distributor Tamil Nadu',
    'FMCG super stockist Villupuram',
    'FMCG distributor dealership Tamil Nadu',
    'last mile FMCG distributor Tamil Nadu',
    'FMCG brand market expansion Tamil Nadu',
    'FMCG depot to retail distribution Tamil Nadu',
    'FMCG distributor wanted India',
    'FMCG company dealership India',
    'FMCG distributor dealership apply',
    'FMCG products bulk order India',
    'FMCG distributor margin India',

    // ── Service-specific ──
    'primary FMCG distribution Tamil Nadu',
    'depot to retail distribution Villupuram',
    'Retail Management FMCG',
    'shopkeeper relationship management Tamil Nadu',
    'brand activation Villupuram',
    'new retail outlet onboarding Tamil Nadu',
    'last mile FMCG delivery Villupuram',
    'owned logistics FMCG Tamil Nadu',
    'beat-wise FMCG delivery Tamil Nadu',
    'same week FMCG delivery Villupuram',

    // ── Long-tail high-converting ──
    'how to distribute FMCG products in Villupuram',
    'FMCG distributor with 500 retailers Tamil Nadu',
    'reliable FMCG stockist Villupuram Tamil Nadu',
    'FMCG company with owned delivery vehicles Tamil Nadu',
    'FMCG distributor with route planning Tamil Nadu',
    'kirana store FMCG delivery Villupuram district',
    'which FMCG distributor covers Gingee Tindivanam Mailam',
    'best edible oil distributor Villupuram Tamil Nadu 2026',
    'how to become FMCG distributor Tamil Nadu',
    'FMCG dealership business profit margin',
    'best FMCG products to sell in rural India 2026',
    'FMCG items with highest demand in South India',
    'best oil distributor near me in Villupuram',
    'where to buy cooking oil in bulk in Villupuram',
    'FMCG wholesale supplier Villupuram Tamil Nadu',

    // ── 2026 trending ──
    'FMCG products at wholesale price',
    'top FMCG companies India 2026',
    'rural FMCG demand India 2026',
    'Tier 2 city FMCG distributor',
    'FMCG supply chain India 2026',
    'B2B FMCG supplier Tamil Nadu',
    'FMCG last mile delivery partner India',
    'kirana store FMCG supplier',
    'JustDial FMCG supplier Villupuram',
    'IndiaMART FMCG distributor',
    'healthy FMCG products 2026',
    'FMCG market growth India 2026',

    // ── Tamil language SEO ──
    'விழுப்புரம் FMCG விற்பனையாளர்',
    'விழுப்புரம் எண்ணெய் விற்பனையாளர்',
    'தமிழ்நாடு FMCG விநியோகஸ்தர்',
    'விழுப்புரம் மொத்த விற்பனையாளர்',
  ],

  authors:   [{ name: bizName, url: siteUrl }],
  creator:   bizName,
  publisher: bizName,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type:        'website',
    locale:      'en_IN',
    url:         siteUrl,
    siteName:    bizName,
    title:       'Dhev Traders — #1 FMCG & Edible Oil Distributor in Villupuram Tamil Nadu',
    description: 'Largest FMCG & cooking oil distributor in Villupuram (605108). Authorised distributor of Aishwarya Oil, Mr. Gold, Nalla Refined Oil & Unibic. 500+ active retailers. Same-week delivery across Villupuram district.',
    images: [{
      url:    '/og-image.png',
      width:  1200,
      height: 630,
      alt:    'Dhev Traders — Largest FMCG & Oil Distributor Villupuram Tamil Nadu',
    }],
  },

  twitter: {
    card:        'summary_large_image',
    title:       'Dhev Traders | #1 Oil & FMCG Distributor Villupuram Tamil Nadu',
    description: 'Largest FMCG distributor in Villupuram. Aishwarya Oil, Mr. Gold, Nalla & Unibic distributor. 500+ retailers. Same-week delivery.',
    images:      ['/og-image.png'],
  },

  alternates: {
    canonical: siteUrl,
    languages: { 'en-IN': siteUrl, 'ta-IN': siteUrl },
  },

  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },

  category: 'business',

  other: {
    'geo.region':       'IN-TN',
    'geo.placename':    `Valavanur, Villupuram, Tamil Nadu ${pincode}, India`,
    'geo.position':     `${lat};${lng}`,
    'ICBM':             `${lat}, ${lng}`,
    'whatsapp':         whatsapp,
    'business:contact_data:phone_number': phone,
    'business:contact_data:website':      siteUrl,
    'business:contact_data:country_name': 'India',
    'business:contact_data:region':       'Tamil Nadu',
    'business:contact_data:locality':     'Villupuram',
    'business:contact_data:postal_code':  pincode,
  },
}

export const viewport: Viewport = {
  themeColor:   '#1F4D3A',
  width:        'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [

      // ── 1. LocalBusiness + WholesaleStore ──
      {
        '@type': ['LocalBusiness', 'WholesaleStore'],
        '@id':   `${siteUrl}/#business`,
        name:    bizName,
        alternateName: [
          'Dhev Traders Villupuram',
          'DhevTraders',
          'Dhev Traders FMCG',
          'Dhev Traders Oil Distributor',
        ],
        description:
          'Dhev Traders is the largest FMCG and edible oil distributor in Villupuram, Tamil Nadu. Authorised wholesale distributor of Aishwarya Oil, Mr. Gold Oils, Nalla Refined Rice Bran Oil, Whooper and Unibic Cookies serving 500+ retailers across Villupuram, Tindivanam, Gingee, Marakkanam and Kallakurichi with same-week delivery.',
        url:       siteUrl,
        telephone: phone,
        email:     'dhevtrader@gmail.com',
        image:     `${siteUrl}/images/fmcg.png`,
        logo:      `${siteUrl}/images/logo.png`,
        priceRange:           '₹₹',
        currenciesAccepted:   'INR',
        paymentAccepted:      'Cash, UPI, Bank Transfer, NEFT',
        address: {
          '@type':           'PostalAddress',
          streetAddress:     'S-4, West Pondy Road, Valavanur',
          addressLocality:   'Villupuram',
          addressRegion:     'Tamil Nadu',
          postalCode:        pincode,
          addressCountry:    'IN',
        },
        vatID: gst,
        taxID: gst,
        geo: {
          '@type':    'GeoCoordinates',
          latitude:   lat,
          longitude:  lng,
        },
        areaServed: [
          { '@type': 'City',  name: 'Villupuram' },
          { '@type': 'City',  name: 'Tindivanam' },
          { '@type': 'City',  name: 'Gingee' },
          { '@type': 'City',  name: 'Marakkanam' },
          { '@type': 'City',  name: 'Vikravandi' },
          { '@type': 'City',  name: 'Mailam' },
          { '@type': 'City',  name: 'Vanur' },
          { '@type': 'City',  name: 'Kandamangalam' },
          { '@type': 'City',  name: 'Kallakurichi' },
          { '@type': 'City',  name: 'Cuddalore' },
          { '@type': 'State', name: 'Tamil Nadu' },
        ],
        openingHoursSpecification: {
          '@type':      'OpeningHoursSpecification',
          dayOfWeek:    ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
          opens:        '08:00',
          closes:       '20:00',
        },
        contactPoint: [
          {
            '@type':             'ContactPoint',
            telephone:           phone,
            contactType:         'sales',
            availableLanguage:   ['English', 'Tamil'],
          },
          {
            '@type':             'ContactPoint',
            telephone:           phone,
            contactType:         'customer service',
            availableLanguage:   ['Tamil', 'English'],
          },
        ],
        sameAs: [
          'https://share.google/perhqlQc51wfbZzHb',
          whatsapp,
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name:    'FMCG & Edible Oil Distribution Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type':       'Service',
                name:          'Edible Oil Distribution',
                description:   'Authorised wholesale distributor of Aishwarya Oil, Mr. Gold Oils and Nalla Refined Rice Bran Oil in Villupuram, Tamil Nadu.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type':       'Service',
                name:          'Primary FMCG Distribution',
                description:   'Brand stock moved from depot to retail shelves with controlled inventory and disciplined route planning across Villupuram district.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type':       'Service',
                name:          'Retail Management',
                description:   'Active management of 500+ kirana stores, shopkeepers and modern trade outlets across Villupuram district.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type':       'Service',
                name:          'Last-mile Delivery',
                description:   'Same-week delivery to retail outlets across Villupuram, Tindivanam, Gingee, Marakkanam and Kallakurichi.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type':       'Service',
                name:          'Market Expansion',
                description:   'On-ground brand activation, new outlet onboarding and category growth in rural and semi-urban Villupuram district.',
              },
            },
          ],
        },
        knowsAbout: [
          'FMCG Distribution',
          'Edible Oil Distribution',
          'Cooking Oil Wholesale',
          'Supply Chain Management',
          'Retail Management',
          'Last-mile Delivery Tamil Nadu',
          'Kirana Store Supply',
          'FMCG Super Stockist',
          'Wholesale Distribution Villupuram',
        ],
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 15 },
        foundingDate:      '2018',
        foundingLocation: {
          '@type': 'Place',
          address: {
            '@type':         'PostalAddress',
            addressLocality: 'Villupuram',
            addressRegion:   'Tamil Nadu',
            addressCountry:  'IN',
          },
        },
      },

      // ── 2. Organization ──
      {
        '@type': 'Organization',
        '@id':   `${siteUrl}/#organization`,
        name:    bizName,
        url:     siteUrl,
        logo: {
          '@type':  'ImageObject',
          url:      `${siteUrl}/images/logo.png`,
          width:    200,
          height:   200,
        },
        contactPoint: {
          '@type':           'ContactPoint',
          telephone:         phone,
          contactType:       'sales',
          availableLanguage: ['English', 'Tamil'],
        },
        sameAs: [
          'https://share.google/perhqlQc51wfbZzHb',
          whatsapp,
        ],
      },

      // ── 3. WebSite ──
      {
        '@type':       'WebSite',
        '@id':         `${siteUrl}/#website`,
        url:           siteUrl,
        name:          bizName,
        description:   'Official website of Dhev Traders — largest FMCG and edible oil distributor in Villupuram, Tamil Nadu',
        publisher:     { '@id': `${siteUrl}/#organization` },
        inLanguage:    ['en-IN', 'ta-IN'],
        potentialAction: {
          '@type':  'SearchAction',
          target:   { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/?q={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      },

      // ── 4. FAQPage — AI/Gemini/ChatGPT/Perplexity visibility ──
      {
        '@type': 'FAQPage',
        '@id':   `${siteUrl}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Who is the largest FMCG distributor in Villupuram?',
            acceptedAnswer: { '@type': 'Answer', text: 'Dhev Traders is the largest FMCG distributor in Villupuram, Tamil Nadu (605108), serving 500+ active retailers with same-week delivery across Villupuram, Tindivanam, Gingee, Marakkanam and surrounding areas.' },
          },
          {
            '@type': 'Question',
            name: 'Who is the largest oil distributor in Villupuram Tamil Nadu?',
            acceptedAnswer: { '@type': 'Answer', text: 'Dhev Traders is the largest edible and cooking oil distributor in Villupuram, Tamil Nadu. We are the authorised distributor of Aishwarya Oil, Mr. Gold Oils and Nalla Refined Rice Bran Oil.' },
          },
          {
            '@type': 'Question',
            name: 'Who distributes Aishwarya Oil in Villupuram?',
            acceptedAnswer: { '@type': 'Answer', text: 'Dhev Traders is the authorised distributor of Aishwarya Oil in Villupuram, Tamil Nadu. Contact us at +91 89395 91197 for wholesale and retail partnerships.' },
          },
          {
            '@type': 'Question',
            name: 'Who distributes Mr. Gold Oils in Villupuram?',
            acceptedAnswer: { '@type': 'Answer', text: 'Dhev Traders is the authorised distributor of Mr. Gold Oils in Villupuram and surrounding districts of Tamil Nadu.' },
          },
          {
            '@type': 'Question',
            name: 'Who distributes Nalla Refined Rice Bran Oil in Tamil Nadu?',
            acceptedAnswer: { '@type': 'Answer', text: 'Dhev Traders distributes Nalla Refined Rice Bran Oil across Villupuram district, Tamil Nadu with same-week delivery to retail outlets.' },
          },
          {
            '@type': 'Question',
            name: 'What FMCG brands does Dhev Traders distribute?',
            acceptedAnswer: { '@type': 'Answer', text: 'Dhev Traders distributes Aishwarya Oil, Mr. Gold Oils, Nalla Refined Rice Bran Oil, Whooper Washing Liquid, and Unibic Cookies across Villupuram district, Tamil Nadu.' },
          },
          {
            '@type': 'Question',
            name: 'How to become a retail partner with Dhev Traders in Villupuram?',
            acceptedAnswer: { '@type': 'Answer', text: 'To become a retail partner with Dhev Traders, call +91 89395 91197 or WhatsApp us. We supply kirana stores, supermarkets and modern trade outlets across Villupuram district with competitive margins and same-week delivery.' },
          },
          {
            '@type': 'Question',
            name: 'Which areas does Dhev Traders cover for FMCG distribution?',
            acceptedAnswer: { '@type': 'Answer', text: 'Dhev Traders covers Villupuram Town, Tindivanam, Vikravandi, Mailam, Marakkanam, Gingee, Vanur, Kandamangalam and Kallakurichi with active expansion across the Villupuram and Kallakurichi corridor in Tamil Nadu.' },
          },
          {
            '@type': 'Question',
            name: 'Where to buy cooking oil in bulk in Villupuram?',
            acceptedAnswer: { '@type': 'Answer', text: 'Dhev Traders offers bulk cooking oil supply in Villupuram (605108), Tamil Nadu. We stock Aishwarya Oil, Mr. Gold and Nalla refined oils at wholesale prices. Call +91 89395 91197.' },
          },
          {
            '@type': 'Question',
            name: 'What is the contact number for FMCG distributor in Villupuram?',
            acceptedAnswer: { '@type': 'Answer', text: 'Contact Dhev Traders, the largest FMCG distributor in Villupuram, at +91 89395 91197 or WhatsApp on the same number. Email: dhevtrader@gmail.com.' },
          },
          {
            '@type': 'Question',
            name: 'Does Dhev Traders offer same-week FMCG delivery in Tamil Nadu?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dhev Traders offers same-week delivery to all retail outlets across Villupuram, Tindivanam, Gingee, Marakkanam and surrounding areas in Tamil Nadu through owned logistics and beat-wise routing.' },
          },
          {
            '@type': 'Question',
            name: 'How to get FMCG dealership in Villupuram Tamil Nadu?',
            acceptedAnswer: { '@type': 'Answer', text: 'To get an FMCG dealership or become a brand distribution partner in Villupuram, Tamil Nadu, contact Dhev Traders at +91 89395 91197. We handle brand onboarding, stock intake, order capture and last-mile delivery.' },
          },
        ],
      },

      // ── 5. Article — freshness + E-E-A-T signal ──
      {
        '@type':         'Article',
        '@id':           `${siteUrl}/#article`,
        headline:        'Dhev Traders — Trusted FMCG & Edible Oil Distributor in Villupuram, Tamil Nadu',
        description:     'Dhev Traders serves 500+ retailers across Villupuram district with edible oil and FMCG products through owned last-mile delivery 6+ days a week.',
        url:             siteUrl,
        datePublished:   '2024-01-01',
        dateModified:    new Date().toISOString().split('T')[0],
        author: {
          '@type': 'Person',
          name:    'Dhev Traders Team',
          url:     siteUrl,
        },
        publisher:       { '@id': `${siteUrl}/#organization` },
        about:           { '@id': `${siteUrl}/#business` },
        inLanguage:      'en-IN',
        keywords:        'FMCG distributor Villupuram, edible oil distributor Tamil Nadu, Aishwarya Oil, Mr. Gold Oils, Nalla Rice Bran Oil, kirana store supplier Villupuram',
        mainEntityOfPage: { '@type': 'WebPage', '@id': siteUrl },
      },

      // ── 6. BreadcrumbList ──
      {
        '@type': 'BreadcrumbList',
        '@id':   `${siteUrl}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',          item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'About',         item: `${siteUrl}/#about` },
          { '@type': 'ListItem', position: 3, name: 'Services',      item: `${siteUrl}/#services` },
          { '@type': 'ListItem', position: 4, name: 'Network',       item: `${siteUrl}/#network` },
          { '@type': 'ListItem', position: 5, name: 'Brand Partners',item: `${siteUrl}/#partners` },
          { '@type': 'ListItem', position: 6, name: 'Contact',       item: `${siteUrl}/#contact` },
        ],
      },
    ],
  }

  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection"           content="telephone=yes" />
        <meta name="mobile-web-app-capable"     content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Dhev Traders" />
        {/* WhatsApp rich preview */}
        <meta property="og:phone_number"    content={phone} />
        <meta property="og:email"           content="dhevtrader@gmail.com" />
        <meta property="og:locality"        content="Villupuram" />
        <meta property="og:region"          content="Tamil Nadu" />
        <meta property="og:postal-code"     content={pincode} />
        <meta property="og:country-name"    content="India" />
      </head>
      <body>
        {children}
        <Toaster richColors position="top-right" />

        {/* Google Analytics GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
