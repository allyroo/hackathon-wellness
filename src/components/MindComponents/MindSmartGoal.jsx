import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { IoIosSunny } from 'react-icons/io';

import './MindSmartGoal.css';

const MindSmartGoal = () => {
    return (
        <div className="current-goal">
            <Card className="card">
                <CardBody>
                    <CardTitle tag="h5">
                        <IoIosSunny /> Mind: Current Smart Goal
                    </CardTitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                    </CardText>
                </CardBody>
            </Card>
         </div>
    )
}

export default MindSmartGoal
