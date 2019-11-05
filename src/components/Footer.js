import React from "react"
import { Link } from "gatsby"

import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-sm-6 copyright color-green">
          © {new Date().getFullYear()}
          {` `}
          <Link style={{ textDecoration: `none`, color: `#89c538` }} to="/">
            Rebuilding Together Litchfield
          </Link>
        </div>
        <div className="col-sm-6 copyright">
          <a
            href="https://mattaz.com"
            target="_blank"
            rel="noreferrer noopener"
            className="developer"
          >
            Mattaz Web Development
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
