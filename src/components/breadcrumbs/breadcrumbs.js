import React, { PropTypes } from 'react';
import './breadcrumbs.css'; 

export const Breadcrumbs = props => (
    <div className="breadcrumbs">
        <li>{props.country}</li>
        <li>{props.state}</li>
        <li>{props.city ? props.city : ''}</li>
        <li></li>
    </div>
);