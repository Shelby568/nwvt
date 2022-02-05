import React from 'react';
import cardImgOne from '../images/service.svg';
import cardImgTwo from '../images/asset.svg';
import cardImgThree from '../images/car.svg';
import NavBar from './NavBar';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about">
              <NavBar />
        <div className="about-wrapper">
        <div className="cards">
        <div className="card1">
        <img className="cardImg" src={cardImgOne} alt="car" />
        <h1>Service Providers</h1>
        <p className="info">Better monitor and manage vehicle-related information, keep abreast of the state of the car, 
        better serve others and protect their own interests. It can be applied to passenger transportation, auto finance and other industries.</p>
        </div>
        <div className="card2">
        <img className="cardImg" src={cardImgTwo} alt="car" />
        <h1>Fleet Vehicles</h1>
        <p className="info">For the enterprise industry with a large number of vehicles, our GPS tracking system 
        can provide unified supervision of these vehicles, save fuel and other operating costs for the fleet and improve employee productivity, including automotive leasing, logistics and other industries.</p>
        </div>
        <div className="card3">
        <img className="cardImg" src={cardImgThree} alt="car" />
        <h1>Personal Assets</h1>
        <p className="info">Realising the interaction between people and vehicles, we help users to grasp the location of their vehicles anytime and anywhere, in order to prevent theft and other situations.</p>
        </div>
     </div>
     </div>
    </div>
    )
}

export default About
