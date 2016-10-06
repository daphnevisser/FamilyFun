import React from 'react';

const Reviews = (props) => {
    const getTips = () => {
        const tips = props.details.response.venue.tips.groups[0].items;
        return tips.map((review) => {
            return (
                <div key={review.id} className="reviewBox clearfix">
                    <img src={review.user.photo.prefix + "70x70" + review.user.photo.suffix} alt="User picture" />
                    <p className="name">{review.user.firstName}: </p>
                    <p className="tip">&ldquo;{review.text}&rdquo;</p>
                </div>
            );
        });
    }
    return (
        <div className="row">
            <div className="col-md-12">
                {getTips()}
            </div>
        </div>
    );
}

export default Reviews;
