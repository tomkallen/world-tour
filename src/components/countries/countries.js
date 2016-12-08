import React, { PropTypes } from 'react';
import './countries.css';

export const Countries = props => (
    <div className="countries">
        {props.data && props.data
            .map(v=> (<div className="country" key={v.countryName}>{v.countryName}</div>))}
    </div>
    );

Countries.propTypes = {
    data: PropTypes.array
}