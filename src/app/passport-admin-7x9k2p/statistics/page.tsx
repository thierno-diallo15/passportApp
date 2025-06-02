'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'

import { Card, CardContent, CardHeader, CardTitle, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui'
import ArrowUp from 'lucide-react/dist/esm/icons/arrow-up'
import ArrowDown from 'lucide-react/dist/esm/icons/arrow-down'
import Users from 'lucide-react/dist/esm/icons/users'
import FileCheck from 'lucide-react/dist/esm/icons/file-check'
import FileX from 'lucide-react/dist/esm/icons/file-x'
import FileText from 'lucide-react/dist/esm/icons/file-text'
import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle'
import Percent from 'lucide-react/dist/esm/icons/percent'
import BarChart2 from 'lucide-react/dist/esm/icons/bar-chart'

interface Statistics {
  monthly: {
    month: string
    available: number
    withdrawn: number
  }[]
  yearly: {
    year: string
    available: number
    withdrawn: number
  }[]
  summary: {
    total: number
    available: number
    withdrawn: number
    monthlyChange: number | null
  }
}

const COLORS = ['#4CAF50', '#F59E0B']

export default function StatisticsPage() {
  const { data: session, status } = useSession()
  const [statistics, setStatistics] = useState<Statistics | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'authenticated') {
      fetchStatistics()
    }
  }, [status])

  const fetchStatistics = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('/api/admin/statistics')
      
      if (!response.ok) {
        throw new Error(`Erreur ${response.status}`)
      }
      
      const data = await response.json()
      console.log('Données reçues:', data) // Debug log
      setStatistics(data)
    } catch (error) {
      console.error('Erreur:', error)
      setError(error instanceof Error ? error.message : 'Une erreur est survenue')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-600">Accès non autorisé</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={fetchStatistics}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Réessayer
        </button>
      </div>
    )
  }

  if (!statistics) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-gray-600 mb-4">Aucune donnée disponible</p>
        <button
          onClick={fetchStatistics}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Actualiser
        </button>
      </div>
    )
  }

  const pieData = [
    { name: 'Disponibles', value: statistics.summary.available },
    { name: 'Retirés', value: statistics.summary.withdrawn }
  ]

  const monthlyChange = statistics.summary.monthlyChange ?? 0
  const isPositiveChange = monthlyChange > 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Statistiques
          </h1>
          <p className="text-gray-600 mt-2 text-lg">Vue d'ensemble des passeports</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 border border-indigo-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total des passeports</p>
                <p className="text-3xl font-bold text-indigo-600 mt-2">{statistics.summary.total}</p>
              </div>
              <div className="p-3 bg-indigo-50 rounded-xl">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 border border-green-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Disponibles</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{statistics.summary.available}</p>
              </div>
              <div className="p-3 bg-green-50 rounded-xl">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 border border-yellow-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Retirés</p>
                <p className="text-3xl font-bold text-yellow-600 mt-2">{statistics.summary.withdrawn}</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-xl">
                <FileX className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 border border-purple-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Évolution Mensuelle</p>
                <p className="text-3xl font-bold text-purple-600 mt-2">{isPositiveChange ? '+' : ''}{monthlyChange.toFixed(1)}%</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-xl">
                <Percent className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 border border-indigo-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Derniers retraits</h2>
            <div className="space-y-4">
              {statistics.monthly.slice(0, 5).map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">{stat.month}</p>
                    <p className="text-sm text-gray-500">{stat.withdrawn} passeports retirés</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded-lg">
                    <FileCheck className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 border border-indigo-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Statistiques par mois</h2>
            <div className="space-y-4">
              {statistics.monthly.map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">{stat.month}</p>
                    <div className="flex gap-4 mt-1">
                      <p className="text-sm text-green-600">{stat.available} disponibles</p>
                      <p className="text-sm text-yellow-600">{stat.withdrawn} retirés</p>
                    </div>
                  </div>
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <BarChart2 className="h-5 w-5 text-indigo-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Graphique en camembert */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 border border-indigo-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Répartition des Passeports</h2>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Graphiques en barres */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 border border-indigo-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Évolution dans le temps</h2>
            <Tabs defaultValue="monthly" className="space-y-4">
              <TabsList className="bg-white p-1 rounded-lg border border-purple-100 shadow-sm">
                <TabsTrigger 
                  value="monthly" 
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-sm text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-md transition-colors"
                >
                  Mensuel
                </TabsTrigger>
                <TabsTrigger 
                  value="yearly" 
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-sm text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-md transition-colors"
                >
                  Annuel
                </TabsTrigger>
              </TabsList>

              <TabsContent value="monthly">
                <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                    <BarChart data={statistics.monthly}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="available" name="Disponibles" fill="#4CAF50" />
                      <Bar dataKey="withdrawn" name="Retirés" fill="#F59E0B" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>

              <TabsContent value="yearly">
                <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                    <BarChart data={statistics.yearly}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="available" name="Disponibles" fill="#4CAF50" />
                      <Bar dataKey="withdrawn" name="Retirés" fill="#F59E0B" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
} 