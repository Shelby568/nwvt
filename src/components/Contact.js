import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { GoLocation } from "react-icons/go";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import '../styles/Contact.css';
import Alert from './Alert';

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
            .post('http://localhost:3002/send', { ...formControl })
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
                setResult('error');
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
        <p className="contact-para"><GoLocation className="icon" /> Manchester</p>
        <p className="contact-para"><HiOutlinePhone className="icon" /> 01234 567890</p>
        <p className="contact-para"><HiOutlineMail className="icon" /> email@email.com</p>
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
