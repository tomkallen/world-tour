import React, { Component, PropTypes } from 'react';
import './info.css'

export class Info extends Component{

    render(){

        if (this.props.data.length){ //fetched?

            let data = this.props.data;
            let population = ((data.reduce((total, i)=>{
                return total + Number(i.population)}
                , 0)) /1000000).toFixed(0) *1000000;
            // Magical round-up!

            return(
            <div className="info">
                <h2>World Tour info</h2>
                <p>There are { data.length } countries in the world so far,
                which are inhabited by { population } men and women.</p>
                <p>Approximately of course.</p>
                <p>{ data.length } countries include those partly recognized, not
                recognized at all and some other weird minor states that can barely
                be called 'countries'</p>
            </div>)

        }

        return (
            <div className="info">Loading</div>
        )
    }
}

Info.propTypes = {
    data : PropTypes.array.isRequired
};