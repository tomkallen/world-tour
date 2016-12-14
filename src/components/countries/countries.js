import React, { Component } from 'react';
import './countries.css';

export class Country extends Component{

    sendToParent = () => this.props.sendToParent({
        country: this.props.country,
        continent: this.props.continent
    });
    // user can click country inside another expanded continent list
    // so we need to update the continent as well

    render(){
        return(
            <li onClick={ this.sendToParent }
                className="country">
                { this.props.country }
            </li>
        )
    }
}
