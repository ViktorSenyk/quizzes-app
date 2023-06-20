import { fetchSelectedQuizz } from '../gateways/quizzes';

export const ADD_SELECTED_QUIZZ_TO_STORE = 'QUIZZES/ADD_SELECTED_QUIZZ_TO_STORE';
export const SET_CURRENT_GAME_RESULT = 'QUIZZES/SET_CURRENT_GAME_RESULT';
export const SET_STATISTIC_DATA = 'QUIZZES/SET_STATISTIC_DATA';

const addSelectedQuizzToStore = quizzData => ({
  type: ADD_SELECTED_QUIZZ_TO_STORE,
  payload: {
    quizzData,
  },
});

export const fetchSelectedQuizzData = url => dispatch => {
  fetchSelectedQuizz(url).then(quizzData => dispatch(addSelectedQuizzToStore(quizzData.results)));
};

export const setCurrentGameResult = result => ({
  type: SET_CURRENT_GAME_RESULT,
  payload: {
    result,
  },
});

export const setStatisticData = result => ({
  type: SET_STATISTIC_DATA,
  payload: {
    result,
  },
});
