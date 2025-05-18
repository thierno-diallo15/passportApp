'use client'

import { useState } from 'react'
import { Search, Loader, AlertCircle, CheckCircle2, XCircle, Bell } from 'lucide-react'

export default function SearchPage() {
  const [passportNumber, setPassportNumber] = useState('')
  const [result, setResult] = useState<null | boolean>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showNotificationForm, setShowNotificationForm] = useState(false)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notificationSent, setNotificationSent] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    setShowNotificationForm(false)
    setNotificationSent(false)

    try {
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passportNumber }),
      })

      const data = await res.json()

      if (res.ok) {
        setResult(data.found)
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

  const handleNotification = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passportNumber, email, phone }),
      })

      const data = await res.json()

      if (res.ok) {
        setNotificationSent(true)
        setShowNotificationForm(false)
      } else {
        setError(data.error || 'Erreur lors de l\'enregistrement des notifications.')
      }
    } catch (err) {
      setError('Erreur de connexion au serveur.')
    } finally {
      setLoading(false)
    }
  }

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

        {error && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-md">
            <AlertCircle size={20} /> {error}
          </div>
        )}

        {result !== null && (
          <div
            className={`flex items-center gap-2 px-4 py-3 rounded-md text-white font-medium ${
              result ? 'bg-green-500' : 'bg-yellow-500'
            }`}
          >
            {result ? (
              <>
                <CheckCircle2 size={22} /> Votre passeport est <b className="ml-1">arrivé !</b>
              </>
            ) : (
              <>
                <XCircle size={22} /> Votre passeport n'est <b className="ml-1">pas encore disponible</b>.
                <button
                  onClick={() => setShowNotificationForm(true)}
                  className="ml-auto bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-sm flex items-center gap-1"
                >
                  <Bell size={16} />
                  Être notifié
                </button>
              </>
            )}
          </div>
        )}

        {showNotificationForm && (
          <form onSubmit={handleNotification} className="space-y-4 bg-gray-50 p-4 rounded-xl">
            <h3 className="font-medium text-gray-900">Être notifié de l'arrivée</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone (optionnel)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+221 7X XXX XX XX"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={loading || (!email && !phone)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-xl text-sm font-medium"
              >
                {loading ? 'Enregistrement...' : 'Enregistrer'}
              </button>
              <button
                type="button"
                onClick={() => setShowNotificationForm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Annuler
              </button>
            </div>
          </form>
        )}

        {notificationSent && (
          <div className="text-green-600 bg-green-50 px-4 py-2 rounded-md">
            Vos préférences de notification ont été enregistrées.
          </div>
        )}
      </div>
    </main>
  )
}
