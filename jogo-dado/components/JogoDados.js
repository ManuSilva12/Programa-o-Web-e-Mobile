"use client";

import { useState } from "react";
import Dado from "./Dado";

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);
  const [jogadorAtual, setJogadorAtual] = useState(1);
  const [dadosJ1, setDadosJ1] = useState([0, 0]);
  const [dadosJ2, setDadosJ2] = useState([0, 0]);
  const [resultadoRodada, setResultadoRodada] = useState("");
  const [placar, setPlacar] = useState({ j1: 0, j2: 0 });

  const rolar = () => Math.floor(Math.random() * 6) + 1;

  function jogar(id) {
    if (id === 1) {
      const novoJ1 = [rolar(), rolar()];
      setDadosJ1(novoJ1);
      setDadosJ2([0, 0]); 
      setResultadoRodada("Aguardando Jogador 2...");
      setJogadorAtual(2);
    } else {

      const novoJ2 = [rolar(), rolar()];
      setDadosJ2(novoJ2);
      const soma1 = dadosJ1[0] + dadosJ1[1];
      const soma2 = novoJ2[0] + novoJ2[1]; 
      if (soma1 > soma2) {
        setResultadoRodada("Vitória do Jogador 1!");
        setPlacar(prev => ({ ...prev, j1: prev.j1 + 1 }));
      } else if (soma2 > soma1) {
        setResultadoRodada("Vitória do Jogador 2!");
        setPlacar(prev => ({ ...prev, j2: prev.j2 + 1 }));
      } else {
        setResultadoRodada("Rodada Empatada!");
      }

      if (rodada < 5) {
        setJogadorAtual(1);
        setRodada(prev => prev + 1);
      } else {
        setRodada(6); 
      }
    }
  }

  const reiniciar = () => {
    setRodada(1);
    setJogadorAtual(1);
    setDadosJ1([0, 0]);
    setDadosJ2([0, 0]);
    setResultadoRodada("");
    setPlacar({ j1: 0, j2: 0 });
  };

  const fimDeJogo = rodada > 5;

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 w-full max-w-xl border border-slate-100">
      <h1 className="text-4xl font-black text-center text-indigo-600 mb-6 uppercase tracking-tighter">Dados Master</h1>
      
      <div className="flex justify-center mb-8">
        <span className="bg-indigo-100 text-indigo-700 px-5 py-1.5 rounded-full font-bold text-sm">
          {fimDeJogo ? "RESULTADO FINAL" : `RODADA ${rodada} / 5`}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-10">
        {/* Lado Jogador 1 */}
        <div className={`p-4 rounded-3xl transition-all duration-300 ${jogadorAtual === 1 && !fimDeJogo ? 'bg-blue-50 ring-2 ring-blue-400' : 'opacity-40'}`}>
          <p className="text-center font-bold mb-4 text-slate-600 uppercase text-xs">Jogador 1</p>
          <div className="flex justify-center gap-2">
            <Dado valor={dadosJ1[0]} />
            <Dado valor={dadosJ1[1]} />
          </div>
          <p className="text-center mt-4 font-black text-blue-600 text-lg">Vitórias: {placar.j1}</p>
        </div>

        {/* Lado Jogador 2 */}
        <div className={`p-4 rounded-3xl transition-all duration-300 ${jogadorAtual === 2 && !fimDeJogo ? 'bg-red-50 ring-2 ring-red-400' : 'opacity-40'}`}>
          <p className="text-center font-bold mb-4 text-slate-600 uppercase text-xs">Jogador 2</p>
          <div className="flex justify-center gap-2">
            <Dado valor={dadosJ2[0]} />
            <Dado valor={dadosJ2[1]} />
          </div>
          <p className="text-center mt-4 font-black text-red-600 text-lg">Vitórias: {placar.j2}</p>
        </div>
      </div>

      <div className="text-center">
        {!fimDeJogo ? (
          <>
            <div className="h-12 mb-6 flex items-center justify-center">
              <p className="text-xl font-bold text-slate-700">{resultadoRodada}</p>
            </div>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => jogar(1)} 
                disabled={jogadorAtual !== 1}
                className="bg-blue-600 text-white font-bold py-4 px-10 rounded-2xl disabled:opacity-20 shadow-lg active:scale-95 transition-transform"
              >
                JOGAR J1
              </button>
              <button 
                onClick={() => jogar(2)} 
                disabled={jogadorAtual !== 2}
                className="bg-red-600 text-white font-bold py-4 px-10 rounded-2xl disabled:opacity-20 shadow-lg active:scale-95 transition-transform"
              >
                JOGAR J2
              </button>
            </div>
          </>
        ) : (
          <div className="bg-indigo-600 p-8 rounded-[2rem] text-white shadow-2xl">
            <h2 className="text-3xl font-black mb-6">
              {placar.j1 > placar.j2 ? "JOGADOR 1 VENCEU!" : placar.j2 > placar.j1 ? "JOGADOR 2 VENCEU!" : "EMPATE GERAL!"}
            </h2>
            <button 
              onClick={reiniciar} 
              className="bg-white text-indigo-600 font-bold py-3 px-12 rounded-xl hover:bg-slate-50 transition-colors uppercase"
            >
              Jogar Novamente
            </button>
          </div>
        )}
      </div>
    </div>
  );
}