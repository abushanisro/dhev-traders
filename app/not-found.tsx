import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/site/Navbar'
import { Footer } from '@/components/site/Footer'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description:
    'This page could not be found. Return to the Dhev Traders homepage to explore FMCG distribution services, brand partnerships, and edible oil wholesale in Villupuram, Tamil Nadu.',
  robots: { index: false, follow: false },
}

const quickLinks = [
  { label: 'Home',     href: '/',           desc: 'Start here' },
  { label: 'Services', href: '/#services',  desc: 'What we offer' },
  { label: 'Partners', href: '/#partners',  desc: 'Our brands' },
  { label: 'Contact',  href: '/#contact',   desc: 'Reach us' },
]

export default function NotFound() {
  return (
    <>
      <style>{`
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50%       { opacity: 0.80; transform: scale(1.06); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }

        .nf-section {
          min-height: 100svh;
          background: #030b06;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          /* top pad clears fixed navbar; bottom pad gives breathing room above footer */
          padding: 6rem 1.25rem 4rem;
          font-family: 'Inter', sans-serif;
        }

        /* grid texture */
        .nf-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,169,91,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,169,91,.04) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }

        .nf-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .nf-orb-1 {
          width: 680px; height: 680px;
          background: radial-gradient(circle, rgba(31,77,58,.38) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation: glow-pulse 7s ease-in-out infinite;
        }
        .nf-orb-2 {
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(200,169,91,.12) 0%, transparent 70%);
          top: 18%; right: 12%;
          animation: glow-pulse 9s ease-in-out 2s infinite;
        }
        .nf-orb-3 {
          width: 260px; height: 260px;
          background: radial-gradient(circle, rgba(31,77,58,.22) 0%, transparent 70%);
          bottom: 18%; left: 8%;
          animation: glow-pulse 8s ease-in-out 4s infinite;
        }

        .nf-ring {
          position: absolute;
          top: 50%; left: 50%;
          width: 520px; height: 520px;
          margin: -260px 0 0 -260px;
          border-radius: 50%;
          border: 1px solid rgba(200,169,91,.07);
          animation: spin-slow 40s linear infinite;
          pointer-events: none;
        }
        .nf-ring::after {
          content: '';
          position: absolute;
          top: -3px; left: 30%;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #C8A95B;
          box-shadow: 0 0 8px 3px rgba(200,169,91,.6);
        }

        .nf-404 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(7rem, 24vw, 17rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.05em;
          background: linear-gradient(
            135deg,
            #a07830 0%,
            #C8A95B 28%,
            #f0df9a 50%,
            #C8A95B 72%,
            #a07830 100%
          );
          background-size: 220% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s linear infinite, float 7s ease-in-out infinite;
          filter: drop-shadow(0 0 48px rgba(200,169,91,.35));
          user-select: none;
        }

        .nf-label {
          display: flex;
          align-items: center;
          gap: .75rem;
          justify-content: center;
          margin: 0 auto 1.75rem;
        }
        .nf-line {
          height: 1px; width: 52px;
          background: linear-gradient(to right, transparent, #C8A95B);
        }
        .nf-line.rev { background: linear-gradient(to left, transparent, #C8A95B); }
        .nf-label-text {
          font-family: 'Poppins', sans-serif;
          font-size: .62rem;
          font-weight: 700;
          letter-spacing: .32em;
          color: #C8A95B;
          text-transform: uppercase;
        }

        .nf-headline {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.35rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: -.02em;
          margin-bottom: .8rem;
          line-height: 1.2;
        }
        .nf-copy {
          color: rgba(255,255,255,.45);
          font-size: .92rem;
          line-height: 1.65;
          max-width: 400px;
          margin: 0 auto 2.75rem;
        }

        .nf-ctas {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3.25rem;
        }
        .btn-primary {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: .85rem;
          letter-spacing: .06em;
          text-transform: uppercase;
          padding: .875rem 2rem;
          border-radius: 9999px;
          background: #1F4D3A;
          color: #fff;
          border: 2px solid #1F4D3A;
          text-decoration: none;
          transition: background .25s, box-shadow .25s, transform .2s;
          display: inline-block;
        }
        .btn-primary:hover {
          background: #2a6b50;
          border-color: #2a6b50;
          box-shadow: 0 0 28px rgba(31,77,58,.65);
          transform: translateY(-2px);
        }
        .btn-secondary {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: .85rem;
          letter-spacing: .06em;
          text-transform: uppercase;
          padding: .875rem 2rem;
          border-radius: 9999px;
          background: transparent;
          color: #C8A95B;
          border: 2px solid rgba(200,169,91,.45);
          text-decoration: none;
          transition: background .25s, border-color .25s, box-shadow .25s, transform .2s;
          display: inline-block;
        }
        .btn-secondary:hover {
          background: rgba(200,169,91,.1);
          border-color: #C8A95B;
          box-shadow: 0 0 24px rgba(200,169,91,.28);
          transform: translateY(-2px);
        }

        .nf-nav-label {
          font-size: .62rem;
          letter-spacing: .22em;
          color: rgba(255,255,255,.2);
          text-transform: uppercase;
          margin-bottom: 1rem;
          font-family: 'Inter', sans-serif;
        }
        .nf-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: .75rem;
        }
        @media (max-width: 480px) {
          .nf-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .nf-card {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(200,169,91,.18);
          border-radius: 12px;
          padding: .9rem 1rem;
          text-decoration: none;
          display: block;
          transition: background .25s, border-color .25s, transform .2s, box-shadow .25s;
        }
        .nf-card:hover {
          background: rgba(200,169,91,.09);
          border-color: rgba(200,169,91,.55);
          transform: translateY(-3px);
          box-shadow: 0 0 20px rgba(200,169,91,.18);
        }
        .nf-card-label {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: .85rem;
          color: #C8A95B;
          margin-bottom: .2rem;
        }
        .nf-card-desc {
          font-size: .68rem;
          color: rgba(255,255,255,.32);
          font-family: 'Inter', sans-serif;
        }

        .fu-1 { animation: fade-up .7s ease-out .05s both; }
        .fu-2 { animation: fade-up .7s ease-out .18s both; }
        .fu-3 { animation: fade-up .7s ease-out .30s both; }
        .fu-4 { animation: fade-up .7s ease-out .42s both; }
        .fu-5 { animation: fade-up .7s ease-out .54s both; }
        .fu-6 { animation: fade-up .7s ease-out .66s both; }
      `}</style>

      <Navbar />

      <main className="nf-section">
        {/* Ambient orbs */}
        <div className="nf-orb nf-orb-1" />
        <div className="nf-orb nf-orb-2" />
        <div className="nf-orb nf-orb-3" />

        {/* Spinning ring */}
        <div className="nf-ring" />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '680px', width: '100%' }}>

          {/* 404 */}
          <div className="nf-404 fu-1" aria-label="404">404</div>

          {/* Label */}
          <div className="nf-label fu-2">
            <div className="nf-line" />
            <span className="nf-label-text">Page Not Found</span>
            <div className="nf-line rev" />
          </div>

          {/* Headline + copy */}
          <h1 className="nf-headline fu-3">
            Looks like you took a wrong turn
          </h1>
          <p className="nf-copy fu-3">
            This page doesn&apos;t exist or has been moved. Head back home or reach us directly — we&apos;re always a WhatsApp away.
          </p>

          {/* CTAs */}
          <div className="nf-ctas fu-4">
            <Link href="/" className="btn-primary">
              ← Return Home
            </Link>
            <a
              href="https://wa.me/918939591197"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Quick navigation */}
          <div className="fu-5">
            <div className="nf-nav-label">Quick Navigation</div>
            <div className="nf-grid">
              {quickLinks.map(({ label, href, desc }) => (
                <Link key={label} href={href} className="nf-card">
                  <div className="nf-card-label">{label}</div>
                  <div className="nf-card-desc">{desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
