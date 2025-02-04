import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configurar el transporter de nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

export async function POST(request) {
  try {
    const { vorname, name, email, nachricht } = await request.json()

    const mailOptions = {
      from: process.env.EMAIL_USER,
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
    }

    const info = await transporter.sendMail(mailOptions)

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully',
      data: info
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