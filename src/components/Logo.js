import React from 'react';
import { ImRss } from "react-icons/im";
import '../styles/Logo.css';

const Logo = () => {
    return (
    <div className="combined-logo">
    <h1 className="logo-title" id="first-line">Northwest Vehicle</h1>
    <h1 className="logo-title" id="second-line">Trackers</h1>
    <ImRss className="logo-icon"/>
    </div>
    )
}

export default Logo
