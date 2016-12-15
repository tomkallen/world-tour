import React, { Component } from 'react';
import { Continents } from './components/countries';
import { Breadcrumbs } from './components/breadcrumbs';
import { Info } from './components/info';
import { CountryInfo, ContinentInfo } from './components/visual';
import './App.css';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            geo: [], // raw database
            continent: '', // piped data for Breadcrumbs and Info
            country: '', // piped data for Breadcrumbs and Info
            db: {} // formatted DB
        }
    }

    // =============================================================
    // This is where we are fetching data from. As we are going
    // to perform different data manipulations we parse and rebuild
    // the database to another format and store it in a different state
    // `geo` is a raw geobase, `db` is a parsed database.
    componentDidMount() {
        fetch("http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&country=&username=tomkallen&style=full")
            .then(data => data.json())
            .then(data => this.parseDB(data))
            .catch(error => console.log('Error receiving data', error));
    }
    // =============================================================

    parseDB = data => {
        // Rebuilding database as mentioned above to continent-based format.

        let formattedDB = {};
        data.geonames.forEach(v =>
            formattedDB.hasOwnProperty(v.continentName) ?
                formattedDB[v.continentName].push(v.countryName):
                formattedDB[v.continentName] = []
        );
        this.setState({
            geo: data.geonames,  // data.geonames is an object containing all the data
            db: formattedDB
        });
    };

    // =============================================================
    // We do not use Redux so dataAccumulator is an application-wide
    // state store. Here we operate the data piped up from children
    // See sendToParent methods in respective child Components.
    dataAccumulator = data => {
        this.setState({
            continent: data.continent,
            country: data.country
        })
    };
    // =============================================================

    render() {

        // =========================================================
        // This is the switch logic based on application state
        // stored in dataAccumulator.
        // Info -> ContinentInfo -> CountryInfo is a tree-like structure
        let infoComponent = !this.state.continent ?
            <Info data={ this.state.geo } db={ this.state.db }/> :
            !this.state.country ?
                <ContinentInfo
                    db={ this.state.db }
                    data={ this.state.geo }
                    continent={ this.state.continent }
                    sendToParent={ this.dataAccumulator }/> :
                <CountryInfo
                    db={ this.state.db }
                    data={ this.state.geo }
                    country={ this.state.country }
                    continent={ this.state.continent }
                    sendToParent={ this.dataAccumulator }/>;
        // =========================================================

        return (
            <div className="App">
                <div className="App__header">
                    <div className="App__logo">The World Tour</div>
                    <Breadcrumbs
                        country={ this.state.country }
                        continent={ this.state.continent }/>
                </div>
                <div className="left__pad continent__list">
                    <Continents
                        db={ this.state.db }
                        data={ this.state.geo }
                        sendToParent={ this.dataAccumulator }/>
                </div>
                <div className="right__pad">{ infoComponent }</div>
            </div>
        );
    }
}

