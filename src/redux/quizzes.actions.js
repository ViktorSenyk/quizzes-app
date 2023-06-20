import { fetchSelectedQuizz } from '../gateways/quizzes';

export const ADD_SELECTED_QUIZZ_TO_STORE = 'QUIZZES/ADD_SELECTED_QUIZZ_TO_STORE';

// export const SET_IS_PRODUCTS_DETAILS_ACTIVE =
//   'SHOP/SET_IS_PRODUCTS_DETAILS_ACTIVE';
// export const SET_IS_PRODUCT_CREATED_WINDOW_ACTIVE =
//   'SHOP/SET_IS_PRODUCT_CREATED_WINDOW_ACTIVE';
// export const SET_CHOSEN_PRODUCT_ID = 'SHOP/SET_CHOSEN_PRODUCT_ID';

const addSelectedQuizzToStore = quizzData => ({
  type: ADD_SELECTED_QUIZZ_TO_STORE,
  payload: {
    quizzData,
  },
});

export const fetchSelectedQuizzData = url => dispatch => {
  fetchSelectedQuizz(url).then(quizzData => dispatch(addSelectedQuizzToStore(quizzData.results)));
};
