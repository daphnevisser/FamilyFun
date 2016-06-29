import React from 'react';
import SearchBar from './searchbar';

const Navbar = () => {
    return (
        <div>
            <div className="container-fluid topbar">
                <div className="container">
                    <h3 className="logo">Fika</h3>
                    <SearchBar />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
