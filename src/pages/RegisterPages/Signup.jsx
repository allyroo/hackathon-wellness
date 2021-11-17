import React from "react";

import SignupForm from "../../components/FormElements/SignupForm";
import { BsFlower1 } from "react-icons/bs";
// import { Card } from 'reactstrap';

import NavBar from "../../components/NavBar";
import SignupImage from '../../components/images/signup.svg';
import './Signup.css';
import Footer from "../../components/Footer";

const Signup = (props) => {

    return (
        <React.Fragment>
            
        {/* NAVBAR on top */}
        <NavBar />

        <div className="signup-page">
            <div className="signup-page-left">
                {/* <BsFlower1 className="flower-icon" /> */}
                <img src ={SignupImage} alt="Signup SVG"/>
            </div>
            {/* <div className="divider"></div> */}
            <div className="signup-page-right">
                <h2>Let's Get Started</h2>
                <SignupForm/>
            </div>
        </div>

        {/* FOOTER on bottom */}
        <Footer />
        </React.Fragment>

    )
}

export default Signup
