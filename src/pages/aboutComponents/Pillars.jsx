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
            <Row xs="1"  md="2" lg="4" className="about-row">
                <Col className="about-col">
                    <img src={nutrition} alt=""  className="pillars-img img-fluid mb-3"/>
                    <h4>Nutrition</h4>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas condimentum lectus, 
                        id pulvinar tellus fermentum eu. Sed pellentesque, purus eu posuere porta, odio mi mollis 
                        nisi, in lacinia tellus dui bibendum ante. 
                        
                    </p>
                </Col>
                <Col className="about-col">
                    <img src={fitness} alt=""  className="pillars-img img-fluid mb-3"/>
                    <h4>Fitness</h4>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas condimentum lectus, 
                        id pulvinar tellus fermentum eu. Sed pellentesque, purus eu posuere porta, odio mi mollis 
                        nisi, in lacinia tellus dui bibendum ante. 
                        
                    </p>
                </Col>
                <Col className="about-col">
                    <img src={rest} alt=""  className="pillars-img img-fluid mb-3"/>
                    <h4>Rest</h4>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas condimentum lectus, 
                        id pulvinar tellus fermentum eu. Sed pellentesque, purus eu posuere porta, odio mi mollis 
                        nisi, in lacinia tellus dui bibendum ante.
                        
                    </p>
                </Col>
                <Col className="about-col">
                    <img src={mind} alt=""  className="pillars-img img-fluid mb-3"/>
                    <h4>Mind</h4>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas condimentum lectus, 
                        id pulvinar tellus fermentum eu. Sed pellentesque, purus eu posuere porta, odio mi mollis 
                        nisi, in lacinia tellus dui bibendum ante. 
                        
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Pillars;