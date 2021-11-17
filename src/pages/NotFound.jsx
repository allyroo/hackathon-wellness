import { Link } from 'react-router-dom';
import WarningPage from '../components/images/warning.svg';
import UnderConstruction from '../components/images/not-found.svg';
import { BsBoxArrowInUpRight } from "react-icons/bs";

import './NotFound.css';

const NotFound = () => {
    return (
        <div className="page-not-found">
            {/* <img src ={WarningPage} alt="page not found SVG"/> */}
            <div className="page-not-found-img">
                <img src={UnderConstruction} alt="page not found SVG" />

            </div>
            <div className="page-not-found-link">
                <h2>Page Not Found</h2>
                <h2><Link to="/" style={{"color":"#8bd3dd"}}><BsBoxArrowInUpRight /> Back to Home</Link></h2>
            </div>
        </div>
    )
}

export default NotFound
