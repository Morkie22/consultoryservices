import React from 'react';
import './About.css'; // Import the CSS file

function About() {
    return (
        <section id="about">
            <h2>About Us</h2>
            <p>Welcome to our consultancy firm! We specialize in providing consultancy services tailored for both individuals and businesses. Whether you're a small startup or an established corporation, we're here to assist you in achieving your goals.</p>
            <p>Our team of experts includes developers and data analysts who are dedicated to providing insightful guidance and solutions to help optimize your projects and processes.</p>
            <h1>Here's how we can help:</h1>
            <ul>
                <li>Small Business Consultancy: We offer strategic advice and practical solutions to help small businesses grow and succeed in today's competitive market.</li>
                <li>Individual Consultancy: Whether you're an entrepreneur, freelancer, or professional seeking career guidance, we provide personalized consultation to help you reach your full potential.</li>
                <li>Developer Consultancy: Our team of experienced developers offers consultation services to assist with software development, code optimization, and technology implementation.</li>
                <li>Data Analysis Consultancy: Leveraging data-driven insights, we help businesses make informed decisions, optimize processes, and drive growth through data analysis and visualization.</li>
            </ul>
            <p>Contact us today to learn more about how our consultancy services can benefit you!</p>
        </section>
    );
}

export default About;


