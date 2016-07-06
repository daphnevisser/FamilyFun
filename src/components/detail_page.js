import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetails } from '../actions/index';
import { getPhotos } from '../actions/index';
import { Link } from 'react-router';
import Carousel from './carousel';

class DetailPage extends Component {
    componentWillMount() {
        this.props.getDetails(this.props.params.id);
        this.props.getPhotos(this.props.params.id);
    }

    render() {
        if (this.props.details[0]) {
            const details = this.props.details[0].response.venue;

            return (
                <div>
                    <div>
                        <Link to="/"><i className="glyphicon glyphicon-arrow-left back"></i></Link>
                    </div>
                    <div className="container detailContainer">
                        <Carousel />
                        <h4>{details.name}</h4>
                    </div>
                </div>
            );
        } else {
            return (
                <div>...</div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        details: state.details,
        photos: state.photos
    }
}

export default connect(mapStateToProps, {getDetails, getPhotos})(DetailPage);
