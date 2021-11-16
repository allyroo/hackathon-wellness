import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import nutrition from '../../components/images/nutrition.svg';
import fitness from '../../components/images/fitness.svg';
import rest from '../../components/images/rest.svg';
import mind from '../../components/images/mind.svg';
import './Pillars.css';

const Pillars = () => {
    return (
        <Container fluid className="mt-2 p-5 pillars-container">
            <h1 className="text-center pillars-heading">Pillars of Health</h1>
            <Row xs="1" sm="2" md="3" lg="4" className="pillars-row">
                <Col className="pillars-col">
                    <img src={nutrition} alt=""  className="pillars-img img-fluid mb-3"/>
                    <h3>Nutrition</h3>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas condimentum lectus, 
                        id pulvinar tellus fermentum eu. Sed pellentesque, purus eu posuere porta, odio mi mollis 
                        nisi, in lacinia tellus dui bibendum ante. 
                        
                    </p>
                </Col>
                <Col className="pillars-col">
                    <img src={fitness} alt=""  className="pillars-img img-fluid mb-3"/>
                    <h3>Fitness</h3>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas condimentum lectus, 
                        id pulvinar tellus fermentum eu. Sed pellentesque, purus eu posuere porta, odio mi mollis 
                        nisi, in lacinia tellus dui bibendum ante. 
                        
                    </p>
                </Col>
                <Col className="pillars-col">
                    <img src={rest} alt=""  className="pillars-img img-fluid mb-3"/>
                    <h3>Rest/Relaxtion</h3>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas condimentum lectus, 
                        id pulvinar tellus fermentum eu. Sed pellentesque, purus eu posuere porta, odio mi mollis 
                        nisi, in lacinia tellus dui bibendum ante.
                        
                    </p>
                </Col>
                <Col className="pillars-col">
                    <img src={mind} alt=""  className="pillars-img img-fluid mb-3"/>
                    <h3>Mind</h3>
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