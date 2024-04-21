import React from 'react';
import './Services.css'; // Import the CSS file

function Services() {
    const services = [
        { name: 'Consulting', description: 'Expert advice and guidance tailored to your business needs.' },
        { name: 'Strategy Development', description: 'Strategic planning and development to achieve your goals.' },
        { name: 'Market Research', description: 'In-depth analysis of market trends and consumer behavior.' },
        { name: 'Training & Development', description: 'Customized training programs to enhance skills and productivity.' }
    ];

    return (
        <section id="services">
            <h2>Our Services</h2>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Services;

