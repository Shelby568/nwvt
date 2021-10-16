import React from 'react';
import { BsCheckCircleFill, BsPersonFill } from "react-icons/bs";
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
        <h1>Standard</h1>
        <p className="info-line">GPS trackers perfect for personal vehicles and fleets.</p>
        <p className="info"><BsCheckCircleFill className="check" /> Real time tracking technology</p>
        <p className="info"><BsCheckCircleFill className="check" /> Shock sensor technology</p>
        <p className="info"><BsCheckCircleFill className="check" /> Geofence feature</p>
        <p className="info"><BsCheckCircleFill className="check" /> Vehicle movement and speed alerts</p>
        <p className="info"><BsCheckCircleFill className="check" /> Battery disconnect alert</p>
        </div>
        <div className="card2">
        <FaTruck className="info-icon" />
        <h1>Fleet</h1>
        <p className="info-line">GPS trackers with advanced fleet management features.</p>
        <p className="info"><BsCheckCircleFill className="check" /> Daily activity and working hours report</p>
        <p className="info"><BsCheckCircleFill className="check" /> Journey, stop time and location reporting</p>
        <p className="info"><BsCheckCircleFill className="check" /> Geofence feature</p>
        <p className="info"><BsCheckCircleFill className="check" /> Vehicle movement and speed alerts</p>
        <p className="info"><BsCheckCircleFill className="check" /> Power management with battery disconnect alert</p>
        </div>
        <div className="card3">
        <BsPersonFill className="info-icon" />
        <h1>Personal</h1>
        <p className="info-line">GPS trackers perfect for personal tracking.</p>
        <p className="info"><BsCheckCircleFill className="check" /> Real time tracking technology</p>
        <p className="info"><BsCheckCircleFill className="check" /> Compact size</p>
        <p className="info"><BsCheckCircleFill className="check" /> Geofence feature</p>
        <p className="info"><BsCheckCircleFill className="check" /> Multi-purpose</p>
        <p className="info"><BsCheckCircleFill className="check" /> Excellent battery life with charger included</p>
        </div>
     </div>
     </div>
    </div>
    )
}

export default About
