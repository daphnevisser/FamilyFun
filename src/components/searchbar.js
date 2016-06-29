import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCakes } from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.getCakes(this.state.term);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                value={this.state.term}
                onChange={this.onInputChange}
                className="form-control" placeholder="Enter a city and country, e.g. 'London UK'"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">S</button>
                </span>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        cakes: state.cakes
    }
}

export default connect(mapStateToProps, {getCakes})(SearchBar);
