import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [active, setActive] = useState('home');
    const [isToggled, setIsToggled] = useState(false);

    const handleButtonClick = () => {
        setIsToggled(!isToggled); // Toggle the state
    };

    return (
        <nav id="navbar" className="navbar-container">
            <a className='resp-navbtn' onClick={handleButtonClick}><img src='./img/nav.png' /></a>
            <div className={`navbar-collapse ${isToggled ? 'resp-navattri' : ''}`}>
                <ul className="navbar-list">
                    <li className={`nav-item ${active === "home" ? 'active' : ''}`}> 
                        <a className="nav-link" href="/#home" onClick={() => setActive('home')}>HOME</a>
                    </li>
                    <li className={`nav-item ${active === "about" ? 'active' : ''}`}>
                        <a className="nav-link" href="/#about" onClick={() => setActive('about')}>ABOUT US</a>
                    </li>
                    <li className={`nav-item ${active === "main_events" ? 'active' : ''}`}>
                        <a className="nav-link" href="/#main_events" onClick={() => setActive('main_events')}>MAIN EVENTS</a>
                    </li>
                    <li className={`nav-item ${active === "dept_events" ? 'active' : ''}`}>
                        <a className="nav-link" href="/#dept_events" onClick={() => setActive('dept_events')}>DEPARTMENT EVENTS</a>
                    </li>
                    <li className={`nav-item ${active === "gallery" ? 'active' : ''}`}>
                        <a className="nav-link" href="/#gallery" onClick={() => setActive('gallery')}>GALLERY</a>
                    </li>
                    <li className={`nav-item ${active === "collector" ? 'active' : ''}`}>
                        <a className="nav-link" href="/#collector" onClick={() => setActive('collector')}>COLLECTOR MESSAGE</a>
                    </li>
                    <li className={`nav-item ${active === "contact" ? 'active' : ''}`}>
                        <a className="nav-link" href="/#contact" onClick={() => setActive('contact')}>CONTACT</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
