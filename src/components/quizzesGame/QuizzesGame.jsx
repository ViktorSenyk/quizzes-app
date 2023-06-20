import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import './quizzesGame.scss';

function QuizzesGame({ selectedQuiezzData }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentGameDuration, setCurrentGameDuration] = useState('00:00');

  const navigator = useNavigate();
  const startTime = moment();

  useEffect(() => {
    const timerId = setInterval(() => {
      const currentTime = moment();
      const duration = moment.duration(currentTime.diff(startTime));
      const formattedTime = moment.utc(duration.asMilliseconds()).format('mm:ss');
      setCurrentGameDuration(formattedTime);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const selectedOptionChecker = selectedOption => {
    const { correct_answer } = selectedQuiezzData[currentQuestionIndex];
    console.log(correct_answer === selectedOption);
    currentQuestionIndex < 9
      ? setCurrentQuestionIndex(currentQuestionIndex + 1)
      : navigator('/result');
  };

  return (
    selectedQuiezzData && (
      <section className="quizz-game">
        <span className="quizz-game__extra-info">{`№ ${currentQuestionIndex + 1}/10`}</span>
        <span className="quizz-game__extra-info">{currentGameDuration}</span>
        <h6 className="quizz-game__question">
          {selectedQuiezzData[currentQuestionIndex].question}
        </h6>
        <div className="quizz-game__btn-wrapper">
          <button
            className="quizz-game__btn quizz-game__btn_true"
            onClick={() => selectedOptionChecker('True')}
          ></button>
          <button
            className="quizz-game__btn quizz-game__btn_false"
            onClick={() => selectedOptionChecker('False')}
          ></button>
        </div>
      </section>
    )
  );
}

export default QuizzesGame;
