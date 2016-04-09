import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import routes from '../routes';
import { createHistory } from 'history';
import { reduxReactRouter } from 'redux-router';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({
    routes,
    createHistory,
  })
)(createStore);

export default function configure(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}