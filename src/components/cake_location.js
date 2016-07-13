import React, { Component } from 'react';
import { connect } from 'react-redux';

class CakeLocation extends Component {
    getLocation() {
        const data = this.props.cakes[0];
        if (data && data.meta.code === 200) {
            const location = this.props.cakes[0].response.geocode.displayString;
            return <p className="location">Suggested places in: {location}</p>;
        } else if (data && data.meta.code === 400) {
            return <div className="alert alert-danger" role="alert">Location could not be found. Please try again</div>
        }
    }

    render() {
        return <div className="container">{this.getLocation()}</div>
    }

}

function mapStateToProps(state) {
    return {
        cakes: state.cakes
    }
}

export default connect(mapStateToProps)(CakeLocation);
