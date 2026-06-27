import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Dhev Traders — Trusted FMCG Distributor in Villupuram, Tamil Nadu'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1F4D3A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Gold accent bar */}
        <div style={{ width: 80, height: 6, background: '#C8A95B', borderRadius: 3, marginBottom: 32 }} />

        {/* Brand name */}
        <div
          style={{
            color: '#C8A95B',
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 6,
            marginBottom: 20,
            textTransform: 'uppercase',
          }}
        >
          DHEV TRADERS
        </div>

        {/* Headline */}
        <div
          style={{
            color: '#ffffff',
            fontSize: 54,
            fontWeight: 800,
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: 28,
            maxWidth: 900,
          }}
        >
          Trusted FMCG Distributor in Villupuram, Tamil Nadu
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 40, marginBottom: 36 }}>
          {['500+ Retailers', 'Same-Week Delivery', '5+ National Brands'].map((s) => (
            <div
              key={s}
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: 22,
                padding: '8px 20px',
                border: '1px solid rgba(200,169,91,0.4)',
                borderRadius: 8,
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div style={{ color: '#C8A95B', fontSize: 22, fontWeight: 600 }}>
          www.dhevtraders.com
        </div>
      </div>
    ),
    { ...size }
  )
}
