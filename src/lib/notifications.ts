import prisma from './prisma'
import nodemailer from 'nodemailer'
import twilio from 'twilio'

// Configuration de l'email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

// Configuration de Twilio pour les SMS
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export async function sendPassportNotification(passportId: number) {
  const passport = await prisma.passport.findUnique({
    where: { id: passportId },
  })

  if (!passport) {
    throw new Error('Passeport non trouvé')
  }

  const message = `Votre passeport numéro ${passport.passportNumber} est maintenant disponible.`

  // Envoyer par email si disponible
  if (passport.email) {
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: passport.email,
        subject: 'Votre passeport est disponible',
        text: message,
      })

      await prisma.notification.create({
        data: {
          passportId,
          type: 'email',
          status: 'sent',
          message,
          sentAt: new Date(),
        },
      })
    } catch (error) {
      await prisma.notification.create({
        data: {
          passportId,
          type: 'email',
          status: 'failed',
          message,
          error: error instanceof Error ? error.message : 'Erreur inconnue',
        },
      })
    }
  }

  // Envoyer par SMS si disponible
  if (passport.phoneNumber) {
    try {
      await twilioClient.messages.create({
        body: message,
        to: passport.phoneNumber,
        from: process.env.TWILIO_PHONE_NUMBER,
      })

      await prisma.notification.create({
        data: {
          passportId,
          type: 'sms',
          status: 'sent',
          message,
          sentAt: new Date(),
        },
      })
    } catch (error) {
      await prisma.notification.create({
        data: {
          passportId,
          type: 'sms',
          status: 'failed',
          message,
          error: error instanceof Error ? error.message : 'Erreur inconnue',
        },
      })
    }
  }
} 