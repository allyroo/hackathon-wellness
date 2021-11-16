import { useState } from 'react';

import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Button } from 'reactstrap';

import './DashboardNav.css';

const DashboardNav = (props) => {

    return (
        <div className="dashboard-nav">
            <Nav defaultActiveKey="/" className="dashboard-links flex-column">
                <Button className="dashboard-button" outline>
                    <Nav.Link href="/dashboard/progress" className="link">Progress</Nav.Link>
                </Button>
                <Button className="dashboard-button" outline>
                    <Nav.Link href="/dashboard/community" className="link">Community</Nav.Link>
                </Button>
                <Button className="dashboard-button" outline>
                    <Nav.Link href="/dashboard/resources" className="link">Resources</Nav.Link>
                </Button>
                <Button className="dashboard-button" outline>
                    <Nav.Link href="/dashboard/support" className="link">Support</Nav.Link>
                </Button>
            </Nav>

        </div>
    )
}

export default DashboardNav
