import React, { Component } from 'react';
import Cards from './cards';
import Header from './header';
import Search from './search';
import dps from 'dbpedia-sparql-client';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Cards />
        </div>
      </div>);
  }
}

dps
  .client()
  .query('SELECT DISTINCT ?Concept WHERE {[] a ?Concept} LIMIT 10')
  .asJson()
  .then(r => console.log(r))
  .catch(e => console.log(e));

export default App;
