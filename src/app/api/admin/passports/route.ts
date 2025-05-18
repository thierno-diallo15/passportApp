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
    const passports = await prisma.passport.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(passports)
  } catch (error) {
    console.error('Erreur lors de la récupération des passeports:', error)
    return new NextResponse('Erreur serveur', { status: 500 })
  }
} 