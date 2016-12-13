import React, { Component, PropTypes } from 'react';
import './countries.css';

class Country extends Component{
    constructor(props){
        super(props);
        this.state = { data: this.props.data }
    }

    transfer = () => this.props.onUpdate(this.props.data);
    // pulling current country object up to the parent node

    render(){
        let code = this.props.data.countryCode;
        return(
            <li onClick={ this.transfer } className="country">
                <img className="flag"
                     src={'http://www.geonames.org/flags/x/'+code.toLowerCase()+'.gif'}
                     alt="Country Flag"/>

                { this.props.name }
            </li>
        )
    }
}




export { Country }