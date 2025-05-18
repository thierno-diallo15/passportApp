'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Lock, Upload, History, LogOut, AlertCircle, CheckCircle2, XCircle, BarChart, FileText, Users } from 'lucide-react'
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
  const router = useRouter()

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

  if (status === 'loading') {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 to-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </main>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 to-white px-4 py-10">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-blue-800">Administration</h1>
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
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
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
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                required
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl text-lg font-medium flex items-center justify-center gap-2"
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
    <main className="min-h-screen bg-gradient-to-tr from-blue-50 to-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800">Administration</h1>
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <Link
                href="/admin/passports"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <Users className="h-5 w-5" />
                Gérer les passeports
              </Link>
              <Link
                href="/admin/statistics"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <BarChart className="h-5 w-5" />
                Statistiques
              </Link>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <LogOut size={20} />
              Déconnexion
            </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white shadow-2xl rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Upload size={20} />
              Importer des passeports
            </h2>

            <form onSubmit={handleImport} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fichier Excel
                </label>
                <input
                  type="file"
                  name="file"
                  accept=".xlsx,.xls"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={importLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl text-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {importLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <Upload size={20} />
                )}
                {importLoading ? 'Import en cours...' : 'Importer'}
              </button>
            </form>

            {importResult && (
              <div className="mt-6 space-y-4">
                <div className="text-lg font-medium">
                  {importResult.message}
                </div>
                <div className="space-y-2">
                  {importResult.details.map((detail, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 p-2 rounded-lg ${
                        detail.success ? 'bg-green-50' : 'bg-red-50'
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

          <div className="bg-white shadow-2xl rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <History size={20} />
              Historique des imports
            </h2>

            <div className="space-y-4">
              {importHistory.map((import_) => (
                <div
                  key={import_.id}
                  className="border border-gray-200 rounded-xl p-4 space-y-2"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">{import_.fileName}</div>
                      <div className="text-sm text-gray-500">
                        {new Date(import_.createdAt).toLocaleString()}
                      </div>
                    </div>
                    <div
                      className={`px-2 py-1 rounded text-sm font-medium ${
                        import_.status === 'success'
                          ? 'bg-green-100 text-green-800'
                          : import_.status === 'partial'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {import_.status}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {import_.successCount} succès, {import_.failedCount} échecs sur{' '}
                    {import_.totalCount} total
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 