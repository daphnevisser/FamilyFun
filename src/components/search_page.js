import React, { Component } from 'react';
import CakeList from './cake_list'

import CakeLocation from './cake_location';

export default class SearchPage extends Component {
    render() {
        return (
            <div>
                <div className="welcome">
                    <div className="box">
                        <h1>Sometimes you just need cake</h1>
                        <h2>Find the best café in your area</h2>
                    </div>
                </div>
                <CakeLocation />
                <CakeList />
            </div>
        );
    }
}
