import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

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

    const handleHomeNavigation = (sectionId) => {
        if (location.pathname !== '/') {
            // If not on home page, navigate to home first
            window.location.href = `/#${sectionId}`;
        } else {
            // If already on home page, scroll to section
            scrollToSection(sectionId);
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
                        <Link to="/">
                            <img src="/images/logo.png" alt="TLS Commercial Parts Logo" />
                        </Link>
                    </div>
                </div>
                
                <div className="nav-right">
                    <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li>
                            <Link 
                                to="/" 
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setActiveSection('home');
                                }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <a 
                                href="#products" 
                                className={`nav-link ${activeSection === 'products' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleHomeNavigation('products');
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
                                    handleHomeNavigation('about');
                                }}
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <Link 
                                to="/contact" 
                                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Contact
                            </Link>
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
