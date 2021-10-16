import React from 'react';
import NavBar from './NavBar';
import '../styles/Home.css';

const Home = () => {
    return (
    <div className="home">
        <div className="bg-image">
            <NavBar />
        <p className="landing">Vehicle Tracking Specialists for Asset and Fleet Management.</p>
        </div>
    </div>
    )
}

export default Home
