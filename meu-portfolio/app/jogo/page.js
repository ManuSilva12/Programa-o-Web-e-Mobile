"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const WORDS = [
  "ALGORITMO", "ESTRUTURA", "VARIAVEL", "COMPILADOR", "DATABASE", 
  "INTERFACE", "PROGRAMA", "LOGICA", "REACT", "NEXTJS", 
  "JAVASCRIPT", "PYTHON", "MYSQL", "GITHUB", "TAILWIND", 
  "COMPUTACAO", "FUNCAO", "COMPONENTE", "SOFTWARE", "HARDWARE", 
  "ROBOTICA", "ARDUINO", "OBJETO", "HERANCA", "INTERNET", 
  "DEPLOY", "FRAMEWORK", "BACKEND", "FRONTEND", "RECURSAO", "BINARIO"
];

const BODY_PARTS = [
  <circle key="h" cx="160" cy="60" r="20" stroke="#db2777" strokeWidth="3" fill="none" />,
  <line key="b" x1="160" y1="80" x2="160" y2="140" stroke="#475569" strokeWidth="3" />,
  <line key="la" x1="160" y1="90" x2="130" y2="120" stroke="#475569" strokeWidth="3" />,
  <line key="ra" x1="160" y1="90" x2="190" y2="120" stroke="#475569" strokeWidth="3" />,
  <line key="ll" x1="160" y1="140" x2="130" y2="180" stroke="#475569" strokeWidth="3" />,
  <line key="rl" x1="160" y1="140" x2="190" y2="180" stroke="#475569" strokeWidth="3" />
];

export default function PaginaJogo() {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  
  const incorrectLetters = guessedLetters.filter(l => !word.includes(l));
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = word !== "" && word.split("").every(l => guessedLetters.includes(l));

  useEffect(() => { 
    resetGame(); 
  }, []);

  const resetGame = () => {
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    setGuessedLetters([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 relative flex items-center justify-center p-4">
      
      {/* BOTÃO VOLTAR - POSICIONAMENTO FIXO NO CANTO SUPERIOR ESQUERDO */}
      <div className="fixed top-0 left-0 p-6 md:p-10 z-[999]">
        <Link 
          href="/" 
          className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-100 rounded-full shadow-sm hover:shadow-md hover:text-pink-600 transition-all text-[10px] font-black uppercase tracking-widest text-slate-400"
        >
          <span className="text-sm">←</span> Voltar ao Portfólio
        </Link>
      </div>

      <div className="w-full max-w-xl bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 to-slate-900"></div>
        
        <h1 className="text-[11px] font-black uppercase tracking-[0.5em] text-pink-600 mb-10">
          Jogo da Forca
        </h1>
        
        <div className="flex justify-center mb-8">
          <svg height="180" width="180" viewBox="0 0 200 220" className="max-w-full h-auto">
            <line x1="20" y1="200" x2="100" y2="200" stroke="#cbd5e1" strokeWidth="4" />
            <line x1="60" y1="200" x2="60" y2="20" stroke="#cbd5e1" strokeWidth="4" />
            <line x1="60" y1="20" x2="160" y2="20" stroke="#cbd5e1" strokeWidth="4" />
            <line x1="160" y1="20" x2="160" y2="40" stroke="#cbd5e1" strokeWidth="4" />
            {BODY_PARTS.slice(0, incorrectLetters.length)}
          </svg>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap min-h-[3rem]">
          {word.split("").map((l, i) => (
            <span key={i} className="border-b-4 border-slate-100 w-7 md:w-9 h-12 flex items-center justify-center text-xl md:text-3xl font-black text-slate-800">
              {guessedLetters.includes(l) || isLoser ? l : ""}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-6 sm:grid-cols-9 gap-2 mb-10">
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(l => (
            <button
              key={l}
              onClick={() => !guessedLetters.includes(l) && setGuessedLetters([...guessedLetters, l])}
              disabled={guessedLetters.includes(l) || isWinner || isLoser}
              className={`h-11 rounded-xl text-xs font-black transition-all border ${
                guessedLetters.includes(l) 
                  ? 'bg-slate-50 text-slate-200 border-transparent scale-95' 
                  : 'bg-white text-slate-600 border-slate-100 hover:border-pink-600 hover:text-pink-600 hover:shadow-md active:scale-95'
              }`}
            > {l} </button>
          ))}
        </div>

        {(isWinner || isLoser) && (
          <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 animate-in fade-in zoom-in duration-300">
            <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-6 ${isWinner ? 'text-emerald-500' : 'text-pink-600'}`}>
              {isWinner ? "Vitória! Você acertou." : `Derrota! A palavra era: ${word}`}
            </p>
            <button onClick={resetGame} className="w-full bg-slate-900 text-white text-[10px] font-black py-5 rounded-2xl uppercase tracking-[0.2em] hover:bg-pink-600 transition-all shadow-xl shadow-pink-600/10">
              Jogar Novamente
            </button>
          </div>
        )}

        {!isWinner && !isLoser && (
          <div className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em]">
            Erros: {incorrectLetters.length} / 6
          </div>
        )}
      </div>
    </div>
  );
}