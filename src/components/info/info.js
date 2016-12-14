import React, { Component, PropTypes } from 'react';
import { Bars } from '../visual'
import './info.css'

export class Info extends Component{

    render(){

        if (this.props.data.length){ //fetched?

            let data = this.props.data;
            let population = ((data.reduce((total, i) => {
                return total + Number(i.population)}
                , 0)) /1000000).toFixed(0) *1000000;
            // Magical round-up! Getting total number of people w/o hardcoding.

            return(
            <div className="info">
                <h2>World info</h2>
                <iframe src="https://www.google.com/maps/embed/v1/place?q=world&key=AIzaSyDbdidLOBf0pET9rauuDY6vYliQniEF5LM"></iframe>
                <p>There are { data.length } countries in the world so far,
                which are inhabited by { population } men and women.</p>
                <p>Approximately of course.</p>
                <p>{ data.length } countries include those partly recognized, not
                recognized at all and some other weird minor states that can barely
                be called 'countries'.</p><br/>
                <h2>The World chart</h2>
                <Bars data={this.props.data} />
                <p>Chart above represents countries distribution sorted by the parts of the world.
                Hover these bars with your mouse to see what country or continent you are looking at.</p>
            </div>)
        }

        return (
            <div className="info">Loading some data for you. Bear with me.</div>
        )
    }
}

Info.propTypes = {
    data : PropTypes.array.isRequired
};