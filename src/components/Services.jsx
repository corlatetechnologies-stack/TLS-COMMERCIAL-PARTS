import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Services.css';

const Services = () => {
    const navigate = useNavigate();

    return (
        <section id="services" className="services">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">Our Core Services</h2>
                    <p className="section-description">
                        At TLS Commercial Parts, we specialize in quality motor parts and spares, plus expert Mercedes-Benz car and truck repair services. We help you save money while getting reliable parts and professional repairs.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="services-grid">
                    {/* Second-Hand Motor Parts */}
                    <div className="service-card">
                        <div className="service-image">
                            <img src="/images/car parts.jpeg" alt="Second-Hand Motor Parts" />
                        </div>
                        <div className="service-content">
                            <h3 className="service-title">Second-Hand Motor Parts & Spares</h3>
                            <p className="service-description">
                                We stock a wide selection of quality second-hand motor parts and spares 
                                for various vehicle makes and models. All parts are carefully checked 
                                to ensure they work properly, giving you reliable parts at affordable prices.
                            </p>
                            <button className="service-btn" onClick={() => navigate('/products')}>View Parts Inventory</button>
                        </div>
                    </div>

                    {/* Mercedes Benz Repairs */}
                    <div className="service-card">
                        <div className="service-image">
                            <img src="/images/m-speciality.png" alt="Specialized Mercedes Benz Repairs" />
                        </div>
                        <div className="service-content">
                            <h3 className="service-title">Specialized Mercedes Benz Repairs</h3>
                            <p className="service-description">
                                Our passionate team has spent years mastering Mercedes Benz repairs through 
                                hands-on experience. We've honed our skills on countless engines, gearboxes, 
                                and differentials, learning what works best to get your Mercedes running perfectly again.
                            </p>
                            <button className="service-btn">Schedule a Service</button>
                        </div>
                    </div>
                </div>

                {/* Mercedes Benz Expertise Section */}
                <div className="expertise-section">
                    <h2 className="expertise-title">Mercedes Benz Expertise</h2>
                    <p className="expertise-description">
                        We are the trusted specialists for Mercedes Benz's most critical systems. 
                        Our master technicians deliver precision engineering solutions that restore peak performance.
                    </p>
                    
                    <div className="expertise-grid">
                        {/* Engine Repairs & Rebuilds */}
                        <div className="expertise-card">
                            <div className="expertise-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21A7,7 0 0,1 14,26H10A7,7 0 0,1 3,19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M12,4A0,0 0 0,1 12,4A0,0 0 0,1 12,4M7.5,13A4.5,4.5 0 0,1 12,17.5A4.5,4.5 0 0,1 16.5,13"/>
                                </svg>
                            </div>
                            <h3 className="expertise-card-title">Engine Repairs & Rebuilds</h3>
                            <p className="expertise-card-description">
                                <strong>Complete Engine Solutions:</strong> We repair and rebuild Mercedes engines to run like new. 
                                From minor fixes to full rebuilds, we'll get your Mercedes engine running smoothly and 
                                powerfully again.
                            </p>
                        </div>

                        {/* Gearbox Repairs */}
                        <div className="expertise-card">
                            <div className="expertise-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                                </svg>
                            </div>
                            <h3 className="expertise-card-title">Gearbox Repairs</h3>
                            <p className="expertise-card-description">
                                <strong>Transmission Experts:</strong> We specialize in repairing all types of Mercedes gearboxes. 
                                Get your smooth shifting back and restore your car's performance with our 
                                professional gearbox repair services.
                            </p>
                        </div>

                        {/* Differential Repairs */}
                        <div className="expertise-card">
                            <div className="expertise-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,3C7.58,3 4,4.79 4,7V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V7C20,4.79 16.42,3 12,3M18,17C18,17.5 15.87,19 12,19C8.13,19 6,17.5 6,17V14.77C7.61,15.55 9.72,16 12,16C14.28,16 16.39,15.55 18,14.77V17M18,12.45C16.7,13.4 14.42,14 12,14C9.58,14 7.3,13.4 6,12.45V9.64C7.47,10.47 9.61,11 12,11C14.39,11 16.53,10.47 18,9.64V12.45M12,9C8.13,9 6,7.5 6,7C6,6.5 8.13,5 12,5C15.87,5 18,6.5 18,7C18,7.5 15.87,9 12,9Z"/>
                                </svg>
                            </div>
                            <h3 className="expertise-card-title">Differential Repairs</h3>
                            <p className="expertise-card-description">
                                <strong>Differential Specialists:</strong> We repair the systems that help your Mercedes 
                                turn corners smoothly and distribute power to your wheels properly. Restore that 
                                smooth Mercedes driving experience you expect.
                            </p>
                        </div>

                        {/* Suspension Repairs */}
                        <div className="expertise-card">
                            <div className="expertise-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,2A1,1 0 0,1 13,3V4.5C15.5,4.94 17.5,6.81 18,9.5H20A1,1 0 0,1 21,10.5V13.5A1,1 0 0,1 20,14.5H18C17.5,17.19 15.5,19.06 13,19.5V21A1,1 0 0,1 12,22A1,1 0 0,1 11,21V19.5C8.5,19.06 6.5,17.19 6,14.5H4A1,1 0 0,1 3,13.5V10.5A1,1 0 0,1 4,9.5H6C6.5,6.81 8.5,4.94 11,4.5V3A1,1 0 0,1 12,2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                                </svg>
                            </div>
                            <h3 className="expertise-card-title">Suspension Repairs</h3>
                            <p className="expertise-card-description">
                                <strong>Suspension Specialists:</strong> We fix all suspension issues to give you that 
                                comfortable, smooth Mercedes ride quality. From shocks to air suspension systems, 
                                we'll restore your vehicle's luxury comfort and handling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;