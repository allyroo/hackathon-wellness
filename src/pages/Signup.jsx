import React from "react";

import SignupForm from "../components/SignupForm";
import { BsFlower1 } from "react-icons/bs";
// import { Card } from 'reactstrap';

import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import './Signup.css';

const Signup = (props) => {

    return (
        <React.Fragment>
            
        {/* NAVBAR on top */}
        <NavBar />

        <div className="signup-page">
            <div className="signup-page-left">
               <BsFlower1 className="flower-icon" />
            </div>
            <div className="divider"></div>
            <div className="signup-page-right">
                <h2>Let's Get Started</h2>
                <SignupForm />
            </div>
        </div>

        {/* FOOTER on bottom */}
        <Footer />
        </React.Fragment>

    )
}

export default Signup
