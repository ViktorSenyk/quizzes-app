import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import './quizzesGame.scss';

function QuizzesGame({ selectedQuizzData, setCurrentGameResult, setStatisticData }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentGameDuration, setCurrentGameDuration] = useState('00:00');
  const [currentGameScores, setCurrentGameScores] = useState([]);

  const navigator = useNavigate();
  const startTime = moment();

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const quizzHandle = selectedOption => {
    const { correct_answer } = selectedQuizzData[currentQuestionIndex];
    const newValues = [...currentGameScores, correct_answer === selectedOption];
    setCurrentGameScores(newValues);
    if (currentQuestionIndex < selectedQuizzData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const result = {
        id: Math.random(),
        category: selectedQuizzData[0].category,
        time: currentGameDuration,
        scores: `${newValues.filter(score => score === true).length}/${newValues.length}`,
      };
      setCurrentGameResult(result);
      setStatisticData(result);
      navigator('/result');
    }
  };

  const textDecoder = () => {
    const encodedText = selectedQuizzData[currentQuestionIndex].question;
    const decodedText = document.createElement('textarea');
    decodedText.innerHTML = encodedText;
    const fixedText = decodedText.value;
    return fixedText;
  };

  return (
    selectedQuizzData && (
      <section className="quizz-game">
        <h2 className="quizz-game__category">
          Category: <span>{selectedQuizzData[0].category}</span>
        </h2>
        <p className="quizz-game__extra-info">
          №: <span>{`${currentQuestionIndex + 1}/10`}</span>
        </p>
        <p className="quizz-game__extra-info">
          Time: <span>{currentGameDuration}</span>
        </p>
        <h6 className="quizz-game__question">{textDecoder()}</h6>
        <div className="quizz-game__btn-wrapper">
          <button
            className="quizz-game__btn quizz-game__btn_true"
            onClick={() => quizzHandle('True')}
          ></button>
          <button
            className="quizz-game__btn quizz-game__btn_false"
            onClick={() => quizzHandle('False')}
          ></button>
        </div>
      </section>
    )
  );
}

export default QuizzesGame;
