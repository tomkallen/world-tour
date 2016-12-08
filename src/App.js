import React, { Component } from 'react';
import './App.css';
import { Countries } from './components/countries';
import { Breadcrumbs } from './components/breadcrumbs';  

class App extends Component {
    componentDidMount() {
        fetch("http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&country=&username=tomkallen&style=full")
          .then(response => response.json())
          .then(data => {this.setState({geo:data.geonames}) })
          .then(console.log(this.state.geo));
  }  
  constructor(){
    super();
    this.cache = null
    this.state ={
      nav: {
        country: "Russia",
        state: "North-West",
        city: "Saint-Petersburg"
      },
      geo: null     
    }
   
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">          
          <h1>The World Tour</h1>
        </div>
        <Breadcrumbs nav={ this.state.nav }/> 
        <Countries data={this.state.geo}/>             
      </div>
    );
  }
}

export default App;
