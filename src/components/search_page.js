import React, { Component } from 'react';
import { connect } from 'react-redux';
import CakeList from './cake_list'
import CakeLocation from './cake_location';

class SearchPage extends Component {
    render() {
        return (
            <div>
                <CakeLocation cakes={this.props.cakes} />
                <CakeList cakes={this.props.cakes} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cakes: state.cakes
    }
}

export default connect(mapStateToProps)(SearchPage);
