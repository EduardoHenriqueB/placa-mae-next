import React from 'react';

const QuizQuestion = ({ question, options, selectedAnswer, handleAnswer }) => {
  return (
    <div className="quiz-question-container">
      <h2>{question}</h2>
      <div className="quiz-options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`quiz-option ${selectedAnswer === index ? 'selected' : ''}`}
            onClick={() => handleAnswer(index)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
