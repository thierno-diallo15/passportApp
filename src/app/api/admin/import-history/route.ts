import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse('Non autorisé', { status: 401 })
  }

  try {
    const history = await prisma.importHistory.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      take: 10
    })

    return NextResponse.json({ history })
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'historique:', error)
    return new NextResponse('Erreur serveur', { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse('Non autorisé', { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return new NextResponse('ID manquant', { status: 400 })
    }

    await prisma.importHistory.delete({
      where: {
        id: parseInt(id)
      }
    })

    return NextResponse.json({ message: 'Historique supprimé avec succès' })
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'historique:', error)
    return new NextResponse('Erreur serveur', { status: 500 })
  }
} 