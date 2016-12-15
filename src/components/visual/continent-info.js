import React, { Component } from 'react';
import { Map } from './index';
import '../info/info.css';


export class ContinentInfo extends Component {

    render(){

        // filtering sliced clones of db and converting data to numeric values.
        // Just in case.
        let filteredDB = this.props.data.filter( item =>
        item.continentName === this.props.continent && item.continentName !== item.countryName);
        let largest = filteredDB.slice(0).sort( (a,b) => {
            if (+a.areaInSqKm < +b.areaInSqKm) return -1;
            if(+a.areaInSqKm > +b.areaInSqKm) return 1;
            return 0;
        });
        let populated = filteredDB.slice(0).sort( (a,b) => {
            if (+a.population < +b.population) return -1;
            if (+a.population > +b.population) return 1;
            return 0;
        });

        return(
            <div className="info">
                <h2 className="info__header">{ this.props.continent }</h2>
                <Map map={ this.props.continent } />
                <p>Meet <span>{ this.props.continent }</span>.</p>
                <p>{ this.props.continent} has { this.props.db[this.props.continent].length } states.</p>
                <p><span>{ largest[largest.length-1].countryName }</span> is the largest country over there.
                    And <span>{ largest[0].countryName }</span> is the tiniest. It is just { largest[0].areaInSqKm } &#13218; big!
                    Or should we say 'small'?
                </p>
                <p>A lot of people live in <span>{ populated[populated.length-1].countryName }</span>!
                    Something like { populated[populated.length-1].population } to be exact!
                </p>
            </div>
        )
    }
}
