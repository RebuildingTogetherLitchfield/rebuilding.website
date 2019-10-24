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
          <div className="nav_link bdr-right">
            <Link className="menu_btn" to="/">
              Home
            </Link>
          </div>
          <div className="nav_link bdr-right">
            <Link className="menu_btn" to="/about-us/">
              About Us
            </Link>
          </div>
        </Nav>
        <Button
          variant="danger"
          className="donate-btn"
          href="https://secure.anedot.com/rebuilding-together-litchfield-county/donate"
        >
          &hearts; Donate
        </Button>
        <Nav>
          <div className="nav_link bdr-left">
            <Link className="menu_btn" to="/about-us/">
              Volunteer
            </Link>
          </div>
          <div className="nav_link bdr-left">
            <Link className="menu_btn" to="/about-us/">
              Documents
            </Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
