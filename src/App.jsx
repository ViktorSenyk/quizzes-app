import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { quizzesListSelector, selectedQuiezzDataSelector } from './redux/quizzes.selectors';
import { fetchSelectedQuizzData } from './redux/quizzes.actions';

import Header from './components/header/Header';
import QuizzesList from './components/quizzesList/QuizzesList';
import QuizzesGame from './components/quizzesGame/QuizzesGame';
import QuizzesResult from './components/quizzesResult/QuizzesResult';
import QuizzesStatistic from './components/quizzesStatistic/QuizzesStatistic';
import Footer from './components/footer/Footer';

function App({ quizzesList, fetchSelectedQuizzData, selectedQuiezzData }) {
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
          <Route path="/game" element={<QuizzesGame selectedQuiezzData={selectedQuiezzData} />} />
          <Route path="/result" element={<QuizzesResult />} />
          <Route path="/statistic" element={<QuizzesStatistic />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

const mapState = state => ({
  quizzesList: quizzesListSelector(state),
  selectedQuiezzData: selectedQuiezzDataSelector(state),
});

const mapDispatch = {
  fetchSelectedQuizzData,
};

export default connect(mapState, mapDispatch)(App);
