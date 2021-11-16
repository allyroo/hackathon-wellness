import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import NavBar from "../../../components/NavBar";

import { Nav } from 'react-bootstrap';
import { Button, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { IoIosSunny } from 'react-icons/io';
// import { AiOutlineHeart } from "react-icons/ai";

import './MindProgress.css';
import FlowerIcon from '../../../components/images/flower-icon.svg'

const MindProgress = () => {
    const [value, onChange] = useState(new Date());
    const [count, setCount] = useState(0);

    return (
        <div className="mind-progress-class">
            <NavBar />
            <div className="dashboard-main">
                {/* Left Menu Bar */}
                <div className="dashboard-nav">
                    <Nav defaultActiveKey="/" className="dashboard-links flex-column">
                        <Button className="dashboard-button" outline style={{ "backgroundColor": "#001858" }}>
                            <Nav.Link href="/dashboard/progress" className="link" style={{ "color": "#fef6e4" }}>Progress</Nav.Link>
                        </Button>
                        <Button className="dashboard-button" outline>
                            <Nav.Link href="/dashboard/community" className="link">Community</Nav.Link>
                        </Button>
                        <Button className="dashboard-button" outline>
                            <Nav.Link href="/dashboard/resources" className="link">Resources</Nav.Link>
                        </Button>
                        <Button className="dashboard-button" outline>
                            <Nav.Link href="/dashboard/support" className="link">Support</Nav.Link>
                        </Button>
                    </Nav>
                </div>

                {/* Main Content */}
                <div className="dashboard-content-progress">
                    <h2>"It does not matter how far you go, so long as you do not stop 💚"</h2>
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
                                    graph data
                                        <div className="box" style={{ "height": `${count*10}%` }}>{count*10}%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MindProgress
