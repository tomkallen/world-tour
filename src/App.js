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
            continent:'',
            country:'',
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

    parseDB = data => {
        let formattedDB = {};
        data.geonames.forEach(v =>
            formattedDB.hasOwnProperty(v.continentName) ?
                formattedDB[v.continentName].push(v.countryName):
                formattedDB[v.continentName] = []
        );

        this.setState({
            geo: data.geonames,
            db: formattedDB
        });
    };

    dataAccumulator = data => {
        data.continent && this.setState({continent:data.continent});
        this.setState({country:data.country});

        // this.setState({
        //     continent: data.continent,
        //     country: data.country
        // })
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
                {!this.state.selected &&<Info data={ this.state.geo } db={ this.state.db }/>}
                {/* Show this dandy Info ^^^^ component when nothing is selected*/}
            </div>
        );
    }
}

export default App;

