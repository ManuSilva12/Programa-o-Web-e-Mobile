export default function Exercicio246() {
  return (
    <main style={{ padding: "5vw", maxWidth: "900px", margin: "0 auto" }}>

      <p
        style={{
          textDecoration: "underline",
          fontFamily: "Arial",
          fontSize: "clamp(14px, 2.5vw, 18px)"
        }}
      >
        Este é um exemplo de parágrafo para o exercício da página 246, com os dois links abaixo onde um vai para o Google e o outro para o GitHub.
      </p>

      <br />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px"
        }}
      >
        <a
          href="https://www.google.com/?zx=1764198949876&no_sw_cr=1"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            fontFamily: "Times New Roman"
          }}
        >
          Primeiro Link (google)
        </a>

        <a
          href="https://github.com/ManuSilva12/Programa-o-Web-e-Mobile"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            fontFamily: "Times New Roman"
          }}
        >
          Segundo Link (github)
        </a>
      </div>

    </main>
  );
}