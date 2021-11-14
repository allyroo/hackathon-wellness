import { Link } from 'react-router-dom';

import NavBar from "../components/NavBar"

const Landing = () => {
    return (
        <div>
            <NavBar />
            <div style={{"textAlign": "center", "margin": "50px"}}>
            <h1>👋 from index page</h1>
                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="signup">Signup</Link>
                </nav>
            </div>
        </div>
    )
}

export default Landing
