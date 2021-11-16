import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import aboutSvg from '../../components/images/about-svg.svg';
import './Mission.css';

const Mission = () => {
    return (
        <Container fluid className="pt-5 ml-2 mr-2 p-1 info-container">
            <Row xs="1" md="2" className="p-4">
                <Col  className="text-center p-4">
                    <h1 className="about-heading">Who We Are</h1>
                    <p className="about-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas condimentum lectus, 
                        id pulvinar tellus fermentum eu. Sed pellentesque, purus eu posuere porta, odio mi mollis 
                        nisi, in lacinia tellus dui bibendum ante. Pellentesque habitant morbi tristique senectus 
                        et netus et malesuada fames ac turpis egestas. Mauris at sollicitudin turpis, et ornare orci. 
                        Integer lacinia gravida urna, in mollis mauris. Pellentesque habitant morbi tristique senectus 
                        et netus et malesuada fames ac turpis egestas. Donec porta purus felis, nec vulputate eros 
                        ornare sit amet. Quisque in lorem quam. Suspendisse quis pulvinar augue. Phasellus suscipit 
                        dolor venenatis porttitor mattis. Vivamus rhoncus dignissim porttitor. Fusce ornare sed enim 
                        ac vehicula. Donec ultricies, nisl nec hendrerit fermentum, purus nisi consectetur nulla.
                    </p>
                </Col>
                <Col className="p-5">
                    <img src={aboutSvg} alt="about image"  className="img-fluid float-end"/>
                </Col>
            </Row>
        </Container>
    );
};

export default Mission;