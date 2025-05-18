import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import * as XLSX from 'xlsx'

interface ExcelRow {
  passportNumber: string | number
  email?: string
  phoneNumber?: string | number
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse('Non autorisé', { status: 401 })
  }

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return new NextResponse('Fichier requis', { status: 400 })
    }

    const buffer = await file.arrayBuffer()
    const workbook = XLSX.read(buffer)
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const data = XLSX.utils.sheet_to_json<ExcelRow>(worksheet)

    if (!data.length || !data[0].passportNumber) {
      return new NextResponse('Format de fichier invalide', { status: 400 })
    }

    const results = {
      message: '',
      details: [] as Array<{ number: string; success: boolean; error?: string; action: 'created' | 'updated' | 'skipped' }>,
      summary: {
        total: data.length,
        created: 0,
        updated: 0,
        skipped: 0,
        failed: 0
      }
    }

    for (const row of data) {
      const passportNumber = String(row.passportNumber)
      
      try {
        // Vérifier si le passeport existe déjà
        const existingPassport = await prisma.passport.findUnique({
          where: { passportNumber }
        })

        if (existingPassport) {
          // Mettre à jour le passeport existant
          await prisma.passport.update({
            where: { passportNumber },
            data: { 
              updatedAt: new Date(),
              email: row.email || undefined,
              phoneNumber: row.phoneNumber ? String(row.phoneNumber) : undefined
            }
          })
          results.details.push({
            number: passportNumber,
            success: true,
            action: 'updated'
          })
          results.summary.updated++
        } else {
          // Créer un nouveau passeport
          await prisma.passport.create({
            data: {
              passportNumber,
              status: 'available',
              email: row.email || undefined,
              phoneNumber: row.phoneNumber ? String(row.phoneNumber) : undefined
            }
          })
          results.details.push({
            number: passportNumber,
            success: true,
            action: 'created'
          })
          results.summary.created++
        }
      } catch (error) {
        results.details.push({
          number: passportNumber,
          success: false,
          error: error instanceof Error ? error.message : 'Erreur inconnue',
          action: 'skipped'
        })
        results.summary.failed++
      }
    }

    // Enregistrer l'historique d'import
    await prisma.importHistory.create({
      data: {
        fileName: file.name,
        status: results.summary.failed === 0 ? 'success' : results.summary.created > 0 ? 'partial' : 'failed',
        totalCount: results.summary.total,
        successCount: results.summary.created + results.summary.updated,
        failedCount: results.summary.failed
      }
    })

    // Générer le message de résumé
    const summaryParts = []
    if (results.summary.created > 0) {
      summaryParts.push(`${results.summary.created} nouveau(x) passeport(s) créé(s)`)
    }
    if (results.summary.updated > 0) {
      summaryParts.push(`${results.summary.updated} passeport(s) mis à jour`)
    }
    if (results.summary.failed > 0) {
      summaryParts.push(`${results.summary.failed} échec(s)`)
    }
    results.message = summaryParts.join(', ')

    return NextResponse.json(results)
  } catch (error) {
    console.error('Erreur lors de l\'import:', error)
    return new NextResponse('Erreur serveur', { status: 500 })
  }
} 