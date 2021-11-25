import { useState } from 'react';
import Calendar from 'react-calendar';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'react-calendar/dist/Calendar.css';

import './MindProgress.css';

import NavBar from "../../../components/NavBar";
import Footer from '../../../components/Footer';
import DashboardNav from '../../../components/DashboardElements/DashboardNav';
import MindSmartGoal from '../../../components/MindComponents/MindSmartGoal';
import CompleteImage from '../../../components/images/finish_line.svg';
import IncompleteImage from '../../../components/images/joyride.svg';

const MindProgress = () => {
    const [value, onChange] = useState(new Date());
    const [count, setCount] = useState(1);

    const [completeIsOpen, setCompleteIsOpen] = useState(false);
    const [incompleteIsOpen, setIncompleteIsOpen] = useState(false);

    const completeToggle = () => {
        setCompleteIsOpen(!completeIsOpen);
    };
    const incompleteToggle = () => {
        setIncompleteIsOpen(!incompleteIsOpen);
    };

    const taskComplete = () => {
        if (count < 9) {
            setCount(count + 1)
            console.log(count)
        }
        // else if (count > 8) {
        //     setCount(8);
        //     console.log(count)
        //     console.log('limit exceeded')
        //     // but count keeps going up
        // }
    }
    const taskIncomplete = () => {
        if (count > 0) {
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
                                    <Button outline onClick={count < 9 ? taskComplete : completeToggle} color="success" className="button-completed">Yes</Button>
                                    <Button outline onClick={count > 1 ? taskIncomplete : incompleteToggle} color="warning" style={{ "marginLeft": "15px" }} className="button-incomplete">No</Button>

                                    {/* complete popup */}
                                    <div className="complete-popup-class">
                                        {/* <Button color="danger" onClick={completeToggle}> yes </Button> */}
                                        <Modal isOpen={completeIsOpen} contentClassName="complete-popup-modal" backdropClassName="modal-backdrop-class">
                                            <ModalHeader charCode="Y" toggle={completeToggle}>
                                                <h5>Goal Completed!</h5>
                                            </ModalHeader>
                                            <ModalBody>
                                                <img src={CompleteImage} alt="finishing-line-svg" />
                                                <h6>Great job! Keep up the good work!</h6>
                                            </ModalBody>
                                        </Modal>
                                    </div>

                                    {/* incomplete popup */}
                                    <div className="incomplete-popup-class">
                                        {/* <Button color="danger" onClick={incompleteToggle}> no </Button> */}
                                        <Modal isOpen={incompleteIsOpen} contentClassName="incomplete-popup-modal" backdropClassName="modal-backdrop-class">
                                            <ModalHeader charCode="Y" toggle={incompleteToggle}>
                                                <h5>Didn't complete your goal today?</h5>
                                            </ModalHeader>
                                            <ModalBody>
                                                <img src={IncompleteImage} alt="finishing-line-svg" />
                                                <h6>It's okay! Try again tomorrow!</h6>
                                            </ModalBody>
                                        </Modal>
                                    </div>


                                </div>
                            </div>

                        </div>


                        <div className="flower-growth-box">
                            {/* https://stackoverflow.com/questions/62192049/how-do-i-dynamically-import-images-in-react */}
                            {/* update the alt text to describe the growth progression */}
                            <img
                                src={
                                    count < 1
                                        ? require(`./images/flower-1.jpg`).default
                                        : count > 8
                                            ? require(`./images/flower-8.jpg`).default
                                            : require(`./images/flower-${count}.jpg`).default}
                                alt='flower growth progression' />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default MindProgress