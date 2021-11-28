import React from 'react';
import { BsPersonFill } from "react-icons/bs";
import { FaCarSide, FaTruck } from "react-icons/fa";
import NavBar from './NavBar';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about">
              <NavBar />
        <div className="about-wrapper">
        <div className="cards">
        <div className="card1">
        <FaCarSide className="info-icon" />
        <h1>Vehicle</h1>
        <p className="info">We offer a wide range of advanced vehicle tracking devices to allow our
        customers to locate any vehicles, cars, buses, motorbikes, scooters, vans or trucks in real-time,
        anywhere in the world using a PC, tablet or smartphones.</p>
        </div>
        <div className="card2">
        <FaTruck className="info-icon" />
        <h1>Asset</h1>
        <p className="info">Asset trackers give customers great peace of mind by allowing them to track
        the location of their assets in real-time and to place additional safeguards to prevent loss of
        valuable equipment and asset theft.</p>
        </div>
        <div className="card3">
        <BsPersonFill className="info-icon" />
        <h1>Personal</h1>
        <p className="info">We offer personal GPS tracking devices for customers who want to keep track
        of their loved ones. It can be used for tracking children, family members, pets or personal items like luggage.</p>
        </div>
     </div>
     </div>
    </div>
    )
}

export default About
