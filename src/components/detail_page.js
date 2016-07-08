import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetails, getPhotos } from '../actions/index';
import { Link } from 'react-router';
import Carousel from './carousel';
import Map from './map';

class DetailPage extends Component {
    componentWillMount() {
        this.props.getDetails(this.props.params.id);
        this.props.getPhotos(this.props.params.id);
    }

    render() {
        if (this.props.details[0]) {
            const details = this.props.details[0].response.venue;
            const lat = details.location.lat;
            const lon = details.location.lng;
            console.log(details);
            return (
                <div>
                    <div>
                        <Link to="/"><i className="glyphicon glyphicon-arrow-left back"></i></Link>
                    </div>
                    <div className="container detailContainer">
                        <Carousel />
                        <div className="mapArea">
                            <Map lat={lat} lon={lon} markers={[{
                                position: {
                                    lat: lat,
                                    lng: lon,
                                },
                                key: details.id,
                                defaultAnimation: 2,
                            }]}/>
                        </div>
                        <h2>{details.name}</h2>
                        <div className="rating">
                            <h4>{details.rating}</h4>
                            <p>{details.ratingSignals} Votes</p>
                        </div>


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
