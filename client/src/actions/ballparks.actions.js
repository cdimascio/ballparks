import * as types from './action.types';

const apiOptions = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
const apiRoot = '/api/v1/baseball/';

export function fetchBallparks() {
  return dispatch => {
    dispatch(requestBallparks());
    fetchBallparksFromServer()
      .then(r => r.json())
      .then(r => dispatch(receiveBallparks(r)))
      .catch(e => alert(e));
  };
}

function fetchBallparksFromServer() {
  return fetch(`${apiRoot}ballparks`, apiOptions);
}

function requestBallparks() {
  return {
    type: types.BALLPARKS_REQUEST,
    requestedAt: Date.now()
  };
}

function receiveBallparks(ballparks) {
  console.log(ballparks);
  return {
    type: types.BALLPARKS_RECEIVE,
    requestedAt: Date.now(),
    ballparks
  };
}