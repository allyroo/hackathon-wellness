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
                        <img src={nutrition} alt=""  className="pillars-img"/>
                    </div>
                    <div className="about-text">
                        <h4>Nutrition</h4>
                        <p className="">
                            Nutrition is a critical part of wellness. People with adequate nutrition are more productive
                            and  can create opportunities to gradually break unhealthy habits. Healthy eating is not hard 
                            but what makes it hard is the lack of education around it. Not having the knowledge around 
                            the healthy substitutes or even an understanding of what our food contains makes it a 
                            frustrating process for many. 
                        </p>
                    </div>
                </div>
                <div className="about-col">
                    <div className="about-img">
                        <img src={fitness} alt=""  className="pillars-img"/>
                    </div>
                    <div className="about-text">
                        <h4>Fitness</h4>
                        <p className="">
                            Physical fitness is to the body what fine tuning is to an engine. It enables us to perform 
                            up to our potential. Being fit helps us look, feel, and do our best.  It is highly important 
                            for our body to be able to function efficiently and effectively at work and in leisure 
                            activities, not only at set point in time but also at various ages and stages of a person's 
                            life cycle. The key is finding optimum health within the limits of one’s lifestyle in order 
                            to be able to resist hypokinetic diseases such as obesity, high blood pressure, diabetes, 
                            and etc. 
                        </p>
                    </div>
                </div>
                <div className="about-col">
                    <div className="about-img">
                        <img src={rest} alt=""  className="pillars-img"/>
                    </div>
                    <div className="about-text">
                        <h4>Rest</h4>
                        <p className="">
                            Rest is essential for your body to recover, adapt, and become stronger. This is a critical 
                            process for our nervous system to regenerate yet, this is a foreign concept to most of us 
                            that often gets carried away in our day to day activities. Just as there are customized 
                            workout and nutrition programs, your rest days should also be catered to your lifestyle 
                            depending on your activities.
                        </p>
                    </div>
                </div>
                <div className="about-col">
                    <div className="about-img">
                        <img src={mind} alt=""  className="pillars-img"/>
                    </div>
                    <div className="about-text">
                        <h4>Mind</h4>
                        <p className="">
                            The mind is often understood as a faculty that manifests itself in mental phenomena like 
                            sensation, perception, thinking, reasoning, memory, belief, desire, emotion, and motivation. 
                            The biggest factor for mental wellbeing. It affects how we think, feel, and act. It also helps
                            determine how we handle stress, relate to others, and make healthy choices. 
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Pillars;