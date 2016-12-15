import React, { Component } from 'react';
import { Map } from './index';
import '../info/info.css';

export class CountryInfo extends Component {

    constructor(props){
        super(props);
        this.state=({map: this.props.country});
    }

    setMap = data => this.setState({ map: data });

    sendToParent = data => this.props.sendToParent({continent: this.props.continent, country: ''});

    render() {
        let country = this.props.country;
        let index = this.props.data.map(value => value.countryName).indexOf(country);
        let countryData = this.props.data[index];
        let code = countryData.countryCode;

        return(
            <div className="info">
                <h2 className="info__header">{ this.props.country }</h2>
                <Map map={ this.state.map } />
                <p className="paragraph__meet">Meet <span className="span__clickable" onClick={ () => this.setMap(this.props.country) }>{ this.props.country }</span>.</p>
                <img className="flag" src={`http://www.geonames.org/flags/x/${code.toLowerCase()}.gif`} alt="country flag"/>
                <p>{ country } is one of the {this.props.db[this.props.continent].length} nations
                    of <span className="span__clickable" onClick={ this.sendToParent }>{ this.props.continent }</span>.</p>
                <p>The capital of { country } is <span className="span__clickable" onClick={ () => this.setMap(countryData.capital) }>{countryData.capital}</span>.</p>
                <p>{ country } is inhabited by approximately { countryData.population } people.
                    Total area of { country } is { countryData.areaInSqKm } square kilometers.
                </p>
                <p>I have calculated that if we evenly distribute all the citizens of the country then
                    nearly { Math.floor(countryData.population / countryData.areaInSqKm) } people will be settled in 1 square kilometer.</p>

            </div>
        )
    }
}