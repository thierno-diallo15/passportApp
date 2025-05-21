import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

interface MonthlyStats {
  month: string
  available: number
  withdrawn: number
}

interface YearlyStats {
  year: string
  available: number
  withdrawn: number
}

interface SummaryStats {
  total: number
  available: number
  withdrawn: number
  monthlyChange: number | null
}

export async function GET() {
  const session = await getServerSession(authOptions)
  console.log('Session:', session)

  if (!session) {
    return new NextResponse('Non autorisé', { status: 401 })
  }

  try {
    // Statistiques mensuelles
    const oneYearAgo = new Date()
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

    // Requête pour les statistiques mensuelles
    const monthlyStats = await prisma.$queryRaw`
      SELECT 
        DATE_TRUNC('month', "createdAt")::date as month,
        COUNT(CASE WHEN status = 'available' THEN 1 END) as available,
        COUNT(CASE WHEN status = 'withdrawn' THEN 1 END) as withdrawn
      FROM "Passport"
      WHERE "createdAt" >= ${oneYearAgo}
      GROUP BY DATE_TRUNC('month', "createdAt")
      ORDER BY month ASC
    `

    // Formatage des statistiques mensuelles
    const formattedMonthlyStats = (monthlyStats as any[]).map(stat => ({
      month: new Date(stat.month).toISOString().slice(0, 7),
      available: Number(stat.available),
      withdrawn: Number(stat.withdrawn)
    }))

    // Statistiques annuelles
    const yearlyStats = await prisma.$queryRaw`
      SELECT 
        DATE_TRUNC('year', "createdAt")::date as year,
        COUNT(CASE WHEN status = 'available' THEN 1 END) as available,
        COUNT(CASE WHEN status = 'withdrawn' THEN 1 END) as withdrawn
      FROM "Passport"
      GROUP BY DATE_TRUNC('year', "createdAt")
      ORDER BY year ASC
    `

    // Formatage des statistiques annuelles
    const formattedYearlyStats = (yearlyStats as any[]).map(stat => ({
      year: new Date(stat.year).getFullYear().toString(),
      available: Number(stat.available),
      withdrawn: Number(stat.withdrawn)
    }))

    // Résumé global
    const [total, available, withdrawn] = await Promise.all([
      prisma.passport.count(),
      prisma.passport.count({ where: { status: 'available' } }),
      prisma.passport.count({ where: { status: 'withdrawn' } })
    ])

    // Calcul de l'évolution mensuelle
    const lastMonth = new Date()
    lastMonth.setMonth(lastMonth.getMonth() - 1)
    const twoMonthsAgo = new Date()
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2)

    const [lastMonthAvailable, previousMonthAvailable] = await Promise.all([
      prisma.passport.count({
        where: {
          status: 'available',
          createdAt: {
            gte: lastMonth
          }
        }
      }),
      prisma.passport.count({
        where: {
          status: 'available',
          createdAt: {
            gte: twoMonthsAgo,
            lt: lastMonth
          }
        }
      })
    ])

    const monthlyChange = previousMonthAvailable === 0 
      ? null 
      : ((lastMonthAvailable - previousMonthAvailable) * 100) / previousMonthAvailable

    const summary: SummaryStats = {
      total,
      available,
      withdrawn,
      monthlyChange
    }

    return NextResponse.json({
      monthly: formattedMonthlyStats,
      yearly: formattedYearlyStats,
      summary
    })
  } catch (error) {
    console.error('Erreur détaillée lors de la récupération des statistiques:', error)
    if (error instanceof Error) {
      console.error('Message d\'erreur:', error.message)
      console.error('Stack trace:', error.stack)
    }
    return new NextResponse('Erreur serveur', { status: 500 })
  }
} 