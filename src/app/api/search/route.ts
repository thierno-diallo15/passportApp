import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('Requête reçue:', body)

    const { passportNumber } = body

    if (!passportNumber) {
      console.log('Numéro de passeport manquant')
      return NextResponse.json({ error: 'Numéro requis' }, { status: 400 })
    }

    console.log('Recherche du passeport:', passportNumber)
    const passport = await prisma.passport.findUnique({
      where: { passportNumber: String(passportNumber) },
    })

    console.log('Résultat de la recherche:', passport ? passport.status : 'Non trouvé')
    return NextResponse.json({ 
      found: !!passport,
      status: passport?.status || null 
    })
  } catch (error) {
    console.error("Erreur détaillée dans l'API /api/search:", error)
    return NextResponse.json(
      { 
        error: 'Erreur serveur',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      }, 
      { status: 500 }
    )
  }
}