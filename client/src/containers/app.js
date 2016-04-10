import React, { Component } from 'react';
import Cards from './cards';
import Header from './header';
import Search from './search';

//<Search />
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <Cards />
        </div>
      </div>);
  }
}

export default App;
