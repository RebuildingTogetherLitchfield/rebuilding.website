import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/Logo_Stacked_black.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#7ac143`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        paddingTop: `1.45rem`,
        textAlign: `center`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img src={logo} alt="Rebuilding Together Logo" />
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
