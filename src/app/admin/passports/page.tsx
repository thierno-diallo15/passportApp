'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Search from 'lucide-react/dist/esm/icons/search'
import Loader2 from 'lucide-react/dist/esm/icons/loader-2'
import FileCheck from 'lucide-react/dist/esm/icons/file-check'
import FileX from 'lucide-react/dist/esm/icons/file-x'
import Bell from 'lucide-react/dist/esm/icons/bell'
import AlertTriangle from 'lucide-react/dist/esm/icons/alert-triangle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

interface Passport {
  id: number
  passportNumber: string
  status: 'available' | 'withdrawn'
  createdAt: string
  email?: string
  phoneNumber?: string
  withdrawnAt?: string | null
}

export default function PassportsPage() {
  const { data: session } = useSession()
  const [passports, setPassports] = useState<Passport[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'available' | 'withdrawn'>('all')
  const [updating, setUpdating] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [passportToUpdate, setPassportToUpdate] = useState<string | null>(null)
  const itemsPerPage = 5

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

  const handleSendNotification = async (passportNumber: string) => {
    setUpdating(passportNumber)
    setError('')

    try {
      const response = await fetch('/api/admin/notifications/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ passportNumber }),
      })

      if (!response.ok) {
        const errorData = await response.text()
        throw new Error(errorData || 'Erreur lors de l\'envoi de la notification')
      }

      // Recharger les passeports pour mettre à jour l'interface
      await fetchPassports()
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Une erreur est survenue')
    } finally {
      setUpdating(null)
    }
  }

  const handleFilterChange = (filter: 'all' | 'available' | 'withdrawn') => {
    setStatusFilter(filter)
    setCurrentPage(1)
  }

  const handleConfirmWithdraw = (passportNumber: string) => {
    setPassportToUpdate(passportNumber)
    setShowConfirmDialog(true)
  }

  const handleConfirmAction = async () => {
    if (passportToUpdate) {
      await handleStatusChange(passportToUpdate, 'withdrawn')
      setShowConfirmDialog(false)
      setPassportToUpdate(null)
    }
  }

  const filteredPassports = passports.filter(passport =>
    passport.passportNumber.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (statusFilter === 'all' || passport.status === statusFilter)
  )

  // Calculer les indices pour la pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredPassports.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredPassports.length / itemsPerPage)

  // Fonction pour changer de page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  // Fonction pour générer les numéros de page à afficher
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // Si moins de 5 pages, afficher toutes les pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // Toujours afficher la première page
      pageNumbers.push(1)

      // Calculer les pages autour de la page courante
      let startPage = Math.max(2, currentPage - 1)
      let endPage = Math.min(totalPages - 1, currentPage + 1)

      // Ajuster si on est proche du début
      if (currentPage <= 3) {
        endPage = 4
      }
      // Ajuster si on est proche de la fin
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3
      }

      // Ajouter les points de suspension si nécessaire
      if (startPage > 2) {
        pageNumbers.push('...')
      }

      // Ajouter les pages du milieu
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }

      // Ajouter les points de suspension si nécessaire
      if (endPage < totalPages - 1) {
        pageNumbers.push('...')
      }

      // Toujours afficher la dernière page
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Gestion des Passeports
          </h1>
          <p className="text-gray-600 mt-2 text-lg">Liste des passeports disponibles et retirés</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 border border-indigo-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Rechercher un passeport..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleFilterChange('all')}
                className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                  statusFilter === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => handleFilterChange('available')}
                className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                  statusFilter === 'available'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                Disponibles
              </button>
              <button
                onClick={() => handleFilterChange('withdrawn')}
                className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                  statusFilter === 'withdrawn'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                Retirés
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Numéro
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date de réception
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date de retrait
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentItems.map((passport) => (
                  <tr key={passport.id} className="hover:bg-gray-50/50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {passport.passportNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          passport.status === 'available'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {passport.status === 'available' ? (
                          <>
                            <FileCheck className="w-4 h-4 mr-1" />
                            Disponible
                          </>
                        ) : (
                          <>
                            <FileX className="w-4 h-4 mr-1" />
                            Retiré
                          </>
                        )}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(passport.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {passport.withdrawnAt
                        ? new Date(passport.withdrawnAt).toLocaleDateString()
                        : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {passport.email || passport.phoneNumber || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        {passport.status === 'available' ? (
                          <>
                            <button
                              onClick={() => handleConfirmWithdraw(passport.passportNumber)}
                              disabled={updating === passport.passportNumber}
                              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                            >
                              {updating === passport.passportNumber ? (
                                <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                              ) : (
                                <FileX className="w-4 h-4 mr-1" />
                              )}
                              Retirer
                            </button>
                            {(passport.email || passport.phoneNumber) && (
                              <button
                                onClick={() => handleSendNotification(passport.passportNumber)}
                                disabled={updating === passport.passportNumber}
                                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                              >
                                {updating === passport.passportNumber ? (
                                  <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                                ) : (
                                  <Bell className="w-4 h-4 mr-1" />
                                )}
                                Notifier
                              </button>
                            )}
                          </>
                        ) : passport.status === 'withdrawn' && (passport.email || passport.phoneNumber) ? (
                          <button
                            onClick={() => handleSendNotification(passport.passportNumber)}
                            disabled={updating === passport.passportNumber}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                          >
                            {updating === passport.passportNumber ? (
                              <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                            ) : (
                              <Bell className="w-4 h-4 mr-1" />
                            )}
                            Notifier
                          </button>
                        ) : null}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-6 flex items-center justify-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                aria-label="Page précédente"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {getPageNumbers().map((page, index) => (
                page === '...' ? (
                  <span key={`ellipsis-${index}`} className="px-2 text-gray-500">...</span>
                ) : (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page as number)}
                    className={`w-10 h-10 rounded-xl border transition-all duration-200 ${
                      currentPage === page
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                aria-label="Page suivante"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dialog de confirmation */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              <h3 className="text-lg font-semibold text-gray-900">Confirmer le retrait</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Êtes-vous sûr de vouloir retirer le passeport <span className="font-bold text-gray-900">{passportToUpdate}</span> ? Cette action ne peut pas être annulée.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowConfirmDialog(false)
                  setPassportToUpdate(null)
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Annuler
              </button>
              <button
                onClick={handleConfirmAction}
                className="px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 