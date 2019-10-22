import React from "react"
import { Link } from "gatsby"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import "../styles/twt-styles.css"

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="top_nav_desktop"
      style={{ padding: `0` }}
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto top_nav_desktop">
          <div className="top_nav top_nav-left">
            <ul className="menu nav navbar-nav">
              <li className="first leaf">
               
                <Link className="menu_slide_btn" to="/about-us/">
                  Menu item 1
                </Link>
               
              </li>
              <li className="leaf">
               
                <Link className="menu_slide_btn" to="/about-us/">
                  Menu item 2
                </Link>
              
              </li>
              <li className="last leaf">
              
                <Link className="menu_slide_btn" to="/about-us/">
                  Menu item 3
                </Link>
              
              </li>
            </ul>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
