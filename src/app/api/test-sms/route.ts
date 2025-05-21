import { NextResponse } from 'next/server'
import { sendNotification } from '@/lib/notification'

export async function POST(request: Request) {
  try {
    const { phoneNumber, passportNumber } = await request.json()

    if (!phoneNumber || !passportNumber) {
      return NextResponse.json(
        { error: 'Numéro de téléphone et numéro de passeport requis' },
        { status: 400 }
      )
    }

    const success = await sendNotification(phoneNumber, passportNumber)

    if (success) {
      return NextResponse.json({ message: 'Notification envoyée avec succès' })
    } else {
      return NextResponse.json(
        { error: 'Échec de l\'envoi de la notification' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la notification:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de la notification' },
      { status: 500 }
    )
  }
} 