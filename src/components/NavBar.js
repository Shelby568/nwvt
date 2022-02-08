import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Logo from '../images/NWVT LOGO.png';
import '../styles/NavBar.css';

const NavBar = () => {

   const [ menuClick, setMenuClick ] = useState(false);
    const handleClick = () => setMenuClick(!menuClick);
    const closeMobileMenu = () => setMenuClick(false);

    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">
                    <Link to="/">
                       <img className="logo" src={Logo} alt="NWVT logo" />
                    </Link>
                </div>
                <ul className={menuClick ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to="/trackers">Trackers</Link>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to="/platform">App</Link>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
                {menuClick ? (
                    <MdClose className="menu-icon" />
                ) : (
                    <BiMenuAltRight className="menu-icon" />
                )}
            </div>
        </div>
    )
}

export default NavBar
