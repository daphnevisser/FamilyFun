import React from 'react';

const CakeLocation = (props) => {
    const getLocation = () => {
        const data = props.cakes;
        if (data && data.meta.code === 200) {
            const location = props.cakes.response.geocode.displayString;
            return <p className="location">Suggested places in: {location}</p>;
        } else if (data && data.meta.code === 400) {
            return <p className="location location-not-found">Location could not be found. Please try again</p>
        }
    }
    return <div className="container">{getLocation()}</div>
}

export default CakeLocation;
