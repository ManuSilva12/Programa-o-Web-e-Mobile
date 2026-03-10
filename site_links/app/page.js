import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4 sm:p-6">
      
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 sm:p-10 max-w-md w-full text-center border border-white/40">

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          Exercícios
        </h1>

        <div className="flex flex-col gap-4">

          <Link
            href="/exercicio210"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Exercício da Pg. 210
          </Link>

          <Link
            href="/exercicio231"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Exercício da Pg. 231
          </Link>

          <Link
            href="/exercicio246"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Exercício da Pg. 246
          </Link>

          <Link
            href="/exercicio263"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Exercício da Pg. 263
          </Link>

        </div>

      </div>

    </main>
  );
}