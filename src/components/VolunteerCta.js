import React from "react"
import { Link } from "gatsby"

import styles from "./volunteerCta.module.css"
import backgroundImage from "../images/volBg.png"

const VolunteerCta = () => {
  return (
    <div
      className={styles.becomeVolunteer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1">
            <div className={`text-center ${styles.volunteerText}`}>
              <h3>Become a Volunteer</h3>
              <p>
                Join us at Rebuilding Together and begin making a difference in
                peoples lives!
                <br />
                Get Involved! Make a difference! Support our organization! We
                are always in need of skilled craftsman and people willing to
                work!
              </p>
              <Link to="/volunteer/" className="btn btn-danger">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default VolunteerCta
