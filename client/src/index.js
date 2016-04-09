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

//const store = compose(
//  applyMiddleware(thunk),
//  reduxReactRouter({
//    routes
//  })//,
  //applyMiddleware(createLogger()),
  //DevTools.instrument()
//)(createStore);

class Root extends Component {
  render() {
    //const { store } = this.props;

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
)

//class App extends React.Component {
//  render () {
//    return (
//      <div>
//        <Card
//          front={<ParkCardFront
//            title="AT&T Park"
//            imageSrc="http://en.wikipedia.org/wiki/Special:FilePath/AT&T_Park_Logo.png?width=300"/>}
//          back={<ParkCardFront
//            title="AT&T Park"
//            imageSrc="http://en.wikipedia.org/wiki/Special:FilePath/AT&T_Park_Logo.png?width=300"/>}>
//        </Card>
//        <Card
//          front={<ParkCardFront
//            title="Citizen Bank Park"
//            imageSrc="http://commons.wikimedia.org/wiki/Special:FilePath/Fieldatthepark.jpg?width=300"/>}
//          back={<ParkCardFront
//            title="AT&T Park"
//            imageSrc="http://en.wikipedia.org/wiki/Special:FilePath/AT&T_Park_Logo.png?width=300"/>}>
//          >
//        </Card>
//        <p> Hello Carmine!</p>
//      </div>);
//  }
//}
//
//render(<App/>, document.getElementById('app'));
//
if (module.hot) {
  module.hot.accept();
}
