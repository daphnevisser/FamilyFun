import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="welcome">
                    <div className="box">
                        <h1>Sometimes you just need cake</h1>
                        <h2>Find the best café in your area</h2>
                    </div>
                </div>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
