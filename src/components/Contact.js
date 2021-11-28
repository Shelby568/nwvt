import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { GoLocation } from "react-icons/go";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import '../styles/Contact.css';
import Alert from './Alert';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Contact = () => {

    const [ formControl, setFormControl ] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [ result, setResult ] = useState(null);

    const initialState = {
        alert: {
            message: '',
            isSuccess: false,
        },
    }

    const [ alert, setAlert ] = useState(initialState);

    const handleSubmit = event => {
        event.preventDefault();

        axios
            .post('https://polar-retreat-73993.herokuapp.com/send', { ...formControl })
            .then((response) => {
                setResult(response.data);
                setFormControl({
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                });
                setAlert({
                    isSuccess: true,
                    message: 'Your message was successfully sent!'
                });
            })
            .catch(() => {
                setResult(result);
                setAlert({
                    isSuccess: false,
                    message: 'Oops, something went wrong. Please try again later'
                });
            }); 
    };

    const onInputChange = event => {
        const { name, value } = event.target;

        setFormControl({
            ...formControl,
            [name]: value
        });
    };


    return (
        <div className="contact">
        <NavBar />
        <div className="contact-page">
        {alert.message && (
          <Alert message={alert.message} success={alert.isSuccess} />
        )}
        <div className="contact-para-wrapper">
        <div className="c-para">
        <Popup
            trigger={<button className="popupButton"><GoLocation className="icon" /></button>} position="top center">
                <p className="popupP">Manchester</p>
            </Popup>
            <Popup
            trigger={<button className="popupButton"><HiOutlinePhone className="icon" /></button>} position="top center">
                <p className="popupP">07923 875914</p>
            </Popup>
            <Popup
            trigger={<button className="popupButton"><HiOutlineMail className="icon" /></button>} position="top center">
                <p className="popupP">enquiries@nw-vt.co.uk</p>
            </Popup>
        <a href="https://www.facebook.com/North-West-Vehicle-Trackers-2533384683554739/"><BsFacebook className="icon" /> </a>
        </div>
        </div>
        <div className="ch1">
        <h3 className="contact-h1">Send us a message..</h3>
        </div>
        <div className="wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-fields">
        <input type="text" className="input" name="name"  placeholder="Name" value={formControl.name} onChange={onInputChange} />
        <input type="text" className="input" name="phone" placeholder="Phone" value={formControl.phone} onChange={onInputChange} />
        <input type="text" className="input" name="email" placeholder="Email" value={formControl.email} onChange={onInputChange} />
        </div>
        <div className="msg">
        <textarea className="form-control" rows="5" name="message" placeholder="Message..." value={formControl.message} onChange={onInputChange}></textarea>
        <button type="submit" className="submit-button">Send</button>
        </div>
        </form>
        </div>
    </div>
    </div>
    )
}

export default Contact
