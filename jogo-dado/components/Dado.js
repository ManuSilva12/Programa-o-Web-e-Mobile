import Image from "next/image";

export default function Dado({ valor }) {
  const numero = (valor === 0 || !valor) ? 0 : valor;

  return (
    <div className="bg-white rounded-2xl shadow-md p-2 border border-slate-200">
      <Image
        src={`/imagens/dado${numero}.png`} 
        alt={`Dado ${numero}`}
        width={70}
        height={70}
        priority
      />
    </div>
  );
}