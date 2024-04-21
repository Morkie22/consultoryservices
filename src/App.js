import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
