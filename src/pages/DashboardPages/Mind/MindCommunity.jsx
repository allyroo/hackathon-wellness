import NavBar from "../../../components/NavBar";
import Footer from '../../../components/Footer';

import { Nav } from 'react-bootstrap';
import { 
    Button, 
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText
 } from 'reactstrap';
 import { MdSearch, MdOutlineAdd } from 'react-icons/md';

import './MindCommunity.css';
import DashboardNav from "../../../components/DashboardElements/DashboardNav";

const MindCommunity = () => {
    return (
        <div>
            <NavBar />
            <div className="dashboard-main community">
                <DashboardNav />

                {/* Main Content */}
                <div className="dashboard-content-community">
                    <div className="top">
                        <h1 className="top-heading">Browse the forum</h1>
                        <div className="search">
                            <MdSearch className='search-icon' size='1.3em' />
                            <input  
                                type='text' 
                                placeholder='Type to search...' 
                            />
                        </div>
                    </div>
                    <div className="community-filters">
                        <ul className="filters">
                            <li className="filter active" >All</li>
                            <li className="filter">Goals</li>
                            <li className="filter">Wins</li>
                            <li className="filter">Struggles</li>
                            <li className="filter">Support</li>
                        </ul>
                    </div>
                    <div className="add">
                        <Button className="add-btn">
                            <MdOutlineAdd />Add Post
                        </Button>
                    </div>
                    <div className="all-posts">
                        <Card className="post">
                            <CardBody>
                                <CardTitle tag="h5">
                                    My Future Goals
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    11-17-2021
                                </CardSubtitle>
                                <CardText>
                                    Hi everyone! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra odio eu consectetur bibendum...
                                </CardText>
                                <Button className="tags">
                                    goals
                                </Button>
                                <Button className="tags">
                                    support
                                </Button>
                            </CardBody>
                        </Card>
                        <Card className="post">
                            <CardBody>
                                <CardTitle tag="h5">
                                    Productive Day 
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    11-11-2021
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CardText>
                                <Button className="tags">
                                    wins
                                </Button>
                            </CardBody>
                        </Card>
                        <Card className="post">
                            <CardBody>
                                <CardTitle tag="h5">
                                    Losing Motivation
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    11-15-2021
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CardText>
                                <Button className="tags">
                                    struggles
                                </Button>
                            </CardBody>
                        </Card>
                        <Card className="post">
                            <CardBody>
                                <CardTitle tag="h5">
                                    Day by Day
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    10-30-2021
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CardText>
                                <Button className="tags">
                                    support
                                </Button>
                                <Button className="tags">
                                    struggles
                                </Button>
                                <Button className="tags">
                                    goals
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MindCommunity
