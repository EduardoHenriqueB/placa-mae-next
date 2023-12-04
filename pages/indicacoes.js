import styles from '../styles/recommended.module.css';

export default function Indicacoes() {
  return (
    <div>

      {/* Header */}
      <div className={styles.header}>
        <img src='/logomaior.png' alt="Logo" className={styles.logo} />
      </div>

      <h1 className={styles.h1}>Recomendações</h1>
      
      {/* Conteúdo */}
      <div className={styles.content}>

     
        <div className={styles.leftSection}>
          <img src='/microfone.png' alt="microfone" />
          <a href='/podcast'>Podcast</a>
        </div>

        {/* Parte central */}
        <div className={styles.centralSection}>
          <img src='/avatarBackground.png' alt="avatar" />
          <a href='/podcasts'>Podcast</a>
        </div>

  
        <div className={styles.rightSection}>
          <img src='/livro.png' alt="Livro" />
          <a href='/livros'>Livros</a>
        </div>
      </div>

    </div>
  );
}