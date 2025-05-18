import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-6">🇸🇳 Bienvenue sur le Portail Passeport</h1>
      <p className="text-lg mb-8 max-w-xl">
        Cette plateforme vous permet de vérifier en toute confidentialité si votre passeport est arrivé à l’ambassade.
      </p>
      <a
        href="/search"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        🔍 Rechercher votre passeport
      </a>
    </main>
  );
}
