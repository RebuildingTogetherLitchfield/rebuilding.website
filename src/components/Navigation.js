import React from "react"
import { Link } from "gatsby"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"

import "../styles/navigation.css"

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      className="top_nav"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="nav_link bdr-right">
            <Link className="menu_btn" to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link className="nav_link bdr-right">
            <Link className="menu_btn" to="/about-us/">
              About Us
            </Link>
          </Nav.Link>
        </Nav>
        <Button variant="danger" className="donate-btn">
          &hearts; Donate
        </Button>
        <Nav>
          <Nav.Link className="nav_link bdr-left">
            <Link className="menu_btn" to="#">
              Volunteer
            </Link>
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className="nav_link bdr-left">
            <Link className="menu_btn" to="#">
              Documents
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
