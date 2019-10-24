import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/Logo_Stacked_black.png"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `#7ac143`,
      paddingTop: `1rem`,
      marginBottom: `1.5rem`,
      minHeight: `210px`,
    }}
    className="d-none d-md-block"
  >
    <div
      style={{
        margin: `0 auto`,
        textAlign: `center`,
      }}
    >
      <div
        className="head_nav-left"
        style={{ float: `left`, paddingLeft: `360px` }}
      >
        <a href="#" style={{ textTransform: `uppercase`, fontSize: `26px` }}>
          <span
            className="small-word"
            style={{ fontSize: `18px`, display: `block` }}
          >
            In The{" "}
          </span>
          News
        </a>
      </div>
      <div
        className="head_nav-right"
        style={{ float: `right`, paddingRight: `360px` }}
      >
        <a href="#" style={{ textTransform: `uppercase`, fontSize: `26px` }}>
          <span
            className="small-word"
            style={{ fontSize: `18px`, display: `block` }}
          >
            Get
          </span>
          Involved
        </a>
      </div>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img
          src={logo}
          style={{ maxWidth: `260px` }}
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
