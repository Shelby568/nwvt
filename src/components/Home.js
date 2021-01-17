import React from 'react';
import logo from '../images/logo.png'
import background from '../images/background2.png'
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home">
        <img src={logo} className="logo-image" alt="logo" />
        <h2 className="logo-intro">Be confident knowing your vehicle is protected</h2>
            <button className="but1">Let's talk trackers</button>
            <div className="divider" />
            <Link to="/contactus">
            <button className="but2">Contact us</button>
            </Link>
            <img src={background} className="background-image" alt="car" />
    </div>
);

export default Home;