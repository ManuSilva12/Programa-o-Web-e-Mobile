"use client";
import { useState, useEffect } from "react";
import { DesenhoForca } from "./desenho-forca";

const WORDS = ["ALGORITMO", "ESTRUTURA", "VARIAVEL", "COMPILADOR", "DATABASE", "INTERFACE", "PROGRAMA", "LOGICA"];

export default function JogoForca() {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const incorrectLetters = guessedLetters.filter(l => !word.includes(l));
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = word !== "" && word.split("").every(l => guessedLetters.includes(l));

  useEffect(() => { resetGame(); }, []);

  const resetGame = () => {
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    setGuessedLetters([]);
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
      <DesenhoForca numberOfGuesses={incorrectLetters.length} />
      <div className="flex justify-center gap-1 mb-6 flex-wrap">
        {word.split("").map((l, i) => (
          <span key={i} className="border-b-2 border-pink-200 w-5 text-lg font-medium text-slate-700">
            {guessedLetters.includes(l) || isLoser ? l : ""}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-6 gap-1 mb-4">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(l => (
          <button
            key={l}
            onClick={() => !guessedLetters.includes(l) && setGuessedLetters([...guessedLetters, l])}
            disabled={guessedLetters.includes(l) || isWinner || isLoser}
            className={`p-1.5 rounded text-[10px] font-bold transition ${
              guessedLetters.includes(l) ? 'bg-slate-50 text-slate-300' : 'bg-pink-50 text-pink-600 hover:bg-pink-100'
            }`}
          > {l} </button>
        ))}
      </div>
      {(isWinner || isLoser) && (
        <button onClick={resetGame} className="w-full bg-slate-900 text-white text-[10px] font-bold py-2 rounded uppercase tracking-widest">Jogar Novamente</button>
      )}
    </div>
  );
}