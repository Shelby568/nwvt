import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

const Contact = () => {
    const initialState = {
        name: '',
        email: '',
        message: ''
    }

    const [ formControl, setFormControl ] = useState(initialState);

    const onNameChange = (event) => {
        setFormControl({name: event.target.value})
    };

    const onEmailChange= (event) => {
        setFormControl({email: event.target.value})
    };

    const onChangeMessage = (event) => {
        setFormControl({message: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost:3002/send')
            .then((response) => {
                if (response.data.status === 'success') {
                    alert('Message sent');
                } else if (response.data.status === 'fail') {
                    alert('Message failed to send')
                }
            })   
    };


    return (
    <div className="contact">
        <form className="contact-form" onSubmit={handleSubmit} method="POST">
        <input type="text" className="form-control" placeholder="Name" value={formControl.name} onChange={onNameChange} />
        <input type="email" className="form-control" placeholder="email@domain.com" value={formControl.email} onChange={onEmailChange} />
        <textarea className="form-control" rows="5" placeholder="Message" value={formControl.message} onChange={onChangeMessage}></textarea>
        <button type="submit" className="submit-button">Submit</button>
        </form>
    </div>
    );
};

export default Contact;