import React, { Component } from 'react';
import SearchBar from './searchbar';
import CakeList from './cake_list'

import CakeLocation from './cake_location';

export default class SearchPage extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <CakeLocation />
                <CakeList />
            </div>
        );
    }
}
