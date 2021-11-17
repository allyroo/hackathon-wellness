import NavBar from "../../../components/NavBar";

import { Nav } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { BsGeoAltFill, BsBookmarkCheckFill, BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import './MindResources.css'
import Footer from "../../../components/Footer";
import DashboardNav from "../../../components/DashboardElements/DashboardNav";
import MindResourcesDirectory from "../../../components/MindComponents/MindResourcesDirectory";
import MindResourceMap from "../../../components/MindComponents/MindResourceMap";

const MindResources = (props) => {

    return (
        <div>
            <NavBar />
            <div className="dashboard-main">
                <DashboardNav />
                {/* Main Content */}
                <div className="dashboard-content-resources">
                    {/* Map and Directory */}
                    <div className="support-group-class">
                        <MindResourceMap />
                        <div className="resources-directory">
                            <h3><BsGeoAltFill className="directory-icon" />Directory<BsGeoAltFill className="directory-icon" /></h3>
                            <MindResourcesDirectory />
                        </div>
                    </div>
                </div>
                <div className="article-class">
                    <h3><BsBookmarkCheckFill className="article-icon" />Helpful Articles</h3>
                    <div className="article-class-content">
                        <ul>
                            <li>
                                <a 
                                    href="https://newsinhealth.nih.gov/2014/12/feeling-stressed" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                > Feeling Stressed? <BsBoxArrowInUpRight className="article-link-icon" />
                                </a>
                            </li>
                            <li>
                                <a 
                                href="https://newsinhealth.nih.gov/2012/01/mindfulness-matters" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >Mindfulness Matters <BsBoxArrowInUpRight className="article-link-icon" />
                                </a>
                            </li>
                            <li>
                                <a 
                                href="https://www.nccih.nih.gov/health/relaxation-techniques-what-you-need-to-know" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >Relaxation Techniques <BsBoxArrowInUpRight className="article-link-icon" />
                                </a>
                            </li>
                        </ul>
                        <div className="article-more-content">

                        <div className="divider"></div>

                        {/* article from https://newsinhealth.nih.gov/2012/01/mindfulness-matters */}
                        <p class="mindful-tips">
                            <h4>Being Mindful</h4>
                            <h6>The concept of mindfulness is simple, but becoming a more mindful person requires commitment and practice. Here are some tips to help you get started:</h6>
                            <ul>
                                <li><strong>Take some deep breaths.</strong> Breathe in through your nose to a count of 4, hold for 1 second and then exhale through the mouth to a count of 5. Repeat often.</li>
                            </ul>
                            <ul>
                                <li><strong>Enjoy a stroll. </strong> As you walk, notice your breath and the sights and sounds around you. As thoughts and worries enter your mind, note them but then return to the present.</li>
                            </ul>
                            <ul>
                                <li><strong>Practice mindful eating.</strong> Be aware of taste, textures and flavors in each bite, and listen to your body when you are hungry and full.</li>
                            </ul>
                            <ul>
                                <li><strong>Find mindfulness resources in your local community,</strong> including yoga and meditation classes, mindfulness-based stress reduction programs and books.</li>
                            </ul>
                        </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default MindResources
