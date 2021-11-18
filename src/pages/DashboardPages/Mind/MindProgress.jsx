

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import NavBar from "../../../components/NavBar";

import { Nav } from 'react-bootstrap';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { IoIosSunny } from 'react-icons/io';
// import { AiOutlineHeart } from "react-icons/ai";

import './MindProgress.css';
import FlowerIcon from '../../../components/images/flower-icon.svg'
import Footer from '../../../components/Footer';
import DashboardNav from '../../../components/DashboardElements/DashboardNav';
import MindSmartGoal from '../../../components/MindComponents/MindSmartGoal';

const MindProgress = () => {
    const [value, onChange] = useState(new Date());
    const [count, setCount] = useState(5);

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
                                <div className="progress-button-class">
                                    <h5>have you completed today's goal?</h5>
                                    <Button outline onClick={() => setCount(count + 1)} color="success" >Yes</Button>
                                    <Button outline onClick={() => setCount(count - 1)} color="danger" style={{ "marginLeft": "15px" }}>No</Button>
                                </div>
                                <div className="flower-progress-container">
                                    <div className="flower-graphics" style={{ "height": `${count * 10}%`, "backgroundColor":"#8bd3dd" }}></div>
                                        <img src={FlowerIcon} alt="flower icon SVG" className="flower-graphics overlay" />

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