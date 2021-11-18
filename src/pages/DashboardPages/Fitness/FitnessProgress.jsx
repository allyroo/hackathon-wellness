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
import MindSmartGoal from '../../../components/MindComponents/MindSmartGoal';
import DashboardNav from '../../../components/DashboardElements/DashboardNav';

const FitnessProgress = () => {
    const [value, onChange] = useState(new Date());
    const [count, setCount] = useState(0);

    return (
        <div className="mind-progress-class">
            <NavBar />
            <div className="dashboard-main">
                {/* Left Menu Bar */}
                <div className="dashboard-nav">
                    <DashboardNav />
                </div>

                {/* Main Content */}
                <div className="fitness-dashboard-content-progress">
                <MindSmartGoal />
                    <div className="fitness-progress-main">
                        <Calendar
                            onchange={onChange}
                            value={value}
                            className="fitness-progress-calendar"
                        />
                        <div className="progress-details">
                            <h3>This week's progress:</h3>
                            <ul>
                                <li><h4>fitness goal 1</h4></li>
                                <li><h4>fitness goal 2</h4></li>
                                <li><h4>fitness goal 3</h4></li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default FitnessProgress
