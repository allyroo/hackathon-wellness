import { Navbar, NavbarBrand, Button } from "reactstrap"
import { Link } from "react-router-dom";

import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar
            expand="md"
            light
            className="nav-bar"
        >
            <NavbarBrand href="/">
                <h3>SUPERBLOOM</h3>
            </NavbarBrand>
            <Link to="/login">
                <Button className="button-class" outline>
                    Login
                </Button>
            </Link>
        </Navbar>
    )
}

export default NavBar
