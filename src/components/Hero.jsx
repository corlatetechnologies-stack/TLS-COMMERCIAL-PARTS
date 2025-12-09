import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();
    
    // Images for slideshow 
    const slides = [
        '/images/background-pic1.jpeg',  
        '/images/hero2.png',             
        '/images/hero3.png'              
    ];

    // Auto-change slides every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const navigateToProducts = () => {
        navigate('/products');
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section id="home" className="hero">
            {/* Slideshow Background */}
            <div className="slideshow-container">
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide})` }}
                    />
                ))}
            </div>

            {/* Dark Overlay */}
            <div className="hero-overlay"></div>
            
            {/* Hero Content */}
            <div className="hero-content">
                <h1 className="hero-title">
                    Quality Parts<br />
                    Expert Service
                </h1>
                <p className="hero-subtitle">
                    Expertly inspected, cost-effective secondhand parts and spares, plus specialized Mercedes Benz repair services.
                </p>
                <div className="hero-buttons">
                    <button 
                        className="btn btn-primary"
                        onClick={navigateToProducts}
                    >
                        Browse Parts
                    </button>
                    <button 
                        className="btn btn-secondary"
                        onClick={() => window.open('https://wa.me/message/HBNN47EW2DUXP1', '_blank')}
                    >
                        Get a Quote
                    </button>
                </div>
            </div>

            {/* Slideshow Controls */}
            <div className="slideshow-controls">
                <button className="slide-btn prev-btn" onClick={prevSlide}>
                    <span>‹</span>
                </button>
                <button className="slide-btn next-btn" onClick={nextSlide}>
                    <span>›</span>
                </button>
            </div>

            {/* Slide Indicators */}
            <div className="slide-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
