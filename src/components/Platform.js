import React from 'react'
import NavBar from './NavBar'
import ptrack0Img from '../images/protrack0.png';
import '../styles/Platform.css';

const Platform = () => {
    return (
        <div className="platform">
            <NavBar />
            <div className="platform-wrapper">
                <div className="platform-card">
        <img className="platform-img" src={ptrack0Img} alt="NWVT App Funtionality" />
        <div className="platform-content">
            <h1 className="platform-h1">iOS and Android Tracking App</h1>
            <h3 className="platform-h3">Features:</h3>
            <ul className="platform-list">
                <li className="platform-list-item"><span><h4>Alarms and Notifications</h4>
                <p className="platform-list-info">Set up alarms to get instantly notified for events like speeding, vibration, power off and many more.</p>
                </span></li>
                <li className="platform-list-item"><span><h4>ACC Detection</h4>
                <p className="platform-list-info">Always keeps you informed of the ACC status of your vehicle.</p></span></li>
                <li className="platform-list-item"><span><h4>Remote Cut-off</h4>
                <p className="platform-list-info">Immobilise your vehicle by cutting it remotely via the app</p></span></li>
                <li className="platform-list-item"><span><h4>Geo-fence</h4>
                <p className="platform-list-info">A virtual area set on the app, you‘ll be informed when the vehicle crosses its boundary.</p></span></li>
                <li className="platform-list-item"><span><h4>Trip Logging</h4>
                <p className="platform-list-info">Playback functionality for 3 months of trip logging.</p></span></li>
            </ul>
        </div>
        </div>
        </div>
        </div>

    )
}

export default Platform;
