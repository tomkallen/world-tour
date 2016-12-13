import React, { Component } from 'react';
import { Continents } from './components/countries';
import { Breadcrumbs } from './components/breadcrumbs';
import { Info } from './components/info';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            geo: [],
            container: {},
            selected: false,
            db: {},
            continentList: []
        }
    }

    componentDidMount() {
        fetch("http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&country=&username=tomkallen&style=full")
            .then(data => data.json())
            .then(data => this.parseDB(data))
            .catch(error => console.log('Error receiving data', error));
    }

    onUpdate = data => this.setState({ container:data });
    // receives selected country from the child component to work with

    parseDB = data => {
        let formattedDB = {};
        data.geonames.forEach(v =>
            formattedDB.hasOwnProperty(v.continentName) ?
                formattedDB[v.continentName].push(v.countryName):
                formattedDB[v.continentName] = []
        );

        let continents = Object.keys(formattedDB).map( key => (
            <div key={ key }>
                <Continents countryList={ formattedDB[key] } continent={ key }/>
            </div>));
        console.log(continents);

        this.setState({
            geo: data.geonames,
            db: formattedDB,
            // continentList: continents
        });
    };

    render() {
        console.log(this.state.continentList);
        return (
            <div className="App">
                <div className="App__header">
                    <div className="App__logo">The World Tour</div>
                    <Breadcrumbs nav={ this.state.container }/>
                </div>
                <div className="continent__list">{ this.state.continentList }</div>
                {/*WTF is wrong with this? ^ */}
                {!this.state.selected &&<Info data={ this.state.geo }/>}
                {/* Show this dandy Info ^^^^ component when nothing is selected*/}
            </div>
        );
    }
}

export default App;