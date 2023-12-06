export default function Home() {
  return (
    <>
      <div className="image-container">
        <div className="logo-container">
          <img
            className="logo"
            src="/logo_home.png"
            alt="logo X"
          />
        </div>
        <div className="images-row">
          <img
            className="image"
            src="/educacao.png"
            alt="logo placa mae"
          />
        </div>
      </div>
      <style jsx>{`
        .image-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start; /* Ajuste para alinhar no topo */
          height: 100vh; /* Mantive a altura como 100% da tela */
        }

        .logo {
          width: 20vw; /* Ajuste o tamanho da logo conforme necessário */
          animation: slideUp 0.5s ease-in-out; /* Adicionada animação de slideUp ao logo_home */
        }

        .images-row {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-top: 1vh; /* Reduzi a margem no topo */
        }

        .logo-container {
          margin-top: -2vh;
          margin-bottom: 0vh;
        }

        .image {
          width: 60%; /* Ajuste a largura conforme necessário */
          max-height: 100%;
          border-radius: 10px;
          border: 5px solid #fff; /* Adicionado uma borda sólida branca de 5 pixels */
          animation: slideUp 0.5s ease-in-out; 
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
