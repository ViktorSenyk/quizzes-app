import {
  ADD_SELECTED_QUIZZ_TO_STORE,
  SET_CURRENT_GAME_RESULT,
  SET_STATISTIC_DATA,
} from './quizzes.actions';

const initialState = {
  quizzesList: [
    {
      id: 1,
      title: 'Films',
      img: 'films.jpg',
      url: 'https://opentdb.com/api.php?amount=10&category=11&type=boolean',
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
    {
      id: 7,
      title: 'Music',
      img: 'music.jpg',
      url: 'https://opentdb.com/api.php?amount=10&category=12&type=boolean',
    },
    {
      id: 8,
      title: 'Television',
      img: 'television.jpg',
      url: 'https://opentdb.com/api.php?amount=10&category=14&type=boolean',
    },
    {
      id: 9,
      title: 'Science & Nature',
      img: 'nature.jpg',
      url: 'https://opentdb.com/api.php?amount=10&category=17&type=boolean',
    },
    {
      id: 10,
      title: 'Computers',
      img: 'computers.jpg',
      url: 'https://opentdb.com/api.php?amount=10&category=18&type=boolean',
    },
  ],
  selectedQuizzData: null,
  currentGameResult: 0,
  statisticData: [],
};

const quizzesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SELECTED_QUIZZ_TO_STORE:
      return {
        ...state,
        selectedQuizzData: action.payload.quizzData,
      };
    case SET_CURRENT_GAME_RESULT:
      return {
        ...state,
        currentGameResult: action.payload.result,
      };
    case SET_STATISTIC_DATA:
      return {
        ...state,
        statisticData: [...state.statisticData, action.payload.result],
      };
    default:
      return state;
  }
};

export default quizzesReducer;
