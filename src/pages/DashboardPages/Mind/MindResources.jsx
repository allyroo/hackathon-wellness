import NavBar from "../../../components/NavBar";

import { Nav } from 'react-bootstrap';
import { Button } from 'reactstrap';

import './MindResources.css'
import Footer from "../../../components/Footer";

const MindResources = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    console.log(apiKey);

    return (
        <div>
            <NavBar />
            <div className="dashboard-main">
                {/* Left Menu Bar */}
                <div className="dashboard-nav">
                    <Nav defaultActiveKey="/" className="dashboard-links flex-column">
                        <Button className="dashboard-button" outline>
                            <Nav.Link href="/dashboard/progress" className="link">Progress</Nav.Link>
                        </Button>
                        <Button className="dashboard-button" outline>
                            <Nav.Link href="/dashboard/community" className="link">Community</Nav.Link>
                        </Button>
                        <Button className="dashboard-button" outline style={{ "backgroundColor": "#001858" }}>
                            <Nav.Link href="/dashboard/resources" className="link" style={{ "color": "#fef6e4" }}>Resources</Nav.Link>
                        </Button>
                        <Button className="dashboard-button" outline>
                            <Nav.Link href="/dashboard/support" className="link">Support</Nav.Link>
                        </Button>
                    </Nav>
                </div>
                {/* Main Content */}
                <div className="dashboard-content-resources">
                    <h2>from resources page</h2>
                    <iframe
                        title="resource-map"
                        width="350"
                        height="230"
                        style={{"border":"0"}}
                        loading="lazy"
                        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Space+Needle,Seattle+WA`}>
                    </iframe>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default MindResources
