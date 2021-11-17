import { useState } from 'react';

import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { BsBoxArrowInUpRight } from "react-icons/bs";

import './DashboardNav.css';
import DashboardDropdown from './DashboardDropdown';

const DashboardNav = (props) => {

    let buttonColorEnabled = { "backgroundColor": "#001858" };
    let buttonColorDisabled = { "backgroundColor": "#f3d2c1" };
    let linkColorEnabled = { "color": "#fef6e4" };
    let linkColorDisabled = { "color": "#001858" };

    const pathname = window.location.pathname;
    let pillar = "";

    if (pathname.includes('mind')) {
        pillar = 'mind/';
    } else if (pathname.includes('fitness')) {
        pillar = 'fitness/'
    } else if (pathname.includes('rest')) {
        pillar = 'rest/'
    } else if (pathname.includes('nutrition')) {
        pillar = 'nutrition/'
    }

    // switch(pathname.includes(pillar)) {
    //     case pillar === "mind":
    //         pillar = 'mind/'
    //         break;
    //     case pillar === "fitness":
    //         pillar = 'fitness/'
    //         break;
    //     case pillar === "rest":
    //         pillar = 'rest/'
    //         break;
    //     case pillar === "nutrition":
    //         pillar = 'nutrition/'
    //         break;
    //     default:
    //         pillar = ""
    // }

    return (
        <div className="dashboard-nav">
            <div className="dashboard-dropdown-class" >
                <DashboardDropdown />
            </div>
            <Nav defaultActiveKey="/" className="dashboard-links flex-column">
                <Button
                    className="dashboard-button"
                    outline
                    style={pathname.includes('progress') ? buttonColorEnabled : buttonColorDisabled}
                >
                    <Nav.Link
                        href={`/dashboard/${pillar}progress`}
                        className="link"
                        style={pathname.includes('progress') ? linkColorEnabled : linkColorDisabled}
                    >Progress</Nav.Link>
                </Button>
                <Button
                    className="dashboard-button"
                    outline
                    style={pathname.includes('community') ? buttonColorEnabled : buttonColorDisabled}
                >
                    <Nav.Link
                        href={`/dashboard/${pillar}community`}
                        className="link"
                        style={pathname.includes('community') ? linkColorEnabled : linkColorDisabled}
                    >Community</Nav.Link>
                </Button>
                <Button
                    className="dashboard-button"
                    outline
                    style={pathname.includes('resources') ? buttonColorEnabled : buttonColorDisabled}
                >
                    <Nav.Link
                        href={`/dashboard/${pillar}resources`}
                        className="link"
                        style={pathname.includes('resources') ? linkColorEnabled : linkColorDisabled}
                    >Resources</Nav.Link>
                </Button>
                <Button
                    className="dashboard-button"
                    outline
                    style={pathname.includes('support') ? buttonColorEnabled : buttonColorDisabled}
                >
                    <Nav.Link
                        href={`/dashboard/${pillar}support`}
                        className="link"
                        style={pathname.includes('support') ? linkColorEnabled : linkColorDisabled}
                    >Support</Nav.Link>
                </Button>
            </Nav>
            <h6><a href={`/dashboard/${pillar}`}>Back to Main Menu <BsBoxArrowInUpRight className="article-link-icon" /></a></h6>

        </div>
    )
}

export default DashboardNav
