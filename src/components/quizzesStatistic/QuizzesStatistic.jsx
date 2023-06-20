import React from 'react';

import './quizzesStatistic.scss';

function QuizzesStatistic({ statisticData }) {
  return (
    <section className="statistic">
      <h2 className="statistic__title">Statistic</h2>
      {statisticData.length === 0 ? (
        <p className="statistic__empty">Empty...</p>
      ) : (
        <ul className="statistic__list">
          <li className="statistic__list-item">
            <p>#</p>
            <p>CATEGORY</p>
            <p>TIME</p>
            <p>SCORES</p>
          </li>
          {statisticData.map(({ id, category, time, scores }, index) => (
            <li className="statistic__list-item" key={id}>
              <p>{index + 1}</p>
              <p>{category}</p>
              <p>{time}</p>
              <p>{scores}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default QuizzesStatistic;
