import NavBar from "../../../components/NavBar";
import Footer from '../../../components/Footer';

import { Nav } from 'react-bootstrap';
import { 
    Button, 
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText, 
 } from 'reactstrap';
 import { MdSearch, MdOutlineAdd } from 'react-icons/md';

import './MindCommunity.css';

const MindCommunity = () => {
    return (
        <div>
            <NavBar />
            <div className="dashboard-main">
                {/* Left Menu Bar */}
                <div className="community-nav dashboard-nav">
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
                        <Card className="goals">
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CardText>
                                <Button className="tags">
                                    goals
                                </Button>
                                <Button className="tags">
                                    support
                                </Button>
                            </CardBody>
                        </Card>
                        <Card className="wins">
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CardText>
                                <Button className="tags">
                                    wins
                                </Button>
                            </CardBody>
                        </Card>
                        <Card className="struggles">
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CardText>
                                <Button className="tags">
                                    struggles
                                </Button>
                            </CardBody>
                        </Card>
                        <Card className="support">
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
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
