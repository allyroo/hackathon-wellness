import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { Dropdown } from "react-bootstrap";
import { IoMdFlower } from "react-icons/io";
import { IoFlowerOutline } from "react-icons/io5";

import "./NavBar.css";
import Avatar from "./UserAvatar";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const pathname = window.location.pathname;

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  return (
    <Navbar expand="md" light className="nav-bar" sticky="top">
      <NavbarBrand href="/">
        <h3>
          <IoFlowerOutline /> Mohala{" "}
        </h3>
      </NavbarBrand>
      <CgMenuRightAlt onClick={toggle} className="nav-menu" />
      <Collapse isOpen={isOpen} navbar className="dropdown">
        <Nav className="" navbar>
          {pathname.includes("dashboard") ? null : (
            <NavItem className="nav-items">
              {/* <NavLink href="/">Home</NavLink> */}
              <NavLink href="/about">About</NavLink>
            </NavItem>
          )}
        </Nav>

        {pathname.includes("dashboard") ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "3vw",
            }}
          >
            <Avatar />
            <h5>Good {timeOfDay}, Zahra!</h5>
            {/* Dropdown */}
          </div>
        ) : (
          <>
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
        )}
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
