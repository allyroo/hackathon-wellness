import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import NavBar from "../../../components/NavBar";

import { Nav } from 'react-bootstrap';
import { Button, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { IoIosSunny } from 'react-icons/io';
import { BsBoxArrowInUpRight } from "react-icons/bs";

import './FitnessProgress.css';
import FlowerIcon from '../../../components/images/flower-icon.svg'
import Footer from '../../../components/Footer';

const FitnessProgress = () => {
    const [value, onChange] = useState(new Date());
    const [count, setCount] = useState(0);

    return (
        <div className="mind-progress-class">
            <NavBar />
            <div className="dashboard-main">
                {/* Left Menu Bar */}
                <div className="dashboard-nav">
                    <h3>Fitness</h3>
                    <h6><a href="/dashboard/fitness">Back to Dashboard <BsBoxArrowInUpRight className="article-link-icon" /></a></h6>
                    <Nav defaultActiveKey="/" className="dashboard-links flex-column">
                        <Button className="dashboard-button" outline style={{ "backgroundColor": "#001858" }}>
                            <Nav.Link href="/dashboard/fitness/progress" className="link" style={{ "color": "#fef6e4" }}>Progress</Nav.Link>
                        </Button>
                        <Button className="dashboard-button" outline>
                            <Nav.Link href="/dashboard/fitness/community" className="link">Community</Nav.Link>
                        </Button>
                        <Button className="dashboard-button" outline>
                            <Nav.Link href="/dashboard/fitness/resources" className="link">Resources</Nav.Link>
                        </Button>
                        <Button className="dashboard-button" outline>
                            <Nav.Link href="/dashboard/fitness/support" className="link">Support</Nav.Link>
                        </Button>
                    </Nav>
                </div>

                {/* Main Content */}
                <div className="dashboard-content-progress">
                    <h2>FITNESS 💚"</h2>
                    <div className="progress-main">
                        <Calendar
                            onchange={onChange}
                            value={value}
                            className="progress-calendar"
                        />
                        <div className="progress-details">
                            <div className="current-goal">
                                <Card className="card">
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            <IoIosSunny /> Mind: Current Smart Goal
                                        </CardTitle>
                                        <CardText>
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="progress-graphs">
                                <div className="flower-graphics">
                                    <Button onClick={() => setCount(count + 1)} color="secondary" outline>Goal Completed</Button>
                                    <div className="flower-boxes">

                                        <img src={FlowerIcon} alt="flower icon SVG" />
                                    </div>
                                </div>
                                <div className="graph-data">
                                    progress
                                        <div className="box" style={{ "height": `${count*10}%` }}>{count*10}%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default FitnessProgress