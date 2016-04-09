import * as types from '../actions/action.types';
const initialState = {
  ballparks: [],
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.BALLPARKS_REQUEST:
      return { isFetching: true };
    case types.BALLPARKS_RECEIVE:
      return { isFetching: false, ballparks: action.ballparks };
    default:
      return state;
  }
}