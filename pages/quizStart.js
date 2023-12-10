import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/quizStart.module.css';

const QuizStart = () => {

  const router = useRouter();

  const handleVoltarClick = () => {
    router.push('/quiz');
  };

  return (
    <div className={styles.seuContainer}>

    <h1 className={styles.titulo}>
    Bem-vindo ao Teste Lógico de Cyberbullying!
    </h1>
    <div className={styles.texto}>
    <p>
          Antes de começarmos, vamos explorar seus conhecimentos sobre cyberbullying.
          Este teste destina-se a avaliar sua compreensão sobre práticas online seguras
          e como lidar com situações de cyberbullying. Responda com honestidade e reflexão.
    </p>
    <p>
          Lembre-se, o objetivo é promover a conscientização e a prevenção do cyberbullying,
          criando um ambiente online mais seguro para todos.
    </p>
    </div>
      <button className={styles.voltarButton} onClick={handleVoltarClick}>
        Iniciar teste
      </button>
      <div className={styles.image}>
          <img src='/question.png' alt="Avatar flutuante lendo um livro" />
        </div>
    </div>
  );
};

export default QuizStart;
