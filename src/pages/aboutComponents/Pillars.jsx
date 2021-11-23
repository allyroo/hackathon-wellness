import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import nutrition from '../../components/images/nutrition.svg';
import fitness from '../../components/images/fitness.svg';
import rest from '../../components/images/rest.svg';
import mind from '../../components/images/mind.svg';
import './Pillars.css';

const Pillars = () => {
    return (
        <Container fluid className="mt-3 p-5 pillars-container">
            <h1 className="text-center heading mb-5">Pillars of Health</h1>
            <div className="about-row">
                <div className="about-col">
                    <div className="about-img">
                        <img src={nutrition} alt=""  className="pillars-img img-fluid mb-3"/>
                    </div>
                    <h4>Nutrition</h4>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas condimentum lectus, 
                        id pulvinar tellus fermentum eu. Sed pellentesque, purus eu posuere porta, odio mi mollis 
                        nisi, in lacinia tellus dui bibendum ante. 
                        
                    </p>
                </div>
                <div className="about-col">
                    <div className="about-img">
                        <img src={fitness} alt=""  className="pillars-img img-fluid mb-3"/>
                    </div>
                    <h4>Fitness</h4>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas condimentum lectus, 
                        id pulvinar tellus fermentum eu. Sed pellentesque, purus eu posuere porta, odio mi mollis 
                        nisi, in lacinia tellus dui bibendum ante. 
                        
                    </p>
                </div>
                <div className="about-col">
                    <div className="about-img">
                        <img src={rest} alt=""  className="pillars-img img-fluid mb-3"/>
                    </div>
                    <h4>Rest</h4>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas condimentum lectus, 
                        id pulvinar tellus fermentum eu. Sed pellentesque, purus eu posuere porta, odio mi mollis 
                        nisi, in lacinia tellus dui bibendum ante.
                        
                    </p>
                </div>
                <div className="about-col">
                    <div className="about-img">
                        <img src={mind} alt=""  className="pillars-img  mb-3"/>
                    </div>
                    <h4>Mind</h4>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas condimentum lectus, 
                        id pulvinar tellus fermentum eu. Sed pellentesque, purus eu posuere porta, odio mi mollis 
                        nisi, in lacinia tellus dui bibendum ante. 
                        
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default Pillars;