import React, { useState } from 'react';
import axios from 'axios';

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
            .post('http://localhost:3000/send')
            .then((response) => {
                if (response.data.status === 'success') {
                    alert('Message sent');
                    resetForm()
                } else if (response.data.status === 'fail') {
                    alert('Message failed to send')
                }
            })   
    };

    const resetForm = () => {
        formControl({name: '', email: '', message: ''})
    };

    return (
    <div className="contact">
        <form className="contact-form" onSubmit={handleSubmit} method="POST">
            <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" value={formControl.name} onChange={onNameChange} />
        </div>
        <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" value={formControl.email} onChange={onEmailChange} />
        </div>
        <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5" value={formControl.message} onChange={onChangeMessage}></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
        </form>
    </div>
    );
};

export default Contact;