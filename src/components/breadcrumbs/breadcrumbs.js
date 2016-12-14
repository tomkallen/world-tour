import React, { PropTypes } from 'react';
import './breadcrumbs.css'; 

// Builds top menu displaying selected Continent and Country
export const Breadcrumbs = props => {
    let continent, country;

    props.continent && (continent = (
            <li className="breadcrumbs__continent">
                { props.continent }
            </li>
        ));

    props.country && (country = (
            <li className="breadcrumbs__country">
                { props.country }
            </li>
        ));

    // Boolean + expressions ftw ^^^

    return props.continent ?
        (<div className="breadcrumbs">{ continent } { country }</div>) :
        (<div className="breadcrumbs"><li>Please select country</li></div>);
};

Breadcrumbs.propTypes = {
    continent: PropTypes.string
};
