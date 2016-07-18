import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetails, getPhotos } from '../actions/index';
import { Link } from 'react-router';
import Carousel from './carousel';
import Map from './map';
import Reviews from './reviews';
import config from '../config';
import $ from 'jquery';

class DetailPage extends Component {
    componentWillMount() {
        this.props.getDetails(this.props.params.id);
        this.props.getPhotos(this.props.params.id);
    }
    getDetails() {
        const details = this.props.details[0].response.venue;
        const lat = details.location.lat;
        const lon = details.location.lng;
        const CLIENT_ID = config.client_id;
        return (
            <div>
                <div className="arrow">
                    <Link to="/"><i className="ion-arrow-left-c back"></i></Link>
                    <p className="foursquare">Powered by Foursquare</p>
                </div>
                <div className="container detailContainer">
                    <Carousel />
                    <div className="mapArea clearfix">
                        <Map lat={lat} lon={lon} markers={[{
                            position: {
                                lat: lat,
                                lng: lon,
                            },
                            key: details.id,
                            defaultAnimation: 2,
                        }]}/>
                        <div className="more"><a className="btn btn-default" target="_blank" role="button" href={"https://foursquare.com/v/" + details.id + "?ref=" + CLIENT_ID}>More details</a></div>
                    </div>
                    <div className="infoBox">
                        <h2 className="name">{details.name}</h2>
                        <div className="rating">
                            <h3 style={{color: '#' + details.ratingColor}} >{details.rating}</h3>
                            <p>{details.ratingSignals || "No"} Votes</p>
                        </div>
                        <div className="address">
                            <p><i className="ion-home"></i><span>{details.location.formattedAddress[0]}, </span></p>
                            <p className="line">{details.location.formattedAddress[1]}, </p>
                            <p className="line">{details.location.formattedAddress[2]}</p>
                        </div>
                        {details.contact.phone && <p><i className="ion-ios-telephone"></i><a href={"tel:" + details.contact.phone}>{details.contact.formattedPhone}</a></p>}
                        {details.contact.twitter && <p><i className="ion-social-twitter"></i><a target="_blank" href={"http://www.twitter.com/" + details.contact.twitter}>@{details.contact.twitter}</a></p>}
                        {details.contact.facebookName && <p><i className="ion-social-facebook"></i><a target="_blank" href={"http://www.facebook.com/" + details.contact.facebook}>{details.contact.facebookName}</a></p>}
                        {details.url && <p><i className="ion-android-laptop"></i><a target="_blank" href={details.url}>Website</a></p>}
                        <div className="openingTimes">
                            <h4>Opening times:</h4>
                            {this.getTimes()}
                        </div>
                    </div>
                    <div className="tips">
                        <Reviews />
                    </div>
                </div>
            </div>
        );

    }
    getTimes() {
        if (this.props.details[0].response.venue.hours) {
            const hours = this.props.details[0].response.venue.hours.timeframes;
            return hours.map((times) => {
                return (
                    <div key={times.days}>
                        <p>{times.days}: <span className="time">{times.open[0].renderedTime}</span></p>
                    </div>
                );
            });
        } else {
            return (
                <p>No opening times available.</p>
            );
        }
    }
    render() {
        $(".welcome").css("display", "none");
        if (this.props.details[0]) {
            return (
                <div>
                    {this.getDetails()}
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
