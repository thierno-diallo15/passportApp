import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { sendSMSNotification, sendEmailNotification } from '@/lib/notification'

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return new NextResponse('Non autorisé', { status: 401 })
    }

    const body = await request.json()
    const { passportNumber } = body

    if (!passportNumber) {
      return new NextResponse('Numéro de passeport requis', { status: 400 })
    }

    // Récupérer les informations du passeport
    const passport = await prisma.passport.findUnique({
      where: { passportNumber }
    })

    if (!passport) {
      return new NextResponse('Passeport non trouvé', { status: 404 })
    }

    // Essayer d'abord d'envoyer par SMS si un numéro de téléphone est disponible
    if (passport.phoneNumber) {
      try {
        const smsSent = await sendSMSNotification(passport.phoneNumber, passportNumber)
        if (smsSent) {
          return NextResponse.json({ 
            success: true, 
            message: 'Notification SMS envoyée avec succès' 
          })
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi du SMS:', error)
        // Si l'envoi par SMS échoue, on continue avec l'email
      }
    }

    // Si pas de numéro de téléphone ou si l'envoi par SMS a échoué, essayer par email
    if (passport.email) {
      try {
        const emailSent = await sendEmailNotification(passport.email, passportNumber)
        if (emailSent) {
          return NextResponse.json({ 
            success: true, 
            message: 'Notification email envoyée avec succès' 
          })
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error)
      }
    }

    return new NextResponse('Échec de l\'envoi de la notification', { status: 500 })
  } catch (error) {
    console.error('Erreur serveur:', error)
    return new NextResponse('Erreur serveur', { status: 500 })
  }
} 