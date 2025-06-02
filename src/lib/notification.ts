import nodemailer from 'nodemailer'
import twilio from 'twilio'

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

function formatPhoneNumber(phoneNumber: string): string {
  // Supprimer tous les caractères non numériques
  const cleaned = phoneNumber.replace(/\D/g, '')
  
  // Si le numéro commence par 33, le garder tel quel
  if (cleaned.startsWith('33')) {
    return `+${cleaned}`
  }
  
  // Si le numéro commence par 0, le remplacer par 33
  if (cleaned.startsWith('0')) {
    return `+33${cleaned.slice(1)}`
  }
  
  // Si le numéro commence par 6 ou 7 (format français), ajouter 33
  if (cleaned.startsWith('6') || cleaned.startsWith('7')) {
    return `+33${cleaned}`
  }
  
  // Si le numéro a déjà le format international, le garder
  if (cleaned.startsWith('33')) {
    return `+${cleaned}`
  }
  
  // Par défaut, ajouter 33
  return `+33${cleaned}`
}

export async function sendNotification(contact: string, passportNumber: string) {
  try {
    // Déterminer si le contact est un email ou un numéro de téléphone
    const isEmail = contact.includes('@')
    
    if (isEmail) {
      return await sendEmailNotification(contact, passportNumber)
    } else {
      return await sendSMSNotification(contact, passportNumber)
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la notification:', error)
    return false
  }
}

export async function sendSMSNotification(phoneNumber: string, passportNumber: string): Promise<boolean> {
  try {
    if (!phoneNumber) {
      console.error('Numéro de téléphone manquant')
      return false
    }

    // Formater le numéro de téléphone
    const formattedNumber = formatPhoneNumber(phoneNumber)
    console.log('Numéro formaté:', formattedNumber)

    const message = `Votre passeport numéro ${passportNumber} est disponible. Veuillez vous présenter à l'ambassade pour le retirer.`

    try {
      // Initialiser le client Twilio ici
      const twilioClient = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      )

      const result = await twilioClient.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: formattedNumber
      })

      console.log('SMS envoyé avec succès à', formattedNumber, 'Message SID:', result.sid)
      return true
    } catch (error: any) {
      if (error.code === 21608) {
        console.error(`Le numéro ${formattedNumber} n'est pas vérifié. Veuillez le vérifier sur https://www.twilio.com/console/phone-numbers/verified`)
        throw new Error(`Le numéro ${formattedNumber} n'est pas vérifié. Veuillez le vérifier sur https://www.twilio.com/console/phone-numbers/verified`)
      }
      throw error
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi du SMS:', error)
    return false
  }
}

export async function sendEmailNotification(email: string, passportNumber: string): Promise<boolean> {
  try {
    if (!email) {
      console.error('Adresse email manquante')
      return false
    }

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Votre passeport est disponible',
      text: `Votre passeport numéro ${passportNumber} est disponible. Veuillez vous présenter à l'ambassade pour le retirer.`,
    }

    await transporter.sendMail(mailOptions)
    console.log('Email envoyé avec succès à', email)
    return true
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return false
  }
} 