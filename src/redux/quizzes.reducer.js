import { ADD_SELECTED_QUIZZ_TO_STORE } from './quizzes.actions';

const initialState = {
  quizzesList: [
    {
      id: 1,
      title: 'Art',
      img: 'art.jpg',
      url: 'https://opentdb.com/api.php?amount=10&category=25&type=boolean',
    },
    {
      id: 2,
      title: 'Geography',
      img: 'geography.jpg',
      url: 'https://opentdb.com/api.php?amount=10&category=22&type=boolean',
    },
    {
      id: 3,
      title: 'History',
      img: 'history.jpg',
      url: 'https://opentdb.com/api.php?amount=10&category=23&type=boolean',
    },
    {
      id: 4,
      title: 'Mythology',
      img: 'mythology.jpg',
      url: 'https://opentdb.com/api.php?amount=10&category=20&type=boolean',
    },
    {
      id: 5,
      title: 'Sport',
      img: 'sport.webp',
      url: 'https://opentdb.com/api.php?amount=10&category=21&type=boolean',
    },
    {
      id: 6,
      title: 'Video Games',
      img: 'games.jpg',
      url: 'https://opentdb.com/api.php?amount=10&category=15&type=boolean',
    },
  ],
  selectedQuizzData: null,
};

const quizzesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SELECTED_QUIZZ_TO_STORE:
      return {
        ...state,
        selectedQuizzData: action.payload.quizzData,
      };
    default:
      return state;
  }
};

export default quizzesReducer;
