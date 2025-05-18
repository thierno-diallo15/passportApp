import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { sendPassportNotification } from '@/lib/notifications'

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse('Non autorisé', { status: 401 })
  }

  try {
    const { passportId } = await request.json()

    if (!passportId) {
      return new NextResponse('ID du passeport requis', { status: 400 })
    }

    await sendPassportNotification(passportId)

    return NextResponse.json({ message: 'Notification envoyée avec succès' })
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la notification:', error)
    return new NextResponse('Erreur serveur', { status: 500 })
  }
} 