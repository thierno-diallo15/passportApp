'use client'

import { useState } from 'react'
import Search from 'lucide-react/dist/esm/icons/search'
import Loader from 'lucide-react/dist/esm/icons/loader'
import AlertCircle from 'lucide-react/dist/esm/icons/alert-circle'
import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2'
import XCircle from 'lucide-react/dist/esm/icons/x-circle'
import FileX from 'lucide-react/dist/esm/icons/file-x'
import FileCheck from 'lucide-react/dist/esm/icons/file-check'
import { motion, AnimatePresence } from 'framer-motion'

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
          message: "Votre passeport est disponible",
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
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 px-4 py-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 space-y-6"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-display text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            Rechercher votre passeport
          </h1>
          <p className="font-sans text-gray-600 mt-3 text-lg">
          Veuillez entrer votre numéro afin de confirmer sa réception par l’ambassade.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          onSubmit={handleSearch} 
          className="space-y-4"
        >
          <div className="relative group">
            <input
              type="text"
              placeholder="Numéro de passeport"
              className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 pl-12 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg text-gray-800 shadow-sm transition-all duration-300 group-hover:border-primary-200 font-sans"
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
            <Search className="absolute left-4 top-4 text-gray-400 group-hover:text-primary-500 transition-colors duration-300" size={20} />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 transition-all duration-300 text-white py-4 rounded-xl text-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl font-display"
          >
            {loading ? (
              <Loader className="animate-spin" size={20} />
            ) : (
              <Search size={20} />
            )}
            {loading ? 'Recherche...' : 'Vérifier'}
          </motion.button>
        </motion.form>

        <AnimatePresence mode="wait">
          {statusInfo && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center gap-3 px-5 py-4 rounded-xl text-white font-medium ${statusInfo.color} shadow-lg font-sans`}
            >
              {statusInfo.icon} {statusInfo.message}
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 text-red-600 bg-red-50 px-5 py-4 rounded-xl shadow-lg font-sans"
            >
              <AlertCircle size={20} /> {error}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  )
}
