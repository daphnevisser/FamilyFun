import React, { Component } from 'react';
import { connect } from 'react-redux';

class CakeLocation extends Component {
    getLocation() {
        if (this.props.cakes[0]) {
            const location = this.props.cakes[0].response.geocode.displayString;
            return <p className="location">Suggested places in: {location}</p>;
        }
    }

    render() {
        return <div>{this.getLocation()}</div>
    }

}

function mapStateToProps(state) {
    return {
        cakes: state.cakes
    }
}

export default connect(mapStateToProps)(CakeLocation);
