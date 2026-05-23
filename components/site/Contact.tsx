'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react'
import { z } from 'zod'
import { toast } from 'sonner'

const GOOGLE_BUSINESS_URL = 'https://share.google/perhqlQc51wfbZzHb'
const MAPS_EMBED_SRC =
  'https://www.google.com/maps?q=Dhev+Traders+Villupuram+Tamil+Nadu&output=embed'

const schema = z.object({
  name: z.string().trim().min(1, 'Name required').max(100),
  email: z.string().trim().email('Invalid email').max(255),
  brand: z.string().trim().min(1, 'Brand required').max(100),
  message: z.string().trim().min(1, 'Message required').max(1000),
})

type FormState = { name: string; email: string; brand: string; message: string }

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', brand: '', message: '' })
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const r = schema.safeParse(form)
    if (!r.success) {
      toast.error(r.error.issues[0].message)
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(r.data),
      })
      if (res.ok) {
        toast.success("Thanks! We'll be in touch shortly.")
        setForm({ name: '', email: '', brand: '', message: '' })
      } else {
        const data = await res.json()
        toast.error(data.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      toast.error('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const fields = [
    { k: 'name' as const, label: 'Your Name', type: 'text', placeholder: 'Full name' },
    { k: 'email' as const, label: 'Email', type: 'email', placeholder: 'you@example.com' },
    { k: 'brand' as const, label: 'Brand Name', type: 'text', placeholder: 'Your brand' },
  ]

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="container-prose grid lg:grid-cols-2 gap-12 items-stretch">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Contact</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Get in Touch
          </h2>
          <div className="mt-4 h-1 w-16 bg-gold rounded-full" />
          <p className="mt-5 text-muted-foreground">
            Reach out to discuss distribution, partnerships, or retail opportunities.
          </p>

          <address className="mt-8 space-y-4 not-italic">
            {[
              { icon: Mail, label: 'Email', value: 'dhevtrader@gmail.com', href: 'mailto:dhevtrader@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 89395 91197', href: 'tel:+918939591197' },
              { icon: MapPin, label: 'Location', value: 'S-4, West Pondy Road, Valavanur, Villupuram – 605108', href: GOOGLE_BUSINESS_URL },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 hover:border-gold/40 hover:shadow-soft transition-all"
                aria-label={`${c.label}: ${c.value}`}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center flex-shrink-0">
                  <c.icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-semibold text-foreground">{c.value}</div>
                </div>
              </a>
            ))}
          </address>

          <div className="mt-6 rounded-2xl overflow-hidden border border-border shadow-soft">
            <iframe
              src={MAPS_EMBED_SRC}
              title="Dhev Traders location in Villupuram, Tamil Nadu on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 border-0"
            />
          </div>
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors"
          >
            View on Google Business <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>

        <form
          onSubmit={submit}
          className="rounded-3xl border border-border bg-card p-7 md:p-9 shadow-soft flex flex-col h-full"
          noValidate
          aria-label="Contact form"
        >
          <h3 className="font-display font-bold text-2xl text-foreground">Send a Message</h3>
          <p className="mt-1 text-sm text-muted-foreground">We typically respond within 24 hours.</p>

          <div className="mt-6 space-y-4 flex-1 flex flex-col justify-between">
            {fields.map((f) => (
              <div key={f.k}>
                <label
                  htmlFor={`contact-${f.k}`}
                  className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2"
                >
                  {f.label}
                </label>
                <input
                  id={`contact-${f.k}`}
                  type={f.type}
                  value={form[f.k]}
                  onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                  placeholder={f.placeholder}
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="How can we help?"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3.5 font-semibold hover:bg-primary-dark transition-colors shadow-soft disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={18} aria-hidden="true" />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
