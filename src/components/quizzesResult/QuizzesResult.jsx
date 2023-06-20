import React from 'react';
import { Link } from 'react-router-dom';

import './quizzesResult.scss';

function QuizzesResult({ currentGameResult }) {
  const { category, time, scores } = currentGameResult;
  return (
    currentGameResult && (
      <section className="result">
        <h2 className="result__scores">
          <span>Correct answers:</span> {scores}
        </h2>
        <p className="result__time">
          <span>Time:</span> {time}
        </p>
        <p className="result__category">
          <span>Category:</span> {category}
        </p>
        <div className="result__btn-wrap">
          <Link className="result__btn" to="/">
            Back to List
          </Link>
          <Link className="result__btn" to="/statistic">
            Go to Statistic
          </Link>
        </div>
      </section>
    )
  );
}

export default QuizzesResult;
