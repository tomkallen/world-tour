import React, { Component } from 'react';
import '../info/info.css';


export class ContinentInfo extends Component {
    constructor(props){
        super(props);

        // filtering raw database to pull the needed info
        // `item.continentName !== item.countryName` is Antarctica hack


    }
    render(){
        let filteredDB = this.props.data.filter( item =>
        item.continentName === this.props.continent && item.continentName !== item.countryName);
        let largest = filteredDB.slice(0).sort( (a,b) => {
            if(+a.areaInSqKm < +b.areaInSqKm) return -1;
            if(+a.areaInSqKm > +b.areaInSqKm) return 1;
            return 0;
        });
        let populated = filteredDB.slice(0).sort( (a,b) => {
            if(+a.population < +b.population) return -1;
            if(+a.population > +b.population) return 1;
            return 0;
        });

        return(
            <div className="info">
                <h2>{ this.props.continent }</h2>
                <iframe src={`https://www.google.com/maps/embed/v1/place?q=${this.props.continent}&key=AIzaSyDbdidLOBf0pET9rauuDY6vYliQniEF5LM`}></iframe>
                <p>Meet <span>{ this.props.continent }</span>.</p>
                <p>{ this.props.continent} has { this.props.db[this.props.continent].length } states.</p>
                <p><span>{ largest[largest.length-1].countryName }</span> is the largest country over there.
                    And <span>{ largest[0].countryName }</span> is the tiniest. It is just { largest[0].areaInSqKm } &#13218; big!
                    Or should we say 'small'?
                </p>
                <p>A lot of people live in <span>{populated[populated.length-1].countryName}</span>!
                    Something like {populated[populated.length-1].population} to be exact!
                </p>
            </div>
        )
    }
}
