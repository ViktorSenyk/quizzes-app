import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import quizzesReducer from './quizzes.reducer';

const appReducer = combineReducers({
  quizzes: quizzesReducer,
});

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
