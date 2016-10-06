import React from 'react';
import Slider from 'react-slick';

const Carousel = (props) => {
    const photosList = () => {
        const photos = props.photos.response.photos.items;
        return photos.map((photo) => {
            return (
                <div key={photo.id}>
                    <img src={photo.prefix + "300x200" + photo.suffix} alt="venue photo" />
                </div>
            );
        });
    }
    const settings = {
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: 'innerSlider',
        lazyLoad: true,
        draggable: true,
        responsive: [{ breakpoint: 450, settings: { slidesToShow: 1 } },
                    { breakpoint: 768, settings: { slidesToShow: 2 } },
                    { breakpoint: 1024, settings: { slidesToShow: 3 } }]
    }
    if (props.photos && props.photos.response.photos.items.length >= 1) {
        return (
            <div>
                <Slider {...settings}>
                    {photosList()}
                </Slider>
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default Carousel;
