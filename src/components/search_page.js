import React, { Component } from 'react';
import CakeList from './cake_list'

import CakeLocation from './cake_location';

export default class SearchPage extends Component {
    render() {
        return (
            <div>
                <CakeLocation />
                <CakeList />
            </div>
        );
    }
}
