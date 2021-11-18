import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Row, Col, Card, CardTitle, CardText, CardHeader, Button } from 'reactstrap';

import './MindDashboard.css';

import NavBar from '../../../components/NavBar';
import DashboardNav from '../../../components/DashboardElements/DashboardNav';
import DashboardCards from '../../../components/DashboardElements/DashboardCards';
import MindSmartGoal from '../../../components/MindComponents/MindSmartGoal';
import MindResourcesDirectory from '../../../components/MindComponents/MindResourcesDirectory';
import MindResourceMap from '../../../components/MindComponents/MindResourceMap';
import Footer from '../../../components/Footer';
import MindFlowerTracker from '../../../components/MindComponents/MindFlowerTracker';

const MindDashboard = (props) => {

    return (
        <div className="dashboard-class">
            <NavBar />
            <div className="dashboard-main">
                <DashboardNav />
                <div className="mind-dashboard-content">
                    <div className="mind-dashboard-left-col">
                        <NavLink to="/dashboard/mind/progress" style={{ "textDecoration": "none", "color": "#172c66" }}>
                            <div className="mind-dashboard-goal">
                                <MindSmartGoal />
                            </div>
                        </NavLink>
                        <Link to="/dashboard/mind/progress" style={{ "textDecoration": "none"}} >
                            <div className="mind-dashboard-flower-class">
                                {/* from https://codepen.io/lili/pen/RpoLWM */}
                                <MindFlowerTracker />
                                <div className="flower-progress-box">
                                    <div className="flower-progress-water-level">
                                        <div className="progress-percentage">30%</div>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div className="mind-dashboard-right-col">
                            <div className="mind-dashboard-right-top">

                        <NavLink to="/dashboard/mind/resources" style={{ "textDecoration": "none", "color": "#172c66" }}>
                                <h3>Local Resources</h3>
                        </NavLink>
                                <div className="mind-dashboard-local-resources">
                                    <div className="mind-resources-map">
                                        <MindResourceMap />
                                    </div>
                                    <div className="mind-resources-directory" >
                                        <h5>* List of resources</h5>
                                        <MindResourcesDirectory />
                                    </div>
                                </div>
                            </div>
                        <div className="mind-dashboard-bottom-right">
                            <h3>Reflection</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MindDashboard
