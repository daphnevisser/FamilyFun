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
                    photo = place.venue.featuredPhotos.items[0].prefix + "150x120" + place.venue.featuredPhotos.items[0].suffix;
                    console.log("photo")
                } else {
                    console.log("no photo")
                    photo = "http://www.tigerbrands.com/wp-content/uploads/2014/07/default-placeholder-1024x1024-150x120.png";

                }

                return (
                    <Link key={place.venue.id} to={'/cake/' + place.venue.id}>
                        <div className="col-sm-6">
                            <img src={photo} alt="Picture from cafe" />
                            <h6>{place.venue.name}</h6>
                            {place.venue.rating}
                            <div className="address">
                                <p>{place.venue.location.formattedAddress[0]}</p>
                                <p>{place.venue.location.formattedAddress[1]}</p>
                                <p>{place.venue.location.formattedAddress[2]}</p>
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
                    <ul>
                        {this.listVenues()}
                    </ul>
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
