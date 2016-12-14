import React, { PropTypes } from 'react';
import './breadcrumbs.css'; 

export const Breadcrumbs = props => {
    let continent, country;
    if (props.continent){
         continent = (
            <li className="breadcrumbs__continent">
                { props.continent }
            </li>
        );
    }
    if (props.country){
         country = (
            <li className="breadcrumbs__country">
                { props.country }
            </li>
        );
    }
    return props.continent ?
        (<div className="breadcrumbs">{ continent } : { country }</div>) :
        (<div className="breadcrumbs"><li>Please select country</li></div>);


};

Breadcrumbs.propTypes = {
    continent: PropTypes.string
};
