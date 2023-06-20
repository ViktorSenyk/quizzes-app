import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as selectors from './redux/quizzes.selectors';
import {
  fetchSelectedQuizzData,
  setCurrentGameResult,
  setStatisticData,
} from './redux/quizzes.actions';

import Header from './components/header/Header';
import QuizzesList from './components/quizzesList/QuizzesList';
import QuizzesGame from './components/quizzesGame/QuizzesGame';
import QuizzesResult from './components/quizzesResult/QuizzesResult';
import QuizzesStatistic from './components/quizzesStatistic/QuizzesStatistic';
import Footer from './components/footer/Footer';

function App({
  quizzesList,
  fetchSelectedQuizzData,
  selectedQuizzData,
  currentGameResult,
  setCurrentGameResult,
  statisticData,
  setStatisticData,
}) {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <QuizzesList
                quizzesList={quizzesList}
                fetchSelectedQuizzData={fetchSelectedQuizzData}
              />
            }
          />
          <Route
            path="/game"
            element={
              <QuizzesGame
                selectedQuizzData={selectedQuizzData}
                setCurrentGameResult={setCurrentGameResult}
                setStatisticData={setStatisticData}
              />
            }
          />
          <Route path="/result" element={<QuizzesResult currentGameResult={currentGameResult} />} />
          <Route path="/statistic" element={<QuizzesStatistic statisticData={statisticData} />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

const mapState = state => ({
  quizzesList: selectors.quizzesListSelector(state),
  selectedQuizzData: selectors.selectedQuizzDataSelector(state),
  currentGameResult: selectors.currentGameResultSelector(state),
  statisticData: selectors.statisticDataSelector(state),
});

const mapDispatch = {
  fetchSelectedQuizzData,
  setCurrentGameResult,
  setStatisticData,
};

export default connect(mapState, mapDispatch)(App);
