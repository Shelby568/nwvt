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
        <img className="platform-img" src={ptrack0Img} alt="App functionality" />
        <div className="platform-content">
            <h1 className="platform-h1">iOS and Android Tracking App</h1>
            <h3 className="platform-h3">Features:</h3>
            <ul className="platform-list">
                <li className="platform-list-item"><span><h4>Alarms and Notifications</h4>
                <p className="platform-list-info">Allows users to set up alarms to get instantly notified for events you consider important.</p>
                </span></li>
                <li className="platform-list-item"><span><h4>ACC Detection</h4>
                <p className="platform-list-info">Always keeps you informed of the ACC status of your vehicle.</p></span></li>
                <li className="platform-list-item"><span><h4>Remote Cut-off</h4>
                <p className="platform-list-info">Immobilise a vehicle by cutting it remotely via the app</p></span></li>
                <li className="platform-list-item"><span><h4>Speeding Alarm</h4>
                <p className="platform-list-info">When the vehicle is over-speeding, then it will be detected and send an alarm.</p></span></li>
                <li className="platform-list-item"><span><h4>Geo-fence</h4>
                <p className="platform-list-info">A virtual area set on the app, you‘ll be informed when the vehicle crosses its boundary.</p></span></li>
                <li className="platform-list-item"><span><h4>Vibration Alarm</h4>
                <p className="platform-list-info">With built-in vibration sensor, an alarm will be sent immediately when the vehicle has abnormal vibration.</p></span></li>
                <li className="platform-list-item"><span><h4>Power Off Alarm</h4>
                <p className="platform-list-info">Alerts when vehicle is powered off.</p></span></li>
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
