import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';



class CakeList extends Component {
    listVenues() {
        const data = this.props.cakes;
        if (data && data.meta.code === 200) {
            const cakeList = data.response.groups[0].items;
            return cakeList.map((place) => {
                let photo;
                if(place.venue.featuredPhotos) {
                    photo = place.venue.featuredPhotos.items[0].prefix + "160x130" + place.venue.featuredPhotos.items[0].suffix;
                } else {
                    photo = "http://dummyimage.com/160x130/bfbfbf/ffffff&text=No+image+available";
                }

                return (
                    <Link to={'/cake/' + place.venue.id} key={place.venue.id}>
                        <div className="col-lg-6 item">
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

export default connect(mapStateToProps)(CakeList);
