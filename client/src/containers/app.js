import React, { Component } from 'react';
import Cards from './cards';
import Header from './header';
import Search from './search';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <Search />
          <Cards />
        </div>
      </div>);
  }
}

export default App;
