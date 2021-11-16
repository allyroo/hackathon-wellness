import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Mission from './aboutComponents/Mission';
import Pillars from './aboutComponents/Pillars';

const About = () => {
    return (
        <>
            <NavBar />
            <Mission />
            <Pillars />
            <Footer />
        </>
    );
};

export default About;
