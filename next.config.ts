import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['192.168.56.1'],
  turbopack: {
    root: path.resolve(__dirname),
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90, 100],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [390, 768, 1280, 1920],
    imageSizes: [64, 128, 256, 512],
  },
  async rewrites() {
    return [
      { source: '/favicon.ico', destination: '/images/favicon.png' },
    ]
  },

  async headers() {
    const csp = [
      "default-src 'self'",
      // Scripts: self + GTM + GA4 + inline (required for GTM/GA4 inline tags)
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
      // Styles: self + inline (Tailwind runtime) + Google Fonts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Images: self + data URIs + analytics pixel
      "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com",
      // Iframes: Google Maps embed in Contact section
      "frame-src https://www.google.com https://maps.google.com",
      // XHR/fetch: self + analytics
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com",
      // Video/audio: self only
      "media-src 'self'",
      // No plugins
      "object-src 'none'",
      // Prevent base-tag hijacking
      "base-uri 'self'",
      // Forms only submit to self
      "form-action 'self'",
      // No mixed content
      "upgrade-insecure-requests",
    ].join('; ')

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',           value: 'nosniff' },
          { key: 'X-Frame-Options',                  value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection',                 value: '1; mode=block' },
          { key: 'Referrer-Policy',                  value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',               value: 'camera=(), microphone=(), geolocation=()' },
          // HSTS: 2-year max-age, include subdomains, preload-ready
          { key: 'Strict-Transport-Security',        value: 'max-age=63072000; includeSubDomains; preload' },
          // Isolate top-level window from cross-origin popups
          { key: 'Cross-Origin-Opener-Policy',       value: 'same-origin' },
          // cross-origin allows social scrapers (WhatsApp/FB/Twitter) to load public images
          { key: 'Cross-Origin-Resource-Policy',     value: 'cross-origin' },
          // CSP in enforcement mode (not report-only)
          { key: 'Content-Security-Policy',          value: csp },
        ],
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/videos/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
    ]
  },
}

export default nextConfig
