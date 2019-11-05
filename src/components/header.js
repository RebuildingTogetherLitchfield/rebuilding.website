import React from "react"

import "./navigation.css"

const Header = props => {
  return (
    <header className="header-main">
      <div className="header-container">
        <h2 className="header-heading">{props.pageHeading}</h2>
      </div>
    </header>
  )
}

export default Header
