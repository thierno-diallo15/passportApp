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

  if (!session) {
    return new NextResponse('Non autorisé', { status: 401 })
  }

  try {
    // Statistiques mensuelles
    const monthlyStats = await prisma.passport.groupBy({
      by: ['createdAt', 'status'],
      where: {
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 12))
        }
      },
      _count: {
        _all: true
      }
    })

    const formattedMonthlyStats = monthlyStats.reduce((acc: MonthlyStats[], curr) => {
      const month = curr.createdAt.toISOString().slice(0, 7)
      const existingMonth = acc.find(m => m.month === month)
      
      if (existingMonth) {
        if (curr.status === 'available') {
          existingMonth.available += curr._count._all
        } else if (curr.status === 'withdrawn') {
          existingMonth.withdrawn += curr._count._all
        }
      } else {
        acc.push({
          month,
          available: curr.status === 'available' ? curr._count._all : 0,
          withdrawn: curr.status === 'withdrawn' ? curr._count._all : 0
        })
      }
      
      return acc
    }, []).sort((a, b) => a.month.localeCompare(b.month))

    // Statistiques annuelles
    const yearlyStats = await prisma.passport.groupBy({
      by: ['createdAt', 'status'],
      _count: {
        _all: true
      }
    })

    const formattedYearlyStats = yearlyStats.reduce((acc: YearlyStats[], curr) => {
      const year = curr.createdAt.getFullYear().toString()
      const existingYear = acc.find(y => y.year === year)
      
      if (existingYear) {
        if (curr.status === 'available') {
          existingYear.available += curr._count._all
        } else if (curr.status === 'withdrawn') {
          existingYear.withdrawn += curr._count._all
        }
      } else {
        acc.push({
          year,
          available: curr.status === 'available' ? curr._count._all : 0,
          withdrawn: curr.status === 'withdrawn' ? curr._count._all : 0
        })
      }
      
      return acc
    }, []).sort((a, b) => a.year.localeCompare(b.year))

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
    console.error('Erreur lors de la récupération des statistiques:', error)
    return new NextResponse('Erreur serveur', { status: 500 })
  }
} 