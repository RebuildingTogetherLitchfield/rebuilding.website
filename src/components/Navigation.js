import React from "react"
import { Link } from "gatsby"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"

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
    >
      <Navbar.Brand
        href="https://rebuildingtogetherlitchfield.org"
        className="d-xl-none d-lg-none d-md-none"
      >
        <img
          alt="Rebuilding Together Litchfield"
          src={smLogo}
          width="120"
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
        <Nav className="left-nav">
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
          <div className="nav_link bdr-right">
            <Link
              className="menu_btn d-xl-none d-lg-none d-md-none"
              to="/about-us/"
            >
              In the News
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
        <Nav className="right-nav">
          <div className="nav_link bdr-left">
            <Link className="menu_btn" to="/about-us/">
              Contact Us
            </Link>
          </div>
          <div className="nav_link bdr-left">
            <Link
              className="menu_btn d-xl-none d-lg-none d-md-none"
              to="/about-us/"
            >
              Get Involved
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
