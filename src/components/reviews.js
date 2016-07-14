import React, { Component } from 'react';
import { connect } from 'react-redux';

class Reviews extends Component {
    getTips() {
        const tips = this.props.details[0].response.venue.tips.groups[0].items;
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
    render() {

        return (
            <div className="row">
                <div className="col-md-12">
                    {this.getTips()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        details: state.details
    }
}

export default connect(mapStateToProps)(Reviews);
