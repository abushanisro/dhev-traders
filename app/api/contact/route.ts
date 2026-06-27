import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name:    z.string().trim().min(1, 'Name required').max(100),
  email:   z.string().trim().email('Invalid email').max(255),
  brand:   z.string().trim().min(1, 'Brand required').max(100),
  message: z.string().trim().min(1, 'Message required').max(1000),
})

export async function POST(request: NextRequest) {
  try {
    const body   = await request.json()
    const result = schema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message },
        { status: 400 }
      )
    }

    const { name, email, brand, message } = result.data

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from:    'Dhev Traders Website <onboarding@resend.dev>',
      to:      'dhevchandru86@gmail.com',
      replyTo: email,
      subject: `New enquiry from ${name} — ${brand}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto">
          <h2 style="color:#1F4D3A">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:120px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666">Brand</td><td style="padding:8px 0;font-weight:600">${brand}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#f7f7f7;border-radius:8px">
            <p style="margin:0;color:#333;white-space:pre-wrap">${message}</p>
          </div>
          <p style="margin-top:20px;font-size:12px;color:#999">Sent via dhevtraders.com contact form</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
