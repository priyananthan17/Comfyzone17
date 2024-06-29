import React, { useState } from 'react';
import './navigationbar.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleSearchBar = () => {
        setSearchVisible(!isSearchVisible);
    };

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <header className="header">
            <div className="promo-banner">
                <span>30% Off Everything. Shop Now. Free Shipping.</span>
            </div>
            <nav className="navbar">
                <Link to="/" className="logo">COMFYZONE</Link>
                <ul className={`nav-links ${isMenuVisible ? 'active' : ''}`}>
                    <li><Link to='/new'>New</Link></li>
                    <li><Link to='/rain'>Rain</Link></li>
                    <li><Link to='/snow'>Snow</Link></li>
                    <li><Link to='/summer'>Summer</Link></li>
                    <li><Link to='/shopall'>Shop All</Link></li>
                </ul>
                <div className="nav-icons">
                    <i className="fas fa-search" aria-label="Search" onClick={toggleSearchBar}></i>
                    <i className="fas fa-user" aria-label="User Profile"></i>
                    <i className="fas fa-shopping-bag" aria-label="Shopping Bag"></i>
                    <i className="fas fa-bars menu-icon" aria-label="Menu" onClick={toggleMenu}></i>
                </div>
            </nav>
            {isSearchVisible && (
                <div className="search-bar">
                    <input type="text" placeholder="Search..." aria-label="Search input" />
                </div>
            )}
        </header>
    );
};

export default NavigationBar;
