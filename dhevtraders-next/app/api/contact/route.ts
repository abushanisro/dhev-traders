import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().trim().min(1, 'Name required').max(100),
  email: z.string().trim().email('Invalid email').max(255),
  brand: z.string().trim().min(1, 'Brand required').max(100),
  message: z.string().trim().min(1, 'Message required').max(1000),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = schema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message },
        { status: 400 }
      )
    }

    // Here you would typically send an email or save to a database.
    // For now, we log and return success.
    console.log('Contact form submission:', result.data)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
