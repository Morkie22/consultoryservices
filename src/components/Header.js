import React from 'react';
import './Header.css'; // Import the CSS file

function Header() {
    return (
        <header>
            <h1>Consultancy Firm</h1>
            <nav>
                <div className="nav-link"><a href="#home">Home</a></div>
                <div className="nav-link"><a href="#about">About</a></div>
                <div className="nav-link"><a href="#services">Services</a></div>
                <div className="nav-link"><a href="#contact">Contact</a></div>
            </nav>
        </header>
    );
}

export default Header;
