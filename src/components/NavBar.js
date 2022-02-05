import React, { useState } from 'react';
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
                    <a href="/">
                       <img className="logo" src={Logo} alt="logo" />
                    </a>
                </div>
                <ul className={menuClick ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="/">Home</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="/trackers">Trackers</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="/platform">App</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="/contact-us">Contact Us</a>
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
