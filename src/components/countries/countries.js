import React, { Component, PropTypes } from 'react';
import './countries.css';

class Countries extends Component {
    constructor(){
        super();
        this.state = {
            container: null
        }
    }
    render() {
        let countriesList;
        if (this.props.data) {
            countriesList = this.props.data.geonames
                .map(v => (
                    <div key={ v.countryName }>
                        <Country data={ v }/>
                    </div>
                ))
        }
        return (
            <div className="countries">
                { countriesList }
            </div>
        );
    }
}

class Country extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:this.props.data
        }
    }

    render(){
        let code = this.state.data.countryCode;
        return(
            <div className="country">
                <img className="flag"
                src={'http://www.geonames.org/flags/x/'+code.toLowerCase()+'.gif'}
                alt="Country Flag"/>
                {this.state.data.countryName}
            </div>
        )
    }
}


Countries.propTypes = {
    data: PropTypes.object
};

export { Countries, Country }