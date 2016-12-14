import React, { Component } from 'react';
import { Country } from './countries';
import "./countries.css";

class Continents extends Component{
    constructor(props){
        super(props);
        this.state=({ expandedChild: null })
    }

    render(){

        // Collecting list of continents using push because why not
        if (this.props.db) {
            let continentList =[];
            let db = this.props.db;
            let continents = Object.keys(db);
            for (let continent of continents){
                continentList.push(
                    <Continent key={ continent }
                        continent={ continent }
                        countries={ db[continent] }
                        data={ this.props.data }
                        sendToParent={ this.sendToParent }
                    />
                )
            }
            return (<div>{ continentList }</div>)
        }

        return (<div>Building continents list</div>)

    }

    sendToParent = data => this.props.sendToParent(data);
    // this is the custom pipe helper that traverses components
    // and transmits data up for as many levels as needed.
    // Data is going up via linked chain of props<->methods
}

class Continent extends Component{
    constructor(props){
        super(props);
        this.state =({ clicked: false});
    }

    expand =() => {

        // expand countries list and pipe selected data up
        this.setState({ clicked: !this.state.clicked });
        this.sendToParent({
            continent: this.props.continent,
            country: '' // country becomes 'not selected' so we could display continent info
        });
    };

    sendToParent = data => this.props.sendToParent(data);
    render(){

        // Here we render list of countries divided by subcategories
        // and return it back to Countries component

        let countries;

        if (this.props.data) {
            countries = this.props.countries.map(value => (
                <Country
                    key={ "country-" + value }
                    data={ this.props.data }
                    country={ value }
                    continent={ this.props.continent }
                    sendToParent={ this.props.sendToParent }/>
            ));
            return (
                <div>
                    <h3 onClick={ this.expand }
                        className="continent">{ this.props.continent }
                    </h3>
                    { this.state.clicked && countries }
                </div>
            )
        }

        return(<div>Loading your countries</div>)
    }
}

export { Continents, Continent }