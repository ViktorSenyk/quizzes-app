import React from 'react';
import { Link } from 'react-router-dom';

import './quizzesList.scss';

function QuizzesList({ quizzesList, fetchSelectedQuizzData }) {
  return (
    <section className="quizzes">
      <ul className="quizzes__list">
        {quizzesList.map(({ id, title, img, url }) => (
          <li
            key={id}
            className="quizzes__item quizz-card"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/quizzesList/${img})`,
            }}
          >
            <h6 className="quizz-card__title">{title}</h6>
            <Link
              to="/game"
              className="quizz-card__start-btn"
              onClick={() => fetchSelectedQuizzData(url)}
            >
              Start game ?
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default QuizzesList;
