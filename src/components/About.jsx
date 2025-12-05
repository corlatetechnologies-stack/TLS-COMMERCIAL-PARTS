import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section className="about-page">
            <div className="container">
                {/* Page Header */}
                <div className="about-header">
                    <h1 className="about-title">About TSL Commercial Parts</h1>
                    <p className="about-subtitle">
                        Your trusted partner for quality second-hand motor parts and specialized Mercedes-Benz mechanical repairs.
                    </p>
                </div>

                {/* Journey Section */}
                <div className="journey-section">
                    <div className="journey-content">
                        <div className="journey-image">
                            <img 
                                src="/images/loustruck.png" 
                                alt="Professional mechanic at TLS Commercial Parts working in our fully equipped workshop" 
                            />
                        </div>
                        
                        <div className="journey-text">
                            <h2 className="journey-title">Our Journey: A Legacy of Excellence</h2>
                            
                            <div className="journey-paragraphs">
                                <p className="journey-description">
                                    Founded with a passion for automotive mechanics and a commitment to providing reliable solutions, TSL Commercial Parts has grown from a humble workshop into a leading specialist in second-hand motor parts and Mercedes-Benz repairs. For over two decades, we have served the community with integrity, precision, and unparalleled expertise.
                                </p>
                                
                                <p className="journey-description">
                                    Our journey is marked by continuous learning, adapting to new technologies, and consistently exceeding customer expectations. We pride ourselves on our deep understanding of Mercedes-Benz vehicles and Mercedes trucks, ensuring every repair and part meets the highest standards of quality and performance.
                                </p>
                                
                                <p className="journey-description">
                                    What sets us apart is our hands-on approach and genuine care for every vehicle that comes through our doors. Our experienced technicians don't just fix problems – they build lasting relationships with our customers, ensuring their vehicles perform at their best for years to come.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="values-section">
                    <h2 className="values-title">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                                </svg>
                            </div>
                            <h3 className="value-title">Integrity & Trust</h3>
                            <p className="value-description">We build lasting relationships through honest dealings, reliable service, and keeping our promises to every customer.</p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                                </svg>
                            </div>
                            <h3 className="value-title">Quality</h3>
                            <p className="value-description">Every part and service undergoes rigorous quality checks to ensure exceptional performance and reliability that exceeds expectations.</p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5M12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9Z"/>
                                </svg>
                            </div>
                            <h3 className="value-title">Transparency</h3>
                            <p className="value-description">We believe in honest communication, fair pricing, and clear explanations of all our services and products.</p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16,4C16.88,4 17.67,4.5 18,5.26C19,4.47 20.35,4.5 21.27,5.38C22.2,6.26 22.25,7.69 21.38,8.62L20,10L21.38,11.38C22.25,12.31 22.2,13.74 21.27,14.62C20.35,15.5 19,15.53 18,14.74C17.67,15.5 16.88,16 16,16H8C7.12,16 6.33,15.5 6,14.74C5,15.53 3.65,15.5 2.73,14.62C1.8,13.74 1.75,12.31 2.62,11.38L4,10L2.62,8.62C1.75,7.69 1.8,6.26 2.73,5.38C3.65,4.5 5,4.47 6,5.26C6.33,4.5 7.12,4 8,4H16M14,6H10V8H14V6Z"/>
                                </svg>
                            </div>
                            <h3 className="value-title">Expert Craftsmanship</h3>
                            <p className="value-description">Our skilled technicians bring decades of experience and passion to every repair and service.</p>
                        </div>
                    </div>
                </div>

                {/* Mercedes-Benz Expertise Section */}
                <div className="mercedes-expertise-section">
                    <h2 className="mercedes-expertise-title">Unrivaled Mercedes-Benz Expertise</h2>
                    
                    <div className="mercedes-expertise-content">
                        <div className="mercedes-expertise-text">
                            <p className="mercedes-expertise-description">
                                At TSL Commercial Parts, our specialization in Mercedes-Benz vehicles and trucks sets us apart. Our mechanics possess in-depth knowledge and hands-on experience with the intricate engineering of Mercedes-Benz, particularly focusing on:
                            </p>
                            
                            <ul className="mercedes-expertise-list">
                                <li className="mercedes-expertise-item">
                                    <div className="expertise-header">
                                        <svg className="expertise-list-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12,3C7.58,3 4,4.79 4,7V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V7C20,4.79 16.42,3 12,3M18,17C18,17.5 15.87,19 12,19C8.13,19 6,17.5 6,17V14.77C7.61,15.55 9.72,16 12,16C14.28,16 16.39,15.55 18,14.77V17M18,12.45C16.7,13.4 14.42,14 12,14C9.58,14 7.3,13.4 6,12.45V9.64C7.47,10.47 9.61,11 12,11C14.39,11 16.53,10.47 18,9.64V12.45M12,9C8.13,9 6,7.5 6,7C6,6.5 8.13,5 12,5C15.87,5 18,6.5 18,7C18,7.5 15.87,9 12,9Z"/>
                                        </svg>
                                        <strong>Differential (Diff) Systems:</strong>
                                    </div>
                                    <p className="expertise-description">Expert diagnosis, repair, and replacement of Mercedes-Benz and Mercedes truck differentials.</p>
                                </li>
                                <li className="mercedes-expertise-item">
                                    <div className="expertise-header">
                                        <svg className="expertise-list-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                                        </svg>
                                        <strong>Gearboxes:</strong>
                                    </div>
                                    <p className="expertise-description">Comprehensive services for manual and automatic Mercedes-Benz and Mercedes truck gearboxes.</p>
                                </li>
                                <li className="mercedes-expertise-item">
                                    <div className="expertise-header">
                                        <svg className="expertise-list-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21A7,7 0 0,1 14,26H10A7,7 0 0,1 3,19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M12,4A0,0 0 0,1 12,4A0,0 0 0,1 12,4M7.5,13A4.5,4.5 0 0,1 12,17.5A4.5,4.5 0 0,1 16.5,13"/>
                                        </svg>
                                        <strong>Engines:</strong>
                                    </div>
                                    <p className="expertise-description">From routine maintenance to complex rebuilds, ensuring peak performance for your Mercedes-Benz engine and truck engines.</p>
                                </li>
                                <li className="mercedes-expertise-item">
                                    <div className="expertise-header">
                                        <svg className="expertise-list-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12,2A1,1 0 0,1 13,3V4.5C15.5,4.94 17.5,6.81 18,9.5H20A1,1 0 0,1 21,10.5V13.5A1,1 0 0,1 20,14.5H18C17.5,17.19 15.5,19.06 13,19.5V21A1,1 0 0,1 12,22A1,1 0 0,1 11,21V19.5C8.5,19.06 6.5,17.19 6,14.5H4A1,1 0 0,1 3,13.5V10.5A1,1 0 0,1 4,9.5H6C6.5,6.81 8.5,4.94 11,4.5V3A1,1 0 0,1 12,2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                                        </svg>
                                        <strong>Suspension:</strong>
                                    </div>
                                    <p className="expertise-description">Complete suspension repair and replacement services to restore your Mercedes-Benz ride quality and handling performance.</p>
                                </li>
                            </ul>
                            
                            <p className="mercedes-expertise-quality">
                                We use only genuine or high-quality OEM equivalent parts, ensuring the longevity and reliability of your vehicle.
                            </p>
                        </div>
                        
                        <div className="mercedes-logo-container">
                            <img 
                                src="/images/m-.bage.jpg" 
                                alt="Mercedes-Benz logo badge" 
                                className="mercedes-logo"
                            />
                        </div>
                    </div>
                </div>

                {/* Quality Commitment Section */}
                <div className="quality-commitment-section">
                    <h2 className="quality-commitment-title">Our Unwavering Commitment to Quality</h2>
                    
                    <div className="quality-pillars">
                        <div className="quality-pillar">
                            <div className="quality-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,2A2,2 0 0,1 14,4V6A8,8 0 0,1 22,14H23A1,1 0 0,1 24,15V18A1,1 0 0,1 23,19H22A8,8 0 0,1 14,27H10A8,8 0 0,1 2,19H1A1,1 0 0,1 0,18V15A1,1 0 0,1 1,14H2A8,8 0 0,1 10,6V4A2,2 0 0,1 12,2M12,4V6H10A6,6 0 0,0 4,12V17H6V19H4A6,6 0 0,0 10,25H14A6,6 0 0,0 20,19H18V17H20V12A6,6 0 0,0 14,6H12V4M9,11H15L12,18L9,11Z"/>
                                </svg>
                            </div>
                            <h3 className="quality-pillar-title">Tested for Excellence</h3>
                            <p className="quality-pillar-description">
                                Each spare and part is subjected to rigorous inspections and performance tests, guaranteeing durability and confidence in every purchase.
                            </p>
                        </div>
                        
                        <div className="quality-pillar">
                            <div className="quality-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                                </svg>
                            </div>
                            <h3 className="quality-pillar-title">Highly Skilled Technicians</h3>
                            <p className="quality-pillar-description">
                                Our technicians combine extensive experience with a passion for excellence, committed to providing the highest standard of repair work.
                            </p>
                        </div>
                        
                        <div className="quality-pillar">
                            <div className="quality-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                                </svg>
                            </div>
                            <h3 className="quality-pillar-title">Customer Satisfaction</h3>
                            <p className="quality-pillar-description">
                                Your satisfaction is our top priority. We stand behind our work with guarantees and exceptional after-service support.
                            </p>
                        </div>
                    </div>
                </div>



                {/* Call to Action */}
                <div className="about-cta">
                    <h2 className="cta-title">Ready to Experience Our Excellence?</h2>
                    <p className="cta-description">
                        Whether you need genuine Mercedes-Benz parts or expert repair services, we're here to help you get back on the road with confidence.
                    </p>
                    <div className="cta-buttons">
                        <a href="/contact" className="btn btn-primary">Get in Touch</a>
                        <a href="/products" className="btn btn-secondary">Browse Parts</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;