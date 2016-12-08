import React, { Component } from 'react';
import './App.css';
import { Countries } from './components/countries';
import { Breadcrumbs } from './components/breadcrumbs';  

class App extends Component {  
  constructor(){
    super();
    this.state ={
      nav: {
        country: "Russia",
        state: "North-West",
        city: "Saint-Petersburg"
      }     
    }    
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">          
          <h1>The World Tour</h1>
        </div>
        <Breadcrumbs nav={ this.state.nav }/> 
        <Countries heading={ "the list"}/>     
      </div>
    );
  }
}

export default App;
