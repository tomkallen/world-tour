import React, { Component } from 'react';
import { Continents } from './components/countries';
import { Breadcrumbs } from './components/breadcrumbs';
import { Info } from './components/info';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            geo: [], // raw database
            continent:'', // piped data for Breadcrumbs and Info
            country:'', // piped data for Breadcrumbs and Info
            db: {}, // formatted DB
            continentList: [] // continent holder for Continents component
        }
    }

    componentDidMount() {
        fetch("http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&country=&username=tomkallen&style=full")
            .then(data => data.json())
            .then(data => this.parseDB(data)) // rebuilding db to represent continents-> countries format
            .catch(error => console.log('Error receiving data', error));
    }

    parseDB = data => {

        // recreating database as mentioned above
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

    dataAccumulator = data => {

        // Here we operate the data piped up from children (see sendToParent methods)
        this.setState({
            continent: data.continent,
            country: data.country
        })
    };

    render() {

        return (
            <div className="App">
                <div className="App__header">
                    <div className="App__logo">The World Tour</div>
                    <Breadcrumbs
                        country={ this.state.country }
                        continent={ this.state.continent }/>
                </div>
                <div className="continent__list"><Continents
                    db={this.state.db}
                    data={this.state.geo}
                    sendToParent={ this.dataAccumulator }/></div>
                {/*{!this.state.continent &&<Info data={ this.state.geo } db={ this.state.db }/>}*/}
                <Info data={ this.state.geo } db={ this.state.db }/>
                {/* Change this ^^^  when country/continent info pages are done */}
            </div>
        );
    }
}

export default App;

