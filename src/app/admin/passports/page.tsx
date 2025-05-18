'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Search, Loader2, FileCheck, FileX, Bell } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

interface Passport {
  id: number
  passportNumber: string
  status: 'available' | 'withdrawn'
  createdAt: string
  email?: string
  phoneNumber?: string
}

export default function PassportsPage() {
  const { data: session } = useSession()
  const [passports, setPassports] = useState<Passport[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [updating, setUpdating] = useState<string | null>(null)

  useEffect(() => {
    fetchPassports()
  }, [])

  const fetchPassports = async () => {
    try {
      const response = await fetch('/api/admin/passports')
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des passeports')
      }
      const data = await response.json()
      setPassports(data)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Une erreur est survenue')
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (passportNumber: string, newStatus: 'available' | 'withdrawn') => {
    setUpdating(passportNumber)
    setError('')

    try {
      const response = await fetch('/api/admin/passport/status', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ passportNumber, status: newStatus }),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de la modification du statut')
      }

      const updatedPassport = await response.json()
      setPassports(passports.map(p => 
        p.passportNumber === passportNumber ? updatedPassport : p
      ))
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Une erreur est survenue')
    } finally {
      setUpdating(null)
    }
  }

  const handleSendNotification = async (passportId: number) => {
    setUpdating(passportId.toString())
    setError('')

    try {
      const response = await fetch('/api/admin/notifications/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ passportId }),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi de la notification')
      }

      // Recharger les passeports pour mettre à jour l'interface
      await fetchPassports()
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Une erreur est survenue')
    } finally {
      setUpdating(null)
    }
  }

  const filteredPassports = passports.filter(passport =>
    passport.passportNumber.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Gestion des Passeports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher un passeport..."
                className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">Numéro</th>
                  <th className="px-4 py-2 text-left">Statut</th>
                  <th className="px-4 py-2 text-left">Date de création</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPassports.map((passport) => (
                  <tr key={passport.id} className="border-b">
                    <td className="px-4 py-2">{passport.passportNumber}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        passport.status === 'available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {passport.status === 'available' ? 'Disponible' : 'Retiré'}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      {new Date(passport.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2">
                      {updating === passport.passportNumber ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <div className="flex gap-2">
                          {passport.status === 'available' ? (
                            <>
                              <button
                                onClick={() => handleStatusChange(passport.passportNumber, 'withdrawn')}
                                className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                              >
                                <FileX size={16} />
                                Retirer
                              </button>
                              {(passport.email || passport.phoneNumber) && (
                                <button
                                  onClick={() => handleSendNotification(passport.id)}
                                  className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                  <Bell size={16} />
                                  Notifier
                                </button>
                              )}
                            </>
                          ) : (
                            <button
                              onClick={() => handleStatusChange(passport.passportNumber, 'available')}
                              className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                            >
                              <FileCheck size={16} />
                              Marquer disponible
                            </button>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 