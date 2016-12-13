import React, { Component, PropTypes } from 'react';
import { Country } from './countries';

import "./countries.css";

class Continents extends Component{
    constructor(props){
        super(props);
        this.state({countries:[]});
    }

    render(){
        let countryList;
        if (this.props.countryList.length) {
            countryList = this.props.countryList.map(v => (
                <div key={v}>
                    <Country name={ v }/>
                </div>
            ));
            // this.setState({ countries: countryList });

            return (
                <div >
                    <h3>{ this.props.continent} </h3>
                    { countryList }
                </div>)
        }
    }
}

export { Continents }