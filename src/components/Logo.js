import React from 'react';
import logo from '../images/logo.png'
import '../styles/Logo.css';
import { Link } from 'react-router-dom';

const Logo = () => (
    <div className="logo">
    <Link to="/">
    <img src={logo} className="logo-image" alt="logo" />
    </Link>
    </div>
);

export default Logo;