'use client'

import { useState } from 'react'
import Search from 'lucide-react/dist/esm/icons/search'
import Loader from 'lucide-react/dist/esm/icons/loader'
import AlertCircle from 'lucide-react/dist/esm/icons/alert-circle'
import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2'
import XCircle from 'lucide-react/dist/esm/icons/x-circle'
import FileX from 'lucide-react/dist/esm/icons/file-x'
import FileCheck from 'lucide-react/dist/esm/icons/file-check'

export default function SearchPage() {
  const [passportNumber, setPassportNumber] = useState('')
  const [result, setResult] = useState<null | { found: boolean; status: string | null }>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passportNumber }),
      })

      const data = await res.json()

      if (res.ok) {
        setResult(data)
      } else {
        setError(data.error || 'Erreur lors de la recherche.')
        setResult(null)
      }
    } catch (err) {
      setError('Erreur de connexion au serveur.')
      setResult(null)
    } finally {
      setLoading(false)
    }
  }

  const getStatusMessage = () => {
    if (!result) return null

    if (!result.found) {
      return {
        icon: <XCircle size={22} />,
        message: "Votre passeport n'est pas encore disponible",
        color: 'bg-yellow-500'
      }
    }

    switch (result.status) {
      case 'available':
        return {
          icon: <CheckCircle2 size={22} />,
          message: "Votre passeport est arrivé",
          color: 'bg-green-500'
        }
      case 'withdrawn':
        return {
          icon: <FileX size={22} />,
          message: "Votre passeport a déjà été retiré",
          color: 'bg-gray-500'
        }
      default:
        return {
          icon: <XCircle size={22} />,
          message: "Votre passeport n'est pas encore disponible",
          color: 'bg-yellow-500'
        }
    }
  }

  const statusInfo = getStatusMessage()

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 to-white px-4 py-10">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 space-y-6 animate-fade-in">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-800">Rechercher votre passeport</h1>
          <p className="text-gray-600 mt-2">Entrez votre numéro pour vérifier son arrivée à l'ambassade.</p>
        </div>

        <form onSubmit={handleSearch} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Numéro de passeport"
              className="w-full border border-gray-300 rounded-xl px-5 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg text-gray-800 shadow-sm"
              value={passportNumber}
              onChange={(e) => {
                const newValue = e.target.value.replace(/[^0-9]/g, '')
                setPassportNumber(newValue)
              }}
              onFocus={() => setResult(null)}
              required
              inputMode="numeric"
              pattern="[0-9]*"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl text-lg font-medium flex items-center justify-center gap-2"
          >
            {loading ? <Loader className="animate-spin" size={20} /> : <Search size={20} />}
            {loading ? 'Recherche...' : 'Vérifier'}
          </button>
        </form>

        {statusInfo && (
          <div
            className={`flex items-center gap-2 px-4 py-3 rounded-md text-white font-medium ${statusInfo.color}`}
          >
            {statusInfo.icon} {statusInfo.message}
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-md">
            <AlertCircle size={20} /> {error}
          </div>
        )}
      </div>
    </main>
  )
}
