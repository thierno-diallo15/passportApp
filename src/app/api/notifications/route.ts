import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { passportNumber, email, phone } = await req.json()

    if (!passportNumber) {
      return NextResponse.json(
        { error: 'Numéro de passeport requis' },
        { status: 400 }
      )
    }

    // Vérifier si le passeport existe
    const passport = await prisma.passport.findUnique({
      where: { passportNumber },
    })

    if (!passport) {
      return NextResponse.json(
        { error: 'Passeport non trouvé' },
        { status: 404 }
      )
    }

    // Créer les notifications demandées
    const notifications = []

    if (email) {
      notifications.push({
        passportId: passport.id,
        email,
        type: 'email',
      })
    }

    if (phone) {
      notifications.push({
        passportId: passport.id,
        phone,
        type: 'sms',
      })
    }

    if (notifications.length === 0) {
      return NextResponse.json(
        { error: 'Email ou numéro de téléphone requis' },
        { status: 400 }
      )
    }

    // Créer les notifications en base
    const createdNotifications = await prisma.notification.createMany({
      data: notifications,
    })

    return NextResponse.json({
      message: 'Notifications enregistrées avec succès',
      count: createdNotifications.count,
    })
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement des notifications:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
} 