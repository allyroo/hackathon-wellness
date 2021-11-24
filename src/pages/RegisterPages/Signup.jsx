import React from "react";

import SignupForm from "../../components/FormElements/SignupForm";
import NavBar from "../../components/NavBar";
import SignupImage from '../../components/images/signup.svg';
import './Signup.css';
import Footer from "../../components/Footer";

const Signup = (props) => {

    return (
        <div className="signup-page-layout">
            <NavBar />
            <div className="signup-page">
                <div className="signup-page-left">
                    <img src={SignupImage} alt="Signup SVG" />
                </div>
                <div className="signup-page-right">
                    <h2>Let's Get Started</h2>
                    <SignupForm />
                </div>
            </div>
            <Footer />
            </div>
    )
}

export default Signup
