import NavBar from "../../../components/NavBar";

import { Nav } from 'react-bootstrap';
import { Button } from 'reactstrap';

import './MindCommunity.css';

const MindCommunity = () => {
    return (
        <div>
            <NavBar />
            <div className="dashboard-main">
                <div className="dashboard-nav">
                    <Nav defaultActiveKey="/" className="dashboard-links flex-column">
                        <Button className="dashboard-button" outline>
                            <Nav.Link href="/dashboard/progress" className="link">Progress</Nav.Link>
                        </Button>
                        <Button className="dashboard-button" outline style={{ "backgroundColor": "#001858" }}>
                            <Nav.Link href="/dashboard/community" className="link" style={{ "color": "#fef6e4" }}>Community</Nav.Link>
                        </Button>
                        <Button className="dashboard-button" outline>
                            <Nav.Link href="/dashboard/resources" className="link">Resources</Nav.Link>
                        </Button>
                        <Button className="dashboard-button" outline>
                            <Nav.Link href="/dashboard/support" className="link">Support</Nav.Link>
                        </Button>
                    </Nav>
                </div>
                <div className="dashboard-content">
                    <h2>from community page</h2>
                </div>


            </div>
        </div>
    )
}

export default MindCommunity
