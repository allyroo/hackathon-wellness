import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Row, Col, Card, CardTitle, CardText, CardHeader, Button } from 'reactstrap';


import './FitnessDashboard.css';
import NavBar from '../../../components/NavBar';
import DashboardNav from '../../../components/DashboardElements/DashboardNav';
import DashboardCards from '../../../components/DashboardElements/DashboardCards';

const FitnessDashboard = (props) => {
    return (
        <div className="dashboard-class">
            <NavBar />
            <div className="dashboard-main">
                <DashboardNav />
                <div className="dashboard-content">
                    <Row className="dashboard-row">
                        {/* TO BE REPLACED WITH EACH PILLAR COMPS */}
                        {/* PILLAR # 1 */}
                        {/* PILLAR # 2 */}
                        <Col sm="5" style={{"margin":"10px"}}>
                            <Card className="card-example">
                                <CardHeader tag="h4" style={{ "textAlign": "center","backgroundColor":"#8bd3dd", "color": 
                            "#fef6e4" }}>FITNESS</CardHeader>
                                <div className="pillar2">
                                    <div className="image">map</div>

                                    <div className="list">
                                        <ul>List of locations
                                            <li>12345 Bel-Red Rd</li>
                                            <li>12345 Bel-Red Rd</li>
                                            <li>12345 Bel-Red Rd</li>
                                            <li>12345 Bel-Red Rd</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="dashboard-row">
                        {/* PILLAR # 3 */}
                        <Col sm="5">
                            
                        </Col>
                        {/* PILLAR # 4 */}
                        <Col sm="5">
                            <DashboardCards />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default FitnessDashboard
