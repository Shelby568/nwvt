import React, { useState } from 'react';
import Logo from '../components/Logo';
import background from '../images/background2.png'
import '../styles/Home.css';
import InfoModal from '../components/InfoModal';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const Home = () => {

    const [ modalIsOpen, setIsOpen ] = useState(false);

    const customStyles = {
        content: {
            height: '45%',
            width: '45%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'hidden',
        },
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
    <div className="home">
        <Logo />
        <h2 className="logo-intro">Be confident knowing your vehicle is protected</h2>
        <button className="but1" onClick={() => {openModal()}}>Let's talk trackers</button>
    <div className="divider" />
        <Link to='/contact-us'>
        <button className="but2">Contact us</button>
        </Link>
        <img src={background} className="background-image" alt="car" />
        <Modal
     shouldCloseOnOverlayClick={true}
     isOpen={modalIsOpen}
     onRequestClose={closeModal}
     style={customStyles}
     ariaHideApp={false}
        >
     <InfoModal />
        </Modal>
    </div>
    );
};

export default Home;