import NavBar from "../../../components/NavBar";

import { Nav } from 'react-bootstrap';
import { Button } from 'reactstrap';

import './MindSupport.css'
import DashboardNav from "../../../components/DashboardElements/DashboardNav";

const MindSupport = () => {
    return (
        <div>
            <NavBar />
            <div className="dashboard-main">
                <DashboardNav />

                {/* Main Content */}
                <div className="dashboard-content-support">
                    <h2>from support page</h2>
                </div>
            </div>
        </div>
    )
}

export default MindSupport
