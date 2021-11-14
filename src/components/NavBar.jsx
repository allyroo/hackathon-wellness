import React, { useState } from 'react';
import {
    Navbar, 
    NavbarBrand, 
    NavbarToggler, 
    Collapse, 
    Nav, 
    NavItem, 
    NavLink, 
    Button } from 'reactstrap';
import { Link } from "react-router-dom";

import './NavBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <Navbar
            expand="md"
            light
            className="nav-bar"
        >
            <NavbarBrand href="/">
                <h3>SUPERBLOOM</h3>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                        <NavLink href="/">
                            About
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <Link to="/login">
                        <Button className="button-class" outline>
                            Login
                        </Button>
                    </Link>
                </Collapse>
        </Navbar>
    )
}

export default NavBar
