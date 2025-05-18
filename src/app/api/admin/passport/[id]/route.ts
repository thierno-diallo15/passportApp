import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse('Non autorisé', { status: 401 })
  }

  try {
    const { status } = await request.json()

    if (!['available', 'withdrawn'].includes(status)) {
      return new NextResponse('Statut invalide', { status: 400 })
    }

    const passport = await prisma.passport.update({
      where: { id: parseInt(params.id, 10) },
      data: { status },
    })

    return NextResponse.json(passport)
  } catch (error) {
    console.error('Erreur lors de la mise à jour du passeport:', error)
    return new NextResponse('Erreur serveur', { status: 500 })
  }
} 