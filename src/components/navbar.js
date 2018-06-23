import React from 'react';
import SearchBar from "./search_bar";



const Navbar = ({videoSearch}) => {
    return (
        <nav className='navbar'>
            <div className="navbar__logo">
                <h1>React Tube</h1>
            </div>
            <SearchBar videoSearch={videoSearch} />
        </nav>
    );
};
export default Navbar;