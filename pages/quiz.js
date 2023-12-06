import React, { useState } from 'react';
import styles from '../styles/quiz.module.css';

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Opção A', 'Opção B', 'Opção C', 'Opção D'];

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className={styles.quiz_container}>
      <h2 className={styles.question_text}>Qual é a sua resposta?</h2>
      <div className={styles.options_container}>
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
