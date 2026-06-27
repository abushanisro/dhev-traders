import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name:    z.string().trim().min(1, 'Name required').max(100),
  email:   z.string().trim().email('Invalid email').max(255),
  brand:   z.string().trim().min(1, 'Brand required').max(100),
  message: z.string().trim().min(1, 'Message required').max(1000),
})

async function sendWhatsApp(name: string, email: string, brand: string, message: string) {
  const apiKey = process.env.CALLMEBOT_API_KEY
  const phone  = process.env.WHATSAPP_PHONE ?? '918524816197'
  if (!apiKey) return

  const text = encodeURIComponent(
    `📩 New enquiry – dhevtraders.com\n\n` +
    `👤 Name: ${name}\n` +
    `✉️ Email: ${email}\n` +
    `🏷️ Brand: ${brand}\n\n` +
    `💬 Message:\n${message}`
  )

  await fetch(
    `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${text}&apikey=${apiKey}`,
    { cache: 'no-store' }
  )
}

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

    await sendWhatsApp(name, email, brand, message)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
