import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello!</p>;
  }
}

render(<App/>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
