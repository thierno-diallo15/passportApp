'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import Lock from 'lucide-react/dist/esm/icons/lock'
import Upload from 'lucide-react/dist/esm/icons/upload'
import History from 'lucide-react/dist/esm/icons/history'
import LogOut from 'lucide-react/dist/esm/icons/log-out'
import AlertCircle from 'lucide-react/dist/esm/icons/alert-circle'
import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2'
import XCircle from 'lucide-react/dist/esm/icons/x-circle'
import BarChart from 'lucide-react/dist/esm/icons/bar-chart'
import FileText from 'lucide-react/dist/esm/icons/file-text'
import Users from 'lucide-react/dist/esm/icons/users'
import Link from 'next/link'

export default function AdminPage() {
  const { data: session, status } = useSession()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [importLoading, setImportLoading] = useState(false)
  const [importResult, setImportResult] = useState<null | {
    message: string;
    details: Array<{ number: string; success: boolean; error?: any }>;
  }>(null)
  const [importHistory, setImportHistory] = useState<Array<{
    id: number;
    fileName: string;
    status: string;
    totalCount: number;
    successCount: number;
    failedCount: number;
    createdAt: string;
  }>>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const router = useRouter()
  const [selectedFileName, setSelectedFileName] = useState('')

  useEffect(() => {
    if (status === 'authenticated') {
      loadImportHistory()
    }
  }, [status])

  const loadImportHistory = async () => {
    try {
      const res = await fetch('/api/admin/import-history')
      if (res.ok) {
        const data = await res.json()
        setImportHistory(data.history)
      }
    } catch (err) {
      console.error('Erreur lors du chargement de l\'historique:', err)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Identifiants invalides')
      }
    } catch (err) {
      setError('Erreur de connexion au serveur')
    }
  }

  const handleLogout = async () => {
    await signOut({ redirect: false })
    router.push('/admin')
  }

  const handleImport = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setImportLoading(true)
    setImportResult(null)
    setError('')

    const formData = new FormData(e.currentTarget)
    const file = formData.get('file') as File

    if (!file) {
      setError('Veuillez sélectionner un fichier')
      setImportLoading(false)
      return
    }

    try {
      const res = await fetch('/api/admin/import', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (res.ok) {
        setImportResult(data)
        loadImportHistory()
      } else {
        setError(data.error || 'Erreur lors de l\'import')
      }
    } catch (err) {
      setError('Erreur de connexion au serveur')
    } finally {
      setImportLoading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFileName(file.name)
    } else {
      setSelectedFileName('')
    }
  }

  // Calculer les indices pour la pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = importHistory.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(importHistory.length / itemsPerPage)

  // Fonction pour changer de page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  if (status === 'loading') {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </main>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-10">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl p-8 space-y-6 border border-gray-100">
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Administration</h1>
            <p className="text-gray-600 mt-2">Connexion à l'espace administrateur</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 bg-white/50 backdrop-blur-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 bg-white/50 backdrop-blur-sm"
                required
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm bg-red-50/80 backdrop-blur-sm p-3 rounded-lg border border-red-100">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 text-white py-3 rounded-xl text-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Lock size={20} />
              Se connecter
            </button>
          </form>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Administration
            </h1>
            <p className="text-gray-600 mt-2 text-lg">Tableau de bord administratif</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex gap-4">
              <Link
                href="/admin/passports"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Users className="h-5 w-5" />
                Gérer les passeports
              </Link>
              <Link
                href="/admin/statistics"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <BarChart className="h-5 w-5" />
                Statistiques
              </Link>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200"
            >
              <LogOut size={20} />
              Déconnexion
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Import Section */}
          <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Upload className="h-6 w-6 text-indigo-600" />
              </div>
              Importer des passeports
            </h2>

            <form onSubmit={handleImport} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Fichier Excel
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="file"
                    accept=".xlsx,.xls"
                    onChange={handleFileChange}
                    className="w-full border-2 border-dashed border-gray-300 rounded-xl px-4 py-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-400"
                    required
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {selectedFileName ? (
                      <div className="text-center">
                        <FileText className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-indigo-600">{selectedFileName}</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">Glissez-déposez votre fichier ici</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-600">
                  <AlertCircle className="h-5 w-5" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={importLoading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 text-white py-4 rounded-xl text-lg font-medium flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {importLoading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                ) : (
                  <Upload className="h-6 w-6" />
                )}
                {importLoading ? 'Import en cours...' : 'Importer'}
              </button>
            </form>

            {importResult && (
              <div className="mt-8 space-y-4">
                <div className="text-lg font-medium text-gray-800">
                  {importResult.message}
                </div>
                <div className="space-y-2">
                  {importResult.details.map((detail, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-xl ${
                        detail.success ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'
                      }`}
                    >
                      {detail.success ? (
                        <CheckCircle2 className="text-green-600" size={20} />
                      ) : (
                        <XCircle className="text-red-600" size={20} />
                      )}
                      <span className={detail.success ? 'text-green-700' : 'text-red-700'}>
                        {detail.number}
                        {!detail.success && detail.error && (
                          <span className="text-sm ml-2">({detail.error})</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* History Section */}
          <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <History className="h-6 w-6 text-indigo-600" />
              </div>
              Historique des imports
            </h2>

            <div className="space-y-4">
              {currentItems.map((import_) => (
                <div
                  key={import_.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-gray-900 text-lg">{import_.fileName}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(import_.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                      import_.status === 'success'
                        ? 'bg-green-100 text-green-800 border border-green-200'
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}>
                      {import_.status === 'success' ? 'Succès' : 'Échec'}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-500 block mb-1">Total</span>
                      <span className="font-medium text-gray-900 text-lg">{import_.totalCount}</span>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <span className="text-green-600 block mb-1">Succès</span>
                      <span className="font-medium text-green-700 text-lg">{import_.successCount}</span>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <span className="text-red-600 block mb-1">Échecs</span>
                      <span className="font-medium text-red-700 text-lg">{import_.failedCount}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-3 mt-8">
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
                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-xl border font-medium transition-all duration-200 ${
                          currentPage === page
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent'
                            : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
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
        </div>
      </div>
    </main>
  )
} 