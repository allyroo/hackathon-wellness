import React from "react";

import { BsFlower1 } from "react-icons/bs";
import LoginForm from "../../components/FormElements/LoginForm";
// import { Card } from 'reactstrap';

import NavBar from "../../components/NavBar";
import './Login.css';
import LoginImage from '../../components/images/login.svg';
import Footer from "../../components/Footer";

const Login = (props) => {

    return (
        <div className="signup-page-layout">
            <NavBar />

            <div className="login-page">
                <div className="login-page-left">
                    <h2>Welcome Back!</h2>
                    <LoginForm />
                </div>
                <div className="login-page-right">
                    {/* <BsFlower1 className="flower-icon" /> */}
                    <img src={LoginImage} alt="Login SVG" />
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Login
