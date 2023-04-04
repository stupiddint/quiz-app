import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import quizData from '../data/quizData.json';

const myStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRetakeButtonClick = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div style={myStyle}>
      {showScore ? (
        <div>
          <h1>Your score: {score}</h1>
          <Button primary onClick={handleRetakeButtonClick}>
            Retake Quiz
          </Button>
        </div>
      ) : (
        <div>
          <h1>Question {currentQuestionIndex + 1}</h1>
          <h2>{quizData[currentQuestionIndex].question}</h2>
          {quizData[currentQuestionIndex].answers.map((answer) => (
            <Button
              key={answer.text}
              onClick={() => handleAnswerButtonClick(answer.isCorrect)}
            >
              {answer.text}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
