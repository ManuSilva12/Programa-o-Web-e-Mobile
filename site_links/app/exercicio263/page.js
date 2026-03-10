export default function Exercicio263() {
  return (
    <main style={{ padding: "40px" }}>

      <h1 style={{ textAlign: "center" }}>Passo Certo Calçados</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          justifyContent: "center",
          overflowX: "auto"
        }}
      >

        <div style={{ background: "green", width: "180px", padding: "20px", textAlign: "center", color: "white", flexShrink: 0 }}>
          <img
            src="/Adidas samba.jpg"
            style={{ width: "120px", height: "120px", objectFit: "cover", display: "block", margin: "0 auto" }}
          />
          <p>Tênis Feminino</p>
          <p>R$ 799,99</p>
        </div>

        <div style={{ background: "green", width: "180px", padding: "20px", textAlign: "center", color: "white", flexShrink: 0 }}>
          <img
            src="/baixados (1).jpg"
            style={{ width: "120px", height: "120px", objectFit: "cover", display: "block", margin: "0 auto" }}
          />
          <p>Sandália Feminina</p>
          <p>R$ 299,90</p>
        </div>

        <div style={{ background: "green", width: "180px", padding: "20px", textAlign: "center", color: "white", flexShrink: 0 }}>
          <img
            src="/tenisinfantil.jpg"
            style={{ width: "120px", height: "120px", objectFit: "cover", display: "block", margin: "0 auto" }}
          />
          <p>Tênis Infantil</p>
          <p>R$ 190,90</p>
        </div>

        <div style={{ background: "green", width: "180px", padding: "20px", textAlign: "center", color: "white", flexShrink: 0 }}>
          <img
            src="/tenismasculino.jpg"
            style={{ width: "120px", height: "120px", objectFit: "cover", display: "block", margin: "0 auto" }}
          />
          <p>Tênis Masculino</p>
          <p>R$ 249,90</p>
        </div>

        <div style={{ background: "green", width: "180px", padding: "20px", textAlign: "center", color: "white", flexShrink: 0 }}>
          <img
            src="/sandaliainfantil.jpg"
            style={{ width: "120px", height: "120px", objectFit: "cover", display: "block", margin: "0 auto" }}
          />
          <p>Sandália Infantil</p>
          <p>R$ 179</p>
        </div>

      </div>

      <footer
        style={{
          background: "gray",
          padding: "20px",
          marginTop: "40px",
          textAlign: "center"
        }}
      >
        Passo Certo Calçados
      </footer>

    </main>
  );
}