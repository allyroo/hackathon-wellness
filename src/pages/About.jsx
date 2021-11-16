import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Mission from './aboutComponents/Mission';
import Pillars from './aboutComponents/Pillars';
import Testimonials from './aboutComponents/Testimonials';

const About = () => {
    return (
        <>
            <NavBar />
            <Mission />
            <Pillars />
            <Testimonials />
            <Footer />
        </>
    );
};

export default About;
