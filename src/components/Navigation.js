import React, { useState } from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import NavDropdown from "react-bootstrap/NavDropdown"

import smLogo from "../images/Logo_Horizontal.png"
import fbLogo from "../images/icons/squareFb.png"
import "./navigation.css"

const Navigation = () => {
  const [isAboutOpen, setAboutOpen] = useState(false)
  const [isHelpOpen, setHelpOpen] = useState(false)
  function toggleAboutMenu() {
    if (!isAboutOpen) setAboutOpen(true)
    else setAboutOpen(false)
  }
  function toggleHelpMenu() {
    if (!isHelpOpen) setHelpOpen(true)
    else setHelpOpen(false)
  }

  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="top_nav">
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
        <a href="https://www.facebook.com/Rebuildingtogetherlitchfield/">
          <img src={fbLogo} className="fb-logo" alt="Facebook" />
        </a>
        <Button
          variant="danger"
          className="donate-btn"
          href="https://secure.anedot.com/rebuilding-together-litchfield-county/donate">
          &hearts; Donate
        </Button>
        <Nav className="right-nav">
          <div className="nav_link bdr-left">
            <Link className="menu_btn" to="/sponsor/">
              Sponsor
            </Link>
          </div>
          <div className="nav_link bdr-left">
            <Link className="menu_btn" to="/volunteer/">
              Volunteer
            </Link>
          </div>
          <NavDropdown
            title="About Us"
            id="basic-nav-dropdown"
            className="dropdown_btn nav_link bdr-left"
            style={{ paddingTop: `7px` }}
            onMouseEnter={toggleAboutMenu}
            onMouseLeave={toggleAboutMenu}
            show={isAboutOpen}>
            <NavDropdown.Item
              onClick={(e) => {
                e.preventDefault()
                navigate("/about-us/")
              }}>
              Learn About Us
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={(event) => {
                event.preventDefault()
                navigate("/strategic-plan/")
              }}>
              Strategic Plan
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={(event) => {
                event.preventDefault()
                navigate("/about-us/")
              }}>
              In The News
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={(e) => {
                e.preventDefault()
                navigate("/board-of-directors/")
              }}>
              Board of Directors
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Get Help"
            id="collapsible-nav-dropdown"
            alignRight={true}
            className="dropdown_btn nav_link bdr-left"
            style={{ paddingTop: `7px` }}
            onMouseEnter={toggleHelpMenu}
            onMouseLeave={toggleHelpMenu}
            show={isHelpOpen}>
            <NavDropdown.Item
              onClick={(e) => {
                e.preventDefault()
                navigate("/application/")
              }}>
              Application
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Deaf HIP Checklist
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={(event) => {
                event.preventDefault()
                navigate("/inspection-review/")
              }}>
              Inspection Review
            </NavDropdown.Item>
            <NavDropdown.Item href="/home-safety-check/">
              Home Safety Check
            </NavDropdown.Item>
          </NavDropdown>
          <div className="nav_link bdr-left">
            <Link className="menu_btn" to="/contact-us/">
              Contact Us
            </Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
