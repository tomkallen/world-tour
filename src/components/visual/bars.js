import React, { Component } from 'react';
import './bars.css';

class Bars extends Component{

    sortCountries = (a,b) => {
    // This method is a custom sort helper to pre-sort array by element property, i.e. Continent

        if (a.continentName < b.continentName) return 1;
        if (a.continentName > b.continentName) return -1;
        return 0;
    };

    render() {
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

class Bar extends Component{
    render(){
        return(<div></div>)
    }
}


export { Bar, Bars }