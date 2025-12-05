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
                                    🔧 <strong>Differential (Diff) Systems:</strong> Expert diagnosis, repair, and replacement of Mercedes-Benz and Mercedes truck differentials.
                                </li>
                                <li className="mercedes-expertise-item">
                                    🔧 <strong>Gearboxes:</strong> Comprehensive services for manual and automatic Mercedes-Benz and Mercedes truck gearboxes.
                                </li>
                                <li className="mercedes-expertise-item">
                                    🔧 <strong>Engines:</strong> From routine maintenance to complex rebuilds, ensuring peak performance for your Mercedes-Benz engine and truck engines.
                                </li>
                            </ul>
                            
                            <p className="mercedes-expertise-quality">
                                We use only genuine or high-quality OEM equivalent parts, ensuring the longevity and reliability of your vehicle.
                            </p>
                        </div>
                        
                        <div className="mercedes-logo-container">
                            <img 
                                src="/images/mercedes-badge.jpg" 
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
                            <h3 className="quality-pillar-title">Rigorous Testing</h3>
                            <p className="quality-pillar-description">
                                Every second-hand part undergoes stringent quality checks and testing to ensure optimal performance and durability before sale.
                            </p>
                        </div>
                        
                        <div className="quality-pillar">
                            <div className="quality-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                                </svg>
                            </div>
                            <h3 className="quality-pillar-title">Certified Mechanics</h3>
                            <p className="quality-pillar-description">
                                Our team consists of certified and experienced professionals dedicated to delivering the highest standard of repair work.
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

                {/* Team Section */}
                <div className="team-section">
                    <h2 className="team-title">Meet Our Expert Team</h2>
                    
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="team-member-image">
                                <img 
                                    src="/images/louis-profile.png" 
                                    alt="Louis Tole - Founder and Lead Mechanic" 
                                />
                            </div>
                            <h3 className="team-member-name">Louis Tole</h3>
                            <p className="team-member-title">Founder & Lead Mechanic</p>
                            <p className="team-member-description">
                                With decades of experience in Mercedes-Benz mechanics, Louis founded TSL Commercial Parts with a vision to provide exceptional automotive solutions and quality parts to the community.
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