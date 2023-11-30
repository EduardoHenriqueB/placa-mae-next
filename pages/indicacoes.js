import styles from '../styles/recommended.module.css';

export default function Indicacoes() {
  return (
    <div>

      {/* Header */}
      <div className={styles.header}>
        <img src='/logomaior.png' alt="Logo" className={styles.logo} />
      </div>

      <h3>Recomendações</h3>
      
      {/* Conteúdo */}
      <div className={styles.content}>

        {/* Imagem e link à esquerda */}
        <div className={styles.leftSection}>
          <img src='/microfone.png' alt="microfone" />
          <a href='/podcast'>Podcast</a>
        </div>

        {/* Parte central */}
        <div className={styles.centralSection}>
          <img src='/avatarBackground.png' alt="avatar" />
          <a href='/podcasts'>Podcast</a>
        </div>

        {/* Imagem e link à direita */}
        <div className={styles.rightSection}>
          <img src='/livro.png' alt="Livro" />
          <a href='/livros'>Livros</a>
        </div>
      </div>

    </div>
  );
}