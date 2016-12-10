import React, { Component, PropTypes } from 'react';
import './countries.css';

class Countries extends Component {
    constructor(props){
        super(props);
        this.state = { container: {} }; // stores the state of selected country
    }

    onUpdate = data =>{
        // receives selected country from the child component to work with
        this.setState({ container: data },
            () => this.props.onUpdate(this.state.container));
    };

    render() {
        let countriesList;
        if (this.props.data) {
            countriesList = this.props.data.map(v => (
                <div key={ v.countryName }>
                    <Country
                        onUpdate={ this.onUpdate }
                        data={ v }/>
                </div>
            ))
        }
        return (<div className="countries">{ countriesList }</div>);
    }
}

class Country extends Component{
    constructor(props){
        super(props);
        this.state = { data: this.props.data }
    }

    transfer = () => this.props.onUpdate(this.props.data);
    // pulling current country object up to the parent node

    render(){
        return(
            <div onClick={ this.transfer } className="country">
                { this.state.data.countryName }
            </div>
        )
    }
}

Countries.propTypes = { data: PropTypes.array.isRequired };
Country.propTypes = { data: PropTypes.object.isRequired };

export { Countries, Country }