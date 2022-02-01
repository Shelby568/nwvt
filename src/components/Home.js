import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../styles/Home.css';

const Home = () => {
    return (
    <div className="home">
        <div className="bg-image">
            <NavBar />
        <p className="landing"><b>Vehicle Tracking Specialists for Asset and Fleet Management.</b></p>
        <div className="home-button">
        <Link to="/trackers"><button className="homeBtn" id="Btn1">Discover</button></Link>
        <Link to="/platform"><button className="homeBtn" id="Btn2">Learn More</button></Link>
        </div>
        </div>
    </div>
    )
}

export default Home;
