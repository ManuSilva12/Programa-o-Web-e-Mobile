export default function Exercicio210() {
  return (
    <main
      style={{
        backgroundImage: "url('/baixados.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "5vw"
      }}
    >
      <h1
        style={{
          backgroundColor: "red",
          border: "2px solid green",
          padding: "10px",
          color: "white",
          width: "fit-content",
          maxWidth: "100%",
          fontSize: "clamp(20px, 4vw, 32px)"
        }}
      >
        Primeiro exercício de CSS
      </h1>
    </main>
  );
}