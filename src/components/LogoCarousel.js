import React from "react"
import styles from "./logocarousel.module.css"
import sliderImg from "../data/sliderImg"

const LogoCarousel = () => {
  const sliderImage = sliderImg.map((img) => {
    return (
      <div className={styles.slide}>
        <img
          key={img.name}
          src={img.src}
          alt={img.alt}
          height="100"
          width="250"
        />
      </div>
    )
  })

  return (
    <div className={`container-fluid ${styles.logoCarousel}`}>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>{sliderImage}</div>
      </div>
    </div>
  )
}

export default LogoCarousel
