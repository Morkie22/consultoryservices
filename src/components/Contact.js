import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

function Contact() {
    const [email, setEmail] = useState('');

    const handleChange = event => {
        setEmail(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        alert(`Thank you for your inquiry! We will contact you at ${email}.`);
        setEmail('');
    };

    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;

