import React, { Component } from 'react';
import './App.css';
import { Countries } from './components/countries';
import { Breadcrumbs } from './components/breadcrumbs';  

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">          
          <h1>World Tour React exemplar</h1>
        </div>
        <Breadcrumbs /> 
        <Countries heading={"the list"}/>     
      </div>
    );
  }
}

export default App;
