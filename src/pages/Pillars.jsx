import { Link } from "react-router-dom";
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "./Pillars.css";

const PillarSelection = () => {
    return (
        <>
            <NavBar />
            <div className="pillar-container">
                <div className="nutrition-p">Hello World</div>
                <div className="fitness-p">Hello World</div>
                <div className="rest-p">Hello World</div>
                <div className="mind-p">Hello World</div>
            </div>




            <Footer />
        </>
    );
};

export default PillarSelection;