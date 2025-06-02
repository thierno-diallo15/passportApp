'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4">
      <div className="text-center space-y-8">
        <div className="relative w-96 h-96 mx-auto">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-9xl font-bold text-indigo-600 animate-bounce">
              404
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Oups ! Page introuvable
          </h1>
          <p className="text-gray-600 text-xl">
            Cette page est partie en voyage sans laisser d'adresse... 🧳✈️
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  )
} 