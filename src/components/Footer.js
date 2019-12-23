import React from "react"
import { Link } from "gatsby"

import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="row">
        <div className={`col-sm-6 ${styles.copyright}`}>
          © {new Date().getFullYear()}
          {` `}
          <Link className={styles.footerName} to="/">
            Rebuilding Together Litchfield
          </Link>
        </div>
        <div className={`col-sm-6 ${styles.copyright}`}>
          <a
            href="https://mattaz.com"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.developer}>
            Mattaz Web Development
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
