import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from 'react-icons/cg';
import { Dropdown } from 'react-bootstrap';

import './NavBar.css';
import Avatar from './UserAvatar';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const pathname = window.location.pathname;

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
            <CgMenuRightAlt onClick={toggle} className="nav-menu" />
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

                {pathname.includes("dashboard")
                    ? <div style={{ "display": "flex", "alignItems": "center", "marginLeft": "20px" }}>
                        <Avatar />
                        <h5>Hi Sophie!</h5>
                        {/* Dropdown */}
                    </div>
                    : <>
                        <NavLink href="/signup">
                            <Button className="button-class" outline>
                                Sign Up
                            </Button>
                        </NavLink>
                        <NavLink href="/login">
                            <Button className="button-class outline-btn" outline>
                                Log In
                            </Button>
                        </NavLink>
                    </>
                }


            </Collapse>

        </Navbar>
    )
}

export default NavBar
