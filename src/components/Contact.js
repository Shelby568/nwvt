import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';
import Logo from '../components/Logo';

const Contact = () => {

    const [ formControl, setFormControl ] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [ result, setResult ] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();

        axios
            .post('http://localhost:3002/send', { ...formControl })
            .then((response) => {
                setResult(response.data);
                setFormControl({
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch(() => {
                setResult({
                    success: false,
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
        <Logo />
        <h1 className="contact-h1">Contact us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input type="text" className="form-control" name="name" value={formControl.name} onChange={onInputChange} />
        <label htmlFor="name">Your email</label>
        <input type="text" className="form-control" name="email" value={formControl.email} onChange={onInputChange} />
        <label htmlFor="name">Your message</label>
        <textarea className="form-control" rows="5" name="message" value={formControl.message} onChange={onInputChange}></textarea>
        <button type="submit" className="submit-button">Submit</button>
        </form>
    </div>
    );
};

export default Contact;