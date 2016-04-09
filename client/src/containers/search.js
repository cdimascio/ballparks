import React, { Component } from 'react';
import Cards from './cards';

const App = () => (
  <div>
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Fenway"/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button">Go!</button>
        </span>
    </div>
  </div>);

export default App;
