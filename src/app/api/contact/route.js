import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { vorname, name, email, nachricht } = await request.json()

    const { data, error } = await resend.emails.send({
      from: 'Sub Sole Films <onboarding@resend.dev>',
      to: 'pascal@subsolefilms.com',
      subject: `Neue Kontaktanfrage von ${vorname} ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #FF7F50;">Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${vorname} ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Nachricht:</strong></p>
          <p style="white-space: pre-line;">${nachricht}</p>
        </div>
      `
    })

    if (error) {
      console.error('Error sending email:', error)
      return NextResponse.json(
        { 
          success: false,
          message: 'Failed to send email',
          error: error.message
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully',
      data
    })

  } catch (error) {
    console.error('Error in API route:', error)
    return NextResponse.json(
      { 
        success: false,
        message: 'Failed to send email',
        error: error.message
      },
      { status: 500 }
    )
  }
}