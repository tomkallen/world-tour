import React, { PropTypes } from 'react';
import './breadcrumbs.css'; 

export const Breadcrumbs = props => (
    <div className="breadcrumbs">
        { props.nav.country && <li> { props.nav.country }</li>}
        { props.nav.state && <li>> { props.nav.state }</li>}
        { props.nav.city && <li>> { props.nav.city }</li>}        
    </div>
);

Breadcrumbs.propTypes = {
    nav: PropTypes.object.isRequired
}