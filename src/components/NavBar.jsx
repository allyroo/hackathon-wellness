import React, { useState } from 'react';
import {
    Navbar, 
    NavbarBrand, 
    Collapse, 
    Nav, 
    NavItem, 
    NavLink, 
    Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from 'react-icons/cg';

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
            sticky="top"
        >
            <NavbarBrand href="/">
                <h3>SUPERBLOOM</h3>
            </NavbarBrand>
            <CgMenuRightAlt onClick={toggle} className="nav-menu"/>
                <Collapse isOpen={isOpen} navbar className="dropdown">
                    <Nav
                        className=""
                        navbar
                    >
                        <NavItem className="nav-items"> 
                            <NavLink href="/">
                                Home
                            </NavLink>
                            <NavLink href="/about">
                                About
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Link to="signup">
                        <Button className="button-class" outline>
                            Sign Up
                        </Button>
                    </Link>
                    <Link to="login">
                        <Button className="button-class" outline>
                            Log In
                        </Button>
                    </Link>
                </Collapse>
        </Navbar>
    )
}

export default NavBar
