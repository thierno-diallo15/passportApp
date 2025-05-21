import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { sendEmailNotification } from '@/lib/notification'

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    console.log('Session:', session)

    if (!session) {
      return new NextResponse('Non autorisé', { status: 401 })
    }

    const body = await request.json()
    console.log('Body reçu:', body)
    const { passportNumber, status } = body

    if (!passportNumber || !status) {
      console.log('Données manquantes:', { passportNumber, status })
      return new NextResponse('Numéro de passeport et statut requis', { status: 400 })
    }

    if (!['available', 'withdrawn'].includes(status)) {
      console.log('Statut invalide:', status)
      return new NextResponse('Statut invalide', { status: 400 })
    }

    console.log('Recherche du passeport:', passportNumber)
    const passport = await prisma.passport.findUnique({
      where: { passportNumber }
    })
    console.log('Passeport trouvé:', passport)

    if (!passport) {
      return new NextResponse('Passeport non trouvé', { status: 404 })
    }

    // Vérifier si on essaie de marquer comme disponible un passeport retiré depuis plus d'une minute
    if (status === 'available' && passport.status === 'withdrawn' && passport.withdrawnAt) {
      const timeSinceWithdrawal = Date.now() - new Date(passport.withdrawnAt).getTime()
      console.log('Temps écoulé depuis le retrait:', timeSinceWithdrawal)
      if (timeSinceWithdrawal > 60000) { // 60000 ms = 1 minute
        return new NextResponse('Impossible de marquer comme disponible un passeport retiré depuis plus d\'une minute', { status: 400 })
      }
    }

    console.log('Mise à jour du passeport avec:', {
      status,
      withdrawnAt: status === 'withdrawn' ? new Date() : null
    })

    const updatedPassport = await prisma.passport.update({
      where: { passportNumber },
      data: {
        status,
        withdrawnAt: status === 'withdrawn' ? new Date() : null
      }
    })
    console.log('Passeport mis à jour:', updatedPassport)

    // Envoyer la notification par email si le passeport est marqué comme disponible
    if (status === 'available' && passport.email) {
      try {
        const emailSent = await sendEmailNotification(passport.email, passportNumber)
        if (emailSent) {
          console.log('Notification par email envoyée avec succès')
        }
      } catch (error) {
        console.error('Échec de l\'envoi par email:', error)
      }
    }

    return NextResponse.json(updatedPassport)
  } catch (error) {
    console.error('Erreur détaillée lors de la modification du statut:', error)
    if (error instanceof Error) {
      console.error('Message d\'erreur:', error.message)
      console.error('Stack trace:', error.stack)
    }
    return new NextResponse('Erreur serveur', { status: 500 })
  }
} 