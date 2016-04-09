import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import ballparks from './ballparks';

const rootReducer = combineReducers({
  ballparks,
  router: routerStateReducer
});

export default rootReducer;