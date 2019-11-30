import React from "react"
import { navigate } from "gatsby"

import styles from "./hero.module.css"

const Hero = props => {
  return (
    <div
      className={styles.heroImage}
      style={{
        backgroundImage: `url(${props.imageUrl})`,
        height: `${props.height}`,
      }}
    >
      <div className={styles.heroWriting}>
        <h1 className={styles.heroHeading}>
          Rebuilding Together Litchfield County
        </h1>
        <p className={styles.heroText}>
          I am a <span className={styles.turnGreen}>[Re]</span>builder
        </p>
        <button
          className="btn btn-success"
          onClick={e => {
            e.preventDefault()
            navigate("/volunteer/")
          }}
        >
          Become a Volunteer
        </button>
      </div>
    </div>
  )
}

export default Hero
