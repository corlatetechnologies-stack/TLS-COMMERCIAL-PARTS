import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Services />
            <WhyChooseUs />
            <Footer />
        </div>
    );
}

export default App;
