import React, { Component } from 'react';
import {render} from 'react-dom';
import Card from './components/card/card';
import ParkCardFront from './components/park.card/front';
import { Provider } from 'react-redux';
import configure from './store/configure';
import reducers from './reducers';

import { ReduxRouter } from 'redux-router';

const initialState = undefined; // rehydrate state
let store = configure(initialState);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="h-100">
          <ReduxRouter />
        </div>
      </Provider>
    );
  }
}

render(
  <Root store={store} />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
