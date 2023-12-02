import styles from '../styles/recommended.module.css';

export default function Indicacoes() {
  return (
    <div>

      {/* Header */}
      <div className={styles.header}>
        Recomendações
      </div>

      {/* Título */}

      
      {/* Conteúdo */}
      <div className={styles.content}>

        {/* Imagem e link à esquerda */}
        <div className={`${styles.imageSection} ${styles.leftSection}`}>
          <img src='/microfone.png' alt="microfone" className={styles.smallImage} />
          <p className={styles.header}>Podcast</p>
        </div>
       
        {/* Parte central */}
        <div className={`${styles.imageSection} ${styles.centralSection} ${styles.centerBottom}`}>
          <img src='/boneca.png' alt="avatar" className={styles.largeImage} />
        </div>

        {/* Imagem e link à direita */}
        <div className={`${styles.imageSection} ${styles.rightSection}`}>
          <img src='/livro.png' alt="Livro" className={styles.smallImage} />
          <p className={styles.header}>Livros</p>
        </div>
      </div>

    </div>
  );
}
