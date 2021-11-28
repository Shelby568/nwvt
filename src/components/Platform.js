import React from 'react'
import NavBar from './NavBar'
import ptrack1Img from '../images/protrack1.jpg';
import ptrack2Img from '../images/protrack2.jpg';
import ptrack3Img from '../images/protrack3.jpg';
import ptrack4Img from '../images/protrack4.jpg';
import ptrack5Img from '../images/protrack5.png';
import ptrack6Img from '../images/protrack6.jpg';
import '../styles/Platform.css';

const Platform = () => {
    return (
        <div className="platform">
            <NavBar />
            <div className="platform-wrapper">
        <div className="platform-images">
        <div className="platform-g1">
        <img className="platform-img" src={ptrack1Img} alt="Monitor function" />
        <img className="platform-img" src={ptrack2Img} alt="Tracking function" />
        <img className="platform-img" src={ptrack3Img} alt="Playback function" />
        </div>
        <div className="platform-g2">
        <img className="platform-img" src={ptrack4Img} alt="Geofence function" />
        <img className="platform-img" src={ptrack5Img} alt="Device list function" />
        <img className="platform-img" src={ptrack6Img} alt="Device management" />
        </div>
        </div>
        </div>
        </div>
    
    )
}

export default Platform;
