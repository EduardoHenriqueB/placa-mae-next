import React, { useState } from 'react';
import styles from '../styles/saibamais.module.css';

export default function Saibamais() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  const images = ['/palestra.png', '/grupo.png', '/criancas.jpg'];

  return (
    <>
    
      <div className={styles.container}>
        <div className={styles.texto1}>
          <div className={styles.titulo}>
            Sobre o PLACAMAE.ORG
          </div>
          <div className={styles.texto}>
            PlacaMãe.Org, é uma empresa de impacto social que busca informação, reflexão (o lado “placa”), sem abrir mão da arte de ser humano, da procura por aquilo que nos conecta reciprocamente, e nos conecta ao planeta e à existência nele (o lado “mãe”).
          </div>
          <div className={styles.texto}>
            Contribuímos para a construção de uma cultura de proteção de dados pessoais e cidadania digital excepcional, oferecendo conteúdo de alta qualidade produzido por nossos colaboradores. Engajamo-nos em atividades como debates, palestras, estudos, pesquisas, projetos de extensão e entrevistas para promover o desenvolvimento crítico e a aplicabilidade social em temas relacionados ao Direito, Tecnologia e Sociedade. Este esforço visa proporcionar uma base sólida para um projeto inovador de placa mãe.
          </div>
        </div>

        <div className={styles.image_wrapper}>
          <img src={images[currentImage]} alt="avatar" className={styles.image} />
          <div className={styles.bolinhasContainer}>
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => handleImageChange(index)}
                className={`${styles.bolinha} ${index === currentImage ? styles.ativa : ''}`}
              ></span>
            ))}
          </div>
        </div>

        <div className={styles.texto2}>
        <div>
          <div className={styles.texto3}>A PlacaMãe.Org_ atua não apenas em pesquisa e extensão em Pernambuco, mas também promove educação digital. Oferecemos cursos, palestras, mentorias e treinamentos, além de intervenções locais, abrangendo famílias, escolas e comunidades.</div>
          <div className={styles.texto3}>Em escolas da região metropolitana do Recife, discutimos temas como "Internet: contexto, limites e responsabilidades", "Cyberbullying" e "Direitos, deveres e internet em sala de aula" para crianças a partir do 5º ano do ensino fundamental. </div>
          <div className={styles.texto3}>Construímos informações acessíveis e de qualidade, acreditando na importância de abranger toda a sociedade da informação.</div>
        </div>
        </div>
      </div>
    </>
  );
}
