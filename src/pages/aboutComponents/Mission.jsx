import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import aboutSvg from '../../components/images/about-svg.svg';
import './Mission.css';

const Mission = () => {
    return (
        <Container fluid className="pt-1 ml-2 mr-2 p-2 info-container">
            <Row xs="1" md="2" className="p-4">
                <Col  className="text-center p-4 left-col">
                    <h1 className="heading">Our Mission</h1>
                    <h5 className="about-subheading">More Balance. More Calm. Less Stress.</h5>
                    <p className="about-desc">
                        Our mission is to empower everyone to make the best possible decisions by removing barriers 
                        that prevent people from reaching their best inner- and outer- self. <br />
                        <br />
                        Acknowledging you need help is often the hardest first step. Deciphering how to maneuver 
                        around the obstacles of your daily stress can be an overwhelming journey. 
                        That’s why we’re here to guide you, step by step, to your optimal wellness – 
                        and help you develop the techniques, emotional awareness and mental pliability to
                        reduce stress and live a joyous life. We’ll give you the knowledge and support you need, 
                        so you feel emboldened to whatever may come next.
                    </p>
                </Col>
                <Col className="p-5">
                    <img src={aboutSvg} alt="about placeholder"  className="img-fluid mx-auto d-block mission-svg"/>
                </Col>
            </Row>
        </Container>
    );
};

export default Mission;