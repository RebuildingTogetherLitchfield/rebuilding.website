import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import NavDropdown from "react-bootstrap/NavDropdown"

import smLogo from "../images/Logo_Horizontal_green.png"
import "../styles/navigation.css"

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      className="top_nav"
      fixed="top"
    >
      <Navbar.Brand href="https://rebuildingtogetherlitchfield.org">
        <img
          alt="Rebuilding Together Litchfield"
          src={smLogo}
          width="140"
          height="40"
          className="d-inline-block align-top"
          style={{ paddingLeft: `5px` }}
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ marginRight: `10px` }}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Button
          variant="danger"
          className="donate-btn"
          href="https://secure.anedot.com/rebuilding-together-litchfield-county/donate"
        >
          &hearts; Donate
        </Button>
        <Nav className="right-nav">
          <div className="nav_link bdr-left">
            <Link className="menu_btn" to="/about-us/">
              Sponsor
            </Link>
          </div>
          <div className="nav_link bdr-left">
            <Link className="menu_btn" to="/about-us/">
              Volunteer
            </Link>
          </div>
          <NavDropdown
            title="About Us"
            id="basic-nav-dropdown"
            className="dropdown_btn nav_link bdr-left"
            style={{ paddingTop: `7px` }}
          >
            <NavDropdown.Item href="#action/3.1">What We Do</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Strategic Plan
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={event => {
                event.preventDefault()
                navigate("/about-us/")
              }}
            >
              In The News
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Board of Directors
            </NavDropdown.Item>
          </NavDropdown>

          <div className="nav_link bdr-left">
            <Link className="menu_btn" to="/about-us/">
              Contact Us
            </Link>
          </div>
          <NavDropdown
            title="Documents"
            id="collapsible-nav-dropdown"
            alignRight="true"
            className="dropdown_btn nav_link bdr-left"
            style={{ paddingTop: `7px` }}
          >
            <NavDropdown.Item href="#action/3.1">Application</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Deaf HIP Checklist
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={event => {
                event.preventDefault()
                navigate("/about-us/")
              }}
            >
              Inspection Review
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Home Safety Check
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
