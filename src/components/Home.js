import React, { useState } from 'react';
import './Home.css'; // Import the CSS file

function Home() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    return (
        <section id="home">
            <h2>Welcome to Our Consultancy Firm</h2>
            <p>We provide expert consultancy services to help businesses thrive.</p>
            <button onClick={incrementCounter}>Click Me ({counter})</button>
        </section>
    );
}

export default Home;

