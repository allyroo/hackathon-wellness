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
                <div className="testimonials-row">
                    <div className="testimonials-col">
                        <div className="testimonials-img-container">
                            <img src={woman2} alt=""  className="testimonials-img"/>
                        </div>
                        <div className="testimonial-quote">
                            <q>My partner and I found our therapist through Mohala. After 2 
                            weeks, our relationship improved immensely and we just got started!</q>
                            <p className="testimonials-name">- Zahra</p>
                        </div>
                    </div>
                    <div className="testimonials-col">
                        <div className="testimonials-img-container">
                            <img src={woman4} alt=""  className="testimonials-img"/>
                        </div>
                        <div className="testimonial-quote">
                            <q>Fantastic educational content, achievable goals, and good support. 
                                It psychologically prepares you for a lifetime of holistic, healthy 
                                habits, and helps you recenter your mind & body.</q>
                            <p className="testimonials-name">- Melissa</p>
                        </div>
                    </div>
                    <div className="testimonials-col">
                        <div className="testimonials-img-container">
                            <img src={woman7} alt=""  className="testimonials-img"/>
                        </div>
                        <div className="testimonial-quote">
                            <q>Meals, tips, exercise, and meditation all in one place. Everything 
                            I need to stay accountable.</q>
                            <p className="testimonials-name">- Tara</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="bottom-container">
                <p>
                    Holistic living isn’t one size fits all. We want to be your resource to help you create a 
                    lifestyle that nourishes you as a whole. We help you create a holistic lifestyle by approaching 
                    all the four pillars (Nutrition, Fitness, Rest, Mind) that are interconnected. 
                </p>
                <a href="signup">
                    <Button className="join-btn btn-block button-class">
                        Join Today
                    </Button>
                </a>
            </Container>
        </>
    );
};

export default Testimonials;