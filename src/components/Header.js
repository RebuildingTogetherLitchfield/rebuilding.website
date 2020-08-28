import React from "react"

import "./navigation.css"

const Header = (props) => {
  const styles = {
    background: `#7ac143`,
    margin: `auto`,
    minHeight: `150px`,
    color: `#000000`,
  }
  return (
    <header className="header-main" style={styles}>
      <div className="header-container" style={{ textAlign: `center` }}>
        <h2 className="header-heading">{props.pageHeading}</h2>
      </div>
    </header>
  )
}

export default Header
