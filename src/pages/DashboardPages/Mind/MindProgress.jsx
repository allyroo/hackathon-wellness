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
import Footer from '../../../components/Footer';
import DashboardNav from '../../../components/DashboardElements/DashboardNav';
import MindSmartGoal from '../../../components/MindComponents/MindSmartGoal';

const MindProgress = () => {
    const [value, onChange] = useState(new Date());
    const [count, setCount] = useState(0);

    return (
        <div className="mind-progress-class">
            <NavBar />
            <div className="dashboard-main">
                <DashboardNav />

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
                            <MindSmartGoal />
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

export default MindProgress
