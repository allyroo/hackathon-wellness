import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import NavBar from "../../../components/NavBar";

import { Nav, Container, Row, Col, } from 'react-bootstrap';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { IoIosSunny } from 'react-icons/io';
// import { AiOutlineHeart } from "react-icons/ai";

import './MindProgress.css';
import FlowerIcon from '../../../components/images/flower-icon.svg'
// import FlowerImage1 from '../../../components/images/flower-growth-progression/flower-1.jpg';
import FlowerImage1 from './images/flower-1.jpg';
import Footer from '../../../components/Footer';
import DashboardNav from '../../../components/DashboardElements/DashboardNav';
import MindSmartGoal from '../../../components/MindComponents/MindSmartGoal';

const MindProgress = () => {
    const [value, onChange] = useState(new Date());
    const [count, setCount] = useState(1);

    const taskComplete = () => {
        if (count > 0 && count < 9) {
            setCount(count + 1)
        } 
    }
    const taskIncomplete = () => {
        if (count > 0 && count < 9) {
            setCount(count - 1)
        }
    }

    return (
        <div className="mind-progress-class">
            <NavBar />
            <div className="dashboard-main">
                <DashboardNav />

                {/* Main Content */}
                <div className="dashboard-mind-progress">
                    <h2>"It does not matter how far you go, so long as you do not stop 💚"</h2>
                    <div className="mind-progress-main">
                        <div className="mind-progress-left">
                            <div className="mind-progress-left-top">
                                <MindSmartGoal />
                            </div>
                            <div className="mind-progress-left-bottom">
                                <Calendar
                                    onchange={onChange}
                                    value={value}
                                    className="progress-calendar"
                                />
                                <div className="progress-button-class">
                                    <h5>Goal Completed?</h5>
                                    <Button outline onClick={taskComplete} color="success" className="button-completed">Yes</Button>
                                    <Button outline onClick={taskIncomplete} color="warning" style={{ "marginLeft": "15px" }} className="button-incomplete">No</Button>
                                </div>
                            </div>

                        </div>


                        <div className="flower-growth-box">
                            {/* https://stackoverflow.com/questions/62192049/how-do-i-dynamically-import-images-in-react */}
                            {/* update the alt text to describe the growth progression */}
                            <img src={require(`./images/flower-${count}.jpg`).default} alt='flower growth progression' />
                        </div>







                        {/* <div className="flower-progress-container">
                                    <Button outline onClick={() => setCount(count + 1)} color="success" >Yes</Button>
                                    <div className="flower-graphics" style={{ "height": `${count * 10}%`, "backgroundColor":"#8bd3dd" }}></div>
                                        <img src={FlowerIcon} alt="flower icon SVG" className="flower-graphics overlay" />
                                </div> */}
                        {/* <div className="progress-button-class">
                                <h5>have you completed today's goal?</h5>
                                <Button outline onClick={taskComplete} color="success" >Yes</Button>
                                <Button outline onClick={taskIncomplete} color="danger" style={{ "marginLeft": "15px" }}>No</Button>
                            </div> */}



                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default MindProgress