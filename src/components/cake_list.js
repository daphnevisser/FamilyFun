import React from 'react';
import { Link } from 'react-router';

const CakeList = (props) => {
    const listVenues = () => {
        const cakeList = props.cakes.response.groups[0].items;
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
    const data = props.cakes;
    //Show loading text when there is no data yet
    if (!data) {
        return (
            <div className="loading">Loading...</div>
        );
    }
    //List the venues if request is successful
    if (data.meta.code === 200) {
        return (
            <div>
                <div className="container">
                    {listVenues()}
                </div>
            </div>
        );
    } else {
        return <div></div>
    }
}

export default CakeList;
