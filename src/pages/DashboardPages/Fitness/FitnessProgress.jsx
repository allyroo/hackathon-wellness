import { useState } from 'react';
import Calendar from 'react-calendar';
import { BsCheck2 } from "react-icons/bs";
import { Progress } from 'reactstrap';
import 'react-calendar/dist/Calendar.css';

import './FitnessProgress.css';
import NavBar from "../../../components/NavBar";
import Footer from '../../../components/Footer';
import MindSmartGoal from '../../../components/MindComponents/MindSmartGoal';
import DashboardNav from '../../../components/DashboardElements/DashboardNav';

const FitnessProgress = () => {
    const [value, onChange] = useState(new Date());
    const [countOne, setCountOne] = useState(20);
    const [countTwo, setCountTwo] = useState(40);
    const [countThree, setCountThree] = useState(60);

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
                        <div className="fitness-progress-details">
                            <h3>this week's progress:</h3>
                            <div className="fitness-progressbar-class">
                                <div className="fitness-progress-button-class">
                                    <h7>100 push-ups</h7>
                                    <button onClick={()=>setCountOne(countOne+20)}><BsCheck2 /></button>
                                    <Progress
                                        color="purple"
                                        value={countOne}
                                        className="progressBar"
                                    />
                                </div>
                                <div className="fitness-progress-button-class">
                                    <h7>100 sit-ups</h7>
                                    <button onClick={()=>setCountTwo(countTwo+20)}><BsCheck2 /></button>
                                    <Progress
                                        color="coral"
                                        value={countTwo}
                                        className="progressBar"
                                    />
                                </div>
                                <div className="fitness-progress-button-class">
                                    <h7>100 squats</h7>
                                    <button onClick={()=>setCountThree(countThree+20)}><BsCheck2 /></button>
                                    <Progress
                                        color="beige"
                                        value={countThree}
                                        className="progressBar"
                                    />
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
