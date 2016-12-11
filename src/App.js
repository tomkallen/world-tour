import React, { Component } from 'react';
import { Countries } from './components/countries';
import { Breadcrumbs } from './components/breadcrumbs';
import { Info } from './components/info';

import './App.css';

class App extends Component {
    componentDidMount() {
        fetch("http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&country=&username=tomkallen&style=full")
            .then(response => response.json())
            .then(data => this.setState({ geo: data.geonames }))
            .catch(error => console.log('Error receiving data', error));
    }

    constructor() {
        super();
        this.state = {
            geo: [],
            container: {},
            selected: false
        }
    }

    onUpdate = data => this.setState({ container:data });
    // receives selected country from the child component to work with

    render() {
        return (
            <div className="App">
                <div className="App__header">
                    <div className="App__logo">The World Tour</div>
                    <Breadcrumbs nav={ this.state.container }/>
                </div>
                    <Countries
                        onUpdate={ this.onUpdate }
                        data={ this.state.geo }/>
                {!this.state.selected &&<Info data={ this.state.geo }/>}
                {/* Show this dandy Info ^^^^ component when nothing is selected*/}
            </div>

        );
    }
}

export default App;