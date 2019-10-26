import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/Logo_Stacked_black.png"
import "../styles/navigation.css"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="d-none d-md-block header-main">
    <div className="header-container">
      <div className="head_nav-left">
        <a href="#" className="head-nav">
          <span className="small-word">In The </span>
          News
        </a>
      </div>
      <div className="head_nav-right">
        <a href="#" className="head-nav">
          <span className="small-word">Get</span>
          Involved
        </a>
      </div>
      <Link to="/" className="link-logo">
        <img
          src={logo}
          className="header-logo"
          alt="Rebuilding Together Logo"
        />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
