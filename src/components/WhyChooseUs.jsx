import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
    const navigate = useNavigate();

    return (
        <section id="why-choose-us" className="why-choose-us">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">Why Choose TSL Commercial Parts?</h2>
                    <p className="section-description">
                        We are dedicated to providing exceptional service and value, building trust with every repair and 
                        part we supply.
                    </p>
                </div>

                {/* Trust Pillars */}
                <div className="trust-grid">
                    {/* Quality Guaranteed */}
                    <div className="trust-card">
                        <div className="trust-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                            </svg>
                        </div>
                        <h3 className="trust-title">Quality Guaranteed</h3>
                        <p className="trust-description">
                            Every part and service comes with our commitment to excellence and reliability.
                        </p>
                    </div>

                    {/* Experienced Technicians */}
                    <div className="trust-card">
                        <div className="trust-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16,4C16.88,4 17.67,4.5 18,5.26C19,4.47 20.35,4.5 21.27,5.38C22.2,6.26 22.25,7.69 21.38,8.62L20,10L21.38,11.38C22.25,12.31 22.2,13.74 21.27,14.62C20.35,15.5 19,15.53 18,14.74C17.67,15.5 16.88,16 16,16H8C7.12,16 6.33,15.5 6,14.74C5,15.53 3.65,15.5 2.73,14.62C1.8,13.74 1.75,12.31 2.62,11.38L4,10L2.62,8.62C1.75,7.69 1.8,6.26 2.73,5.38C3.65,4.5 5,4.47 6,5.26C6.33,4.5 7.12,4 8,4H16M14,6H10V8H14V6Z"/>
                            </svg>
                        </div>
                        <h3 className="trust-title">Experienced Technicians</h3>
                        <p className="trust-description">
                            Our skilled team has honed their expertise through years of hands-on experience with Mercedes Benz systems.
                        </p>
                    </div>

                    {/* Customer Satisfaction */}
                    <div className="trust-card">
                        <div className="trust-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5,16L3,5H1V3H4L6,14H18.5L19.5,11H7.1L7.2,10H21L19,17H5M6,20A2,2 0 0,1 8,22A2,2 0 0,1 6,20M15,20A2,2 0 0,1 17,22A2,2 0 0,1 15,20M12,6.5L10.5,5L9,6.5L10.5,8L12,6.5M18.5,9L17,7.5L15.5,9L17,10.5L18.5,9M12,1L15.5,4.5L12,8L8.5,4.5L12,1Z"/>
                            </svg>
                        </div>
                        <h3 className="trust-title">Customer Satisfaction</h3>
                        <p className="trust-description">
                            We prioritize your needs, delivering transparent service and exceptional results every time.
                        </p>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="cta-section">
                    <h2 className="cta-title">Ready to Experience the Difference?</h2>
                    <p className="cta-description">
                        Whether you need a specific part or expert mechanical service, TSL Commercial Parts is here to 
                        help. Contact us today!
                    </p>
                    <div className="cta-buttons">
                        <button className="btn btn-primary cta-btn" onClick={() => window.open('https://wa.me/message/HBNN47EW2DUXP1', '_blank')}>Get a Free Consultation</button>
                        <button className="btn btn-secondary cta-btn" onClick={() => navigate('/products')}>Explore Our Parts</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;