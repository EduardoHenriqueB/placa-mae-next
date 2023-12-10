import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/certificado.module.css';

const Certificado = () => {
  const router = useRouter();

  const handleVoltarClick = () => {
    router.push('/quizStart');
  };

  return (
    <div className={styles.certificadoContainer}>
      <h1 className={styles.conclusao}>Parabéns! 🎉

Você avançou no entendimento do Cyberbullying. Sua dedicação é digna de reconhecimento. Continue promovendo um ambiente online seguro. Seu compromisso faz a diferença!

Continue aprendendo, cresça e inspire outros. Juntos, construímos uma comunidade virtual melhor.

Obrigado por fazer parte dessa jornada!</h1>
      <div className={styles.certificadoImage}>
        <img 
          src="/certificado.png" 
          alt="Certificado"
          className={styles.imagem}
        />
      </div>
      <button className={styles.voltarButton} onClick={handleVoltarClick}>
        Voltar para Início
      </button>
    </div>
  );
};

export default Certificado;
