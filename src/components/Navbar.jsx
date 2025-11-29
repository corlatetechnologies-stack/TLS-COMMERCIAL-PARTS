import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = 80;
            const targetPosition = section.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            setActiveSection(sectionId);
            setIsMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="nav-left">
                    <div className="logo-image">
                        <img src="/images/logo.png" alt="TLS Commercial Parts Logo" />
                    </div>
                </div>
                
                <div className="nav-right">
                    <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li>
                            <a 
                                href="#home" 
                                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('home');
                                }}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#products" 
                                className={`nav-link ${activeSection === 'products' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('products');
                                }}
                            >
                                Products
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about" 
                                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('about');
                                }}
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('contact');
                                }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    
                    <div 
                        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
