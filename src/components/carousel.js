import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

class Carousel extends Component {
    photosList() {
        const photos = this.props.photos[0].response.photos.items;
        console.log(photos);
        return photos.map((photo) => {
            return (
                <div key={photo.id}>
                    <img src={photo.prefix + "300x200" + photo.suffix} alt="venue photo" />
                </div>
            );
        });
    }
    render() {
        const settings = {
            arrows: true,
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 2,
            className: 'innerSlider',
            lazyLoad: true,
            draggable: true,
            responsive: [{ breakpoint: 450, settings: { slidesToShow: 1 } },
                        { breakpoint: 768, settings: { slidesToShow: 2 } },
                        { breakpoint: 1024, settings: { slidesToShow: 3 } }]
        }
        if (this.props.photos[0].response.photos.items.length >= 1) {
            return (
                <div>
                    <Slider {...settings}>
                        {this.photosList()}
                    </Slider>
                </div>
            );
        } else {
            return <div></div>;
        }


    }
}

function mapStateToProps(state) {
    return {
        photos: state.photos
    }
}

export default connect(mapStateToProps)(Carousel);
