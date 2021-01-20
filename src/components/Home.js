import React, { useState } from 'react';
import logo from '../images/logo.png'
import background from '../images/background2.png'
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import InfoModal from '../components/InfoModal';

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
        <img src={logo} className="logo-image" alt="logo" />
        <h2 className="logo-intro">Be confident knowing your vehicle is protected</h2>
            <button className="but1" onClick={() => {openModal()}}>Let's talk trackers</button>
            <div className="divider" />
            <Link to="/contactus">
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
    )
};

export default Home;