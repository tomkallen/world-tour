import React, { PropTypes } from 'react';

export const Countries = props => (
        <h3>{props.heading}</h3>
    );

Countries.propTypes = {
    heading: PropTypes.string.isRequired
}