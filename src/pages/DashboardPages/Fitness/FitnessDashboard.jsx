import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Row, Col, Card, CardTitle, CardText, CardHeader, Button } from 'reactstrap';


import './FitnessDashboard.css';
import NavBar from '../../../components/NavBar';
import DashboardNav from '../../../components/DashboardElements/DashboardNav';
import DashboardCards from '../../../components/DashboardElements/DashboardCards';
import MindSmartGoal from '../../../components/MindComponents/MindSmartGoal';
import Footer from '../../../components/Footer';

const FitnessDashboard = (props) => {
    return (
        <div className="dashboard-class">
            <NavBar />
            <div className="dashboard-main">
                <DashboardNav />
                <div className="dashboard-content">
                    <div className="fitness-dashboard-goal">

                    <MindSmartGoal />
                    </div>
                
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FitnessDashboard
