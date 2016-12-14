import React, { Component } from 'react';
import './bars.css';

export class Bars extends Component {

    sortCountries = (a, b) => {

    // This method is a custom sort helper to pre-sort array by element property, i.e. Continent
        if (a.continentName < b.continentName) return 1;
        if (a.continentName > b.continentName) return -1;
        return 0;
    };

    render() {

        // displaying the grid chart of countries. Possibly expand functionality later?
        if (this.props.data) {
            let list = this.props.data.sort(this.sortCountries);
            let countryCharts = list.map(value => {
                let key = "bar-" + value.countryName;
                return (<div
                    className={ value.continentName.substr(0, 2) + " bar" }
                    key={ key }
                    title={ value.countryName + " / " + value.continentName }>
                    <Bar />
                </div>);
            });
            return (<div className="bars">{ countryCharts }</div>)
        }
    }
}

export const Bar = props => (<div></div>);
// Keeping Bar in case its functionally expands
