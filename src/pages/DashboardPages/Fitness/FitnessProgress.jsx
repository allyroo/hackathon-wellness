import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import NavBar from "../../../components/NavBar";

import { Nav } from 'react-bootstrap';
import { Progress } from 'reactstrap';
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
        <div className="fitness-progress-class">
            <NavBar />
            <div className="dashboard-main">
                {/* Left Menu Bar */}
                <DashboardNav />

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
                            <div className="fitness-progressbar-class">
                                <Progress value={10} />
                                <Progress
                                    color="success"
                                    value="25"
                                />
                                <Progress
                                    color="info"
                                    value={50}
                                />
                                <Progress
                                    color="warning"
                                    value={75}
                                />
                                <Progress
                                    color="danger"
                                    value="100"
                                />
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
