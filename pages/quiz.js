// pages/quiz.js
import React, { useState } from 'react';
import styles from '../styles/quiz.module.css';

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const question = 'O que é cyberbullying?';
  const options = [
    'É manipular psicologicamente pessoas para executar ações na Internet.',
    'É expor publicamente dados pessoais de usuários da Internet.',
    'É enganar pessoas na Internet e obter informações confidenciais.',
    'É a violência intencional repetitiva praticada contra alguém, através da internet ou de outras tecnologias relacionadas ao mundo virtual.',
  ];
  const correctAnswerIndex = 3; // Defina o índice da resposta correta aqui

  const handleOptionClick = (index) => {
    if (!isConfirmed) {
      setSelectedOption(index);
    }
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    setIsCorrect(selectedOption === correctAnswerIndex);
  };

  return (
    <div className={styles.quizContainer}>
      <h1 className={styles.pergunta}>{question}</h1>
      <div className={styles.optionsContainer}>
        {options.map((option, index) => (
          <div
            key={index}
            className={`${styles.option} ${
              selectedOption === index ? styles.selected : ''
            } ${isConfirmed && index === correctAnswerIndex ? styles.correct : ''} ${
              isConfirmed && index === selectedOption && !isCorrect ? styles.incorrect : ''
            }`}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </div>
        ))}
      </div>
      <button
        className={styles.confirmButton}
        onClick={handleConfirm}
        disabled={isConfirmed}
      >
        Confirmar
      </button>
    </div>
  );
};

export default Quiz;
