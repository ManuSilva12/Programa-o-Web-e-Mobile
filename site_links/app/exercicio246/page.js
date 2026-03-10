export default function Exercicio246() {
  return (
    <main style={{ padding: "40px" }}>

      <p
        style={{
          textDecoration: "underline",
          fontFamily: "Arial"
        }}
      >
        Este é um exemplo de parágrafo para o exercício da página 246, com os dois links abaixo onde um vai para o Google e o outro para o GitHub.
      </p>

      <br />

      <a
        href="https://www.google.com/?zx=1764198949876&no_sw_cr=1"
        style={{
          textDecoration: "none",
          fontWeight: "bold",
          fontFamily: "Times New Roman",
          marginRight: "10px"
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

    </main>
  );
}