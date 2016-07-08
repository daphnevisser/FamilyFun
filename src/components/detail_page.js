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
                        <Link to="/"><i className="ion-arrow-left-c back"></i></Link>
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
                        <div className="infoBox">
                            <h2 className="name">{details.name}</h2>
                            <div className="rating">
                                <h3 style={{color: '#' + details.ratingColor}} >{details.rating}</h3>
                                <p>{details.ratingSignals || "No"} Votes</p>
                            </div>
                            <div className="address">
                                <p><i className="ion-home"></i>{details.location.formattedAddress[0]}, </p>
                                <p>{details.location.formattedAddress[1]}, </p>
                                <p>{details.location.formattedAddress[2]}</p>
                            </div>
                            {details.contact.phone && <p><i className="ion-ios-telephone"></i><a href={"tel:" + details.contact.phone}>{details.contact.formattedPhone}</a></p>}
                            {details.contact.twitter && <p><i className="ion-social-twitter"></i><a target="_blank" href={"http://www.twitter.com/" + details.contact.twitter}>Twitter</a></p>}
                            {details.url && <p><i className="ion-android-laptop"></i><a target="_blank" href={details.url}>Website</a></p>}
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
