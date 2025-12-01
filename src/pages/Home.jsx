import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const scrollTo = location.state && location.state.scrollTo;
        if (scrollTo) {
            setTimeout(() => {
                const el = document.getElementById(scrollTo);
                if (el) {
                    const navbarHeight = 80;
                    const targetPosition = el.offsetTop - navbarHeight;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
                navigate(location.pathname, { replace: true, state: null });
            }, 80);
        }
    }, [location, navigate]);

    return (
        <>
            <Hero />
            <Services />
            <WhyChooseUs />
        </>
    );
};

export default Home;
