import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { clearDetails } from '../actions/index';


class CakeList extends Component {
    listVenues() {
        this.props.clearDetails();
        if (this.props.cakes[0]) {
            console.log(this.props.cakes[0].response.groups[0].items);
            const cakeList = this.props.cakes[0].response.groups[0].items;
            return cakeList.map((place) => {
                let photo;
                if(place.venue.featuredPhotos) {
                    photo = place.venue.featuredPhotos.items[0].prefix + "160x130" + place.venue.featuredPhotos.items[0].suffix;
                } else {
                    photo = "http://dummyimage.com/160x130/bfbfbf/ffffff&text=No+image+available";
                }

                return (
                    <Link to={'/cake/' + place.venue.id} key={place.venue.id}>
                        <div className="col-sm-6 item">
                            <div className="box">
                                <img src={photo} alt="Picture from cafe" />
                                <h3><span className="name">{place.venue.name}</span><span className="rating">{place.venue.rating}</span></h3>
                                <div className="address">
                                    <p className="street">{place.venue.location.formattedAddress[0]}</p>
                                    <p>{place.venue.location.formattedAddress[1]}</p>
                                    <p>{place.venue.location.formattedAddress[2]}</p>
                                </div>
                                <div className="openClosed">
                                    {place.venue.hours && <p>{place.venue.hours.status}</p>}
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            });
        }
    }

    render() {
        return(
            <div>
                <div className="container">
                        {this.listVenues()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cakes: state.cakes
    }
}

export default connect(mapStateToProps, {clearDetails})(CakeList);
