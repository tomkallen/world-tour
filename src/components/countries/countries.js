import React, { Component } from 'react';
import './countries.css';

export class Country extends Component{

    sendToParent = () => this.props.sendToParent({
        country: this.props.country,
        continent: this.props.continent
    });

    render(){
        return(
            <li onClick={ this.sendToParent } className="country">
                { this.props.country }
            </li>
        )
    }
}
