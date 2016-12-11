import React, { PropTypes } from 'react';
import './breadcrumbs.css'; 

export const Breadcrumbs = props => {
    if (props.nav.countryName){
        // let code = props.nav.countryCode;
        return (
            <div className="breadcrumbs">

                <li> { props.nav.countryName }</li>
            </div>
        );
    }

    return(<div className="breadcrumbs"><li>Please select country</li></div>);

};

Breadcrumbs.propTypes = {
    nav: PropTypes.object.isRequired
};