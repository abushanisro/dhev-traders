import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dhevtraders.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Google — full access
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // Google Image
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      // Bing
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // ChatGPT / OpenAI
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // Google Gemini / Bard
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Perplexity
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Anthropic Claude
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      // Meta AI
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
