import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4 sm:p-6">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-6 sm:p-10 max-w-md w-full text-center border border-white/40">

        <div className="flex justify-center">
          <Image
            src="/IMG_0662.JPG"
            alt="Foto de perfil"
            width={220}
            height={220}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mt-6 text-gray-800 flex items-center justify-center gap-2">
           Manuela Silva 
        </h1>

        <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          Meu nome é Manuela, tenho 21 anos e estou no quinto período de Ciência da Computação.
          Minha área favorita dentro da computação é Ciência de Dados. 
          Meu hobbie favorito é assistir Fórmula 1 e torço pelos pilotos Gabriel Bortoleto e Max Verstappen. 
          Além disso, tenho uma cachorrinha de quase 3 aninhos chamada Amora, que é minha companheira no dia a dia.
        </p>

      </div>
    </main>
  );
}