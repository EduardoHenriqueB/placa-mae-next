import React from 'react';

const QuizCounter = ({ currentQuestion, totalQuestions }) => {
  return (
    <div className="quiz-counter">
      Question {currentQuestion + 1} / {totalQuestions}
    </div>
  );
};

export default QuizCounter;
