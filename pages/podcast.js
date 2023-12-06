import styles from '../styles/recommended.module.css';

export default function PodCast() {
  return (
    <div>

      {/* Header */}
      <div className={styles.header}>
        <img src='/logomaior.png' alt="Logo" className={styles.logo} />
      </div>
      <h1 className={styles.h1}>Recomendações de Podcasts</h1>
      <div className={styles.content}>

      
        <div className={styles.leftSection}>
          <img src='/microfone.png' alt="microfone" />
        </div>

        {/* Parte central */}
        <div className={styles.centralSection}>
           <p>Dialogando: Combate ao bullying: <a href='https://www.dialogando.com.br/seguranca/ouca-o-podcast-o-combate-ao-cyberbullying/' target="_blank">Ouça o podcast: o combate ao cyberbullying - Dialogando</a></p>
           <p>Chão de escola: <a href='https://pt.player.fm/series/2643503' target="_blank">Chão de escola</a></p>
           <p>Cyberbullying: <a href='https://open.spotify.com/show/7JfXTaZU5gLslSkbOBbfgX' target="_blank">Cyberbullying</a></p>
           <p>Sociologia #15: <a href='https://brasilescola.uol.com.br/podcasts/a-violencia-por-tras-do-cyberbullying.htm' target="_blank">A violência por trás do cyberbullying - Brasil Escola</a></p>
           <p>Convivere+ podcast: <a href='https://www.conviveremais.com.br/categoria-produto/podcasts/' target="_blank">Convivere Mais  »Categorias de produto » Podcasts C+</a></p>
        </div>

        {/* Imagem à direita */}
        <div className={styles.rightSectionPodBook}>
          <img src='/podcastFundo.png' alt="Pod" />
        </div>

      </div>
      <a href='/indicacoes' className={styles.link}>Voltar</a>
    </div>
  );
}