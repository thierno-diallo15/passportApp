import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse('Non autorisé', { status: 401 })
  }

  try {
    const { passportNumber, status } = await request.json()

    if (!passportNumber || !status) {
      return new NextResponse('Numéro de passeport et statut requis', { status: 400 })
    }

    if (!['available', 'withdrawn'].includes(status)) {
      return new NextResponse('Statut invalide', { status: 400 })
    }

    const passport = await prisma.passport.findUnique({
      where: { passportNumber }
    })

    if (!passport) {
      return new NextResponse('Passeport non trouvé', { status: 404 })
    }

    const updatedPassport = await prisma.passport.update({
      where: { passportNumber },
      data: { status }
    })

    return NextResponse.json(updatedPassport)
  } catch (error) {
    console.error('Erreur lors de la modification du statut:', error)
    return new NextResponse('Erreur serveur', { status: 500 })
  }
} 