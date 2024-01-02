
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './Navbar.css';
import profileImage from '../assests/tahapic.png';

const Navbar = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="" className="navbar-logo">
                    <img src={profileImage} alt="Profile Thumbnail" className="navbar-image" />
                </Link>
                <div className={`menu-icon ${isNavOpen ? 'close' : ''}`} onClick={toggleNav}>
                    <i className={isNavOpen ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/home" className="nav-links" onClick={toggleNav}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={toggleNav}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skills" className="nav-links" onClick={toggleNav}>
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-links" onClick={toggleNav}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={toggleNav}>
                            Contact Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logout" className="nav-links" onClick={toggleNav}>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
