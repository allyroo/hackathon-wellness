import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { IoIosSunny } from 'react-icons/io';

import './MindSmartGoal.css';

const MindSmartGoal = () => {

    const pathname = window.location.pathname;
    let pillar = "";
    let goal = "You haven't set up your goal yet!";

    if (pathname.includes('mind')) {
        pillar = 'Mind';
        goal = "Meditate for 10 minutes before breakfast!"
    } else if (pathname.includes('fitness')) {
        pillar = 'Fitness';
        goal = "Fitness goal shows here"
    } else if (pathname.includes('rest')) {
        pillar = 'Rest';
        goal = "Goal for resting shows here"
    } else if (pathname.includes('nutrition')) {
        pillar = 'Nutrition';
        goal = "Goal for nutrition shows here";
    }

    return (
        <div className="current-goal">
            <Card className="card">
                <CardBody>
                    <CardTitle className="smart-goal-title" tag="h4">
                        <IoIosSunny /> {pillar}: Current Smart Goal
                    </CardTitle>
                    <CardText className="smart-goal-text">
                        {goal}
                    </CardText>
                </CardBody>
            </Card>
         </div>
    )
}

export default MindSmartGoal
