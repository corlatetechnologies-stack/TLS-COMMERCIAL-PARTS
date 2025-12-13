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

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="nav-left">
                    <Link to="/" className="logo-image">
                        <img src="/images/m-.bage.jpg" alt="Mercedes-Benz - TLS Commercial Parts" />
                    </Link>
                </div>
                
                <div className="nav-right">
                    <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li>
                            <Link 
                                to="/" 
                                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setActiveSection('home');
                                }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/products" 
                                className={`nav-link ${isActive('/products') ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact" 
                                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div 
                        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation menu"
                        role="button"
                        tabIndex={0}
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
