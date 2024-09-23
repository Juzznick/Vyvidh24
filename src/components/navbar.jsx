import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [active, setActive] = useState('home');

    return (
        <nav id="navbar" className="navbar-container">
            <a className="navbar-brand" href="#">Vyvidh <span className="secondary-color">24</span></a>
            <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                <span className="toggler-icon"></span>
            </button>
            <div className="navbar-collapse">
                <ul className="navbar-list">
                    <li className={`nav-item ${active === "home" ? 'active' : ''}`}> 
                        <a className="nav-link" href="#" onClick={() => setActive('home')}>HOME</a>
                    </li>
                    <li className={`nav-item ${active === "about" ? 'active' : ''}`}>
                        <a className="nav-link" href="/#about" onClick={() => setActive('about')}>ABOUT US</a>
                    </li>
                    <li className={`nav-item ${active === "main_events" ? 'active' : ''}`}>
                        <a className="nav-link" href="/#main_events" onClick={() => setActive('main_events')}>MAIN EVENTS</a>
                    </li>
                    <li className={`nav-item ${active === "gallery" ? 'active' : ''}`}>
                        <a className="nav-link" href="/gallery" onClick={() => setActive('gallery')}>GALLERY</a>
                    </li>
                    <li className={`nav-item ${active === "collector" ? 'active' : ''}`}>
                        <a className="nav-link" href="#contact" onClick={() => setActive('collector')}>COLLECTOR MESSAGE</a>
                    </li>
                    <li className={`nav-item ${active === "contact" ? 'active' : ''}`}>
                        <a className="nav-link" href="#contact" onClick={() => setActive('contact')}>CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
