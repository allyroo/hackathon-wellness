import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import woman2 from '../../components/images/women_02.jpg';
import woman4 from '../../components/images/woman_04.jpg';
import woman7 from '../../components/images/women_07.jpg';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <>
            <Container fluid className="mt-2 p-5 testimonials-container">
                <h1 className="text-center heading">Testimonials</h1>
                <Row xs="1" sm="1" md="1" lg="3" className="about-row">
                    <Col className="about-col">
                        <img src={woman2} alt=""  className="testimonials-img img-fluid mb-3"/>
                        <q>My partner and I found our therapist through Superbloom. After 2 
                        weeks, our relationship improved immensely and we just got started!</q>
                    </Col>
                    <Col className="about-col">
                        <img src={woman4} alt=""  className="testimonials-img img-fluid mb-3"/>
                        <q>Fantastic educational content, achievable goals, and good support. 
                            It psychologically prepares you for a lifetime of holistic, healthy 
                            habits, and helps you recenter your mind & body.</q>
                    </Col>
                    <Col className="about-col">
                        <img src={woman7} alt=""  className="testimonials-img img-fluid mb-3"/>
                        <q>Meals, tips, exercise, and meditation all in one place. Everything 
                            I need to stay accountable.</q>
                    </Col>
                </Row>
            </Container>
            <Container className="bottom-container">
                "Donec a leo id est ornare porttitor ut a nibh. Nunc ut tincidunt tellus. 
                Duis efficitur metus lectus, sed pretium nisi vestibulum ornare. Curabitur 
                pretium ut diam vel porttitor. Nam sit amet dictum elit, sed pellentesque 
                est. Quisque at commodo nisi. Praesent quis suscipit nunc."
                <Button className="join-btn btn-block button-class">Join Today</Button>
            </Container>
        </>
    );
};

export default Testimonials;