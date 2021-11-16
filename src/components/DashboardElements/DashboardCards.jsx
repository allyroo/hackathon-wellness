import { Card, CardTitle, CardText, Button } from 'reactstrap';
import { Nav } from 'react-bootstrap';

import './DashboardCards.css';

const DashboardCards = () => {

    return (
        <div className="card-class">
            <Card className="card-class-body" body>
                <Button className="card-class-button">
                    {/* <Nav.Link href="/">Community</Nav.Link> */}
                    Community
                </Button>
                <CardTitle tag="h5" style={{"marginTop": "20px"}}>
                    Smart Goal Display
                </CardTitle>
                <CardText>
                    ** REPLACE EACH CARD WITH DIFFERENT PILLARS COMPONENTS <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptatibus porro maxime minus ratione ducimus numquam modi. Sequi doloremque 
                </CardText>
            </Card>
        </div>
    )
}

export default DashboardCards
