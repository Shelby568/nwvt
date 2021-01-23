import React from 'react';
import logo from '../images/logo.png'
import background from '../images/background2.png'
import '../styles/Home.css';
import InfoModal from '../components/InfoModal';
import Contact from '../components/Contact';
import { ModalContext, ModalProvider, ModalRoot } from 'react-multi-modal';

const Home = () => {

   function ModalOne({ isOpen, hideModal }) {
        return (
            isOpen && (
                <InfoModal />
            )
        );
   };

   function ModalTwo({ isOpen, hideModal }) {
       return (
           isOpen && (
               <Contact />
           )
       );
   };

   function showModalOne(showModal) {
       showModal({
           component: ModalOne,
           modalProps: customStyles,
       });
   };

   function showModalTwo(showModal) {
       showModal({
           component: ModalTwo,
           modalProps: customStyles,
       });
   };

    return (
    <div className="home">
        <img src={logo} className="logo-image" alt="logo" />
        <h2 className="logo-intro">Be confident knowing your vehicle is protected</h2>
<ModalProvider>
    <ModalContext>
    {({ showModal, hideModal }) => (
    <>
        <button className="but1" onClick={() => {showModalOne(showModal)}}>Let's talk trackers</button>
    <div className="divider" />
        <button className="but2" onClick={() => {showModalTwo(showModal)}}>Contact us</button>
    <ModalRoot />
    </>
    )}
    </ModalContext>
</ModalProvider>
        <img src={background} className="background-image" alt="car" />
    </div>
    )
};

export default Home;