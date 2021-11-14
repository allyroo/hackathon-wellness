import { Link } from 'react-router-dom';

import NavBar from "../components/NavBar"
import ProgressBar from '../components/ProgressBar';

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <div style={{"textAlign": "center", "margin": "50px"}}>
                <h1>👋 from dashboard</h1>
                <Link to="/">Home</Link>
            </div>

            <ProgressBar />
        </div>
    )
}

export default Dashboard
