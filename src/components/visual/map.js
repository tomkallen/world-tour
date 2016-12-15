import React from 'react';
import './map.css';

// Moved Map to separate component to avoid data noise
export const Map = props =>
    (<iframe src={`https://www.google.com/maps/embed/v1/place?q=${ props.map }&key=AIzaSyDbdidLOBf0pET9rauuDY6vYliQniEF5LM`}/>);
