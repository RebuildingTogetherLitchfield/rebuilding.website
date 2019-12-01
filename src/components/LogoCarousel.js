import React from "react"
import styles from "./logocarousel.module.css"
import lowesLogo from "../images/logos/lowesLogo1.jpg"
import homeDepot from "../images/logos/homeDepot9.jpg"
import searsLogo from "../images/logos/searsLogo1.jpg"
import websterBank from "../images/logos/websterBank.jpg"
import boaLogo from "../images/logos/boaLogo.jpg"
import microsoftLogo from "../images/logos/microsoftLogo.jpg"
import commFoundation from "../images/logos/commFoundation1.jpg"
import bogues from "../images/logos/bogues1.jpg"

const LogoCarousel = () => {
  return (
    <div className={`container ${styles.logoCarousel}`}>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          <div className={styles.slide}>
            <img
              src={lowesLogo}
              alt="Sponsor is Lowes"
              height="100"
              width="250"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={homeDepot}
              height="100"
              width="250"
              alt="Sponsor is Home Depot"
            />
          </div>
          <div className={styles.slide}>
            <img src={searsLogo} height="100" width="250" alt="" />
          </div>
          <div className={styles.slide}>
            <img
              src={websterBank}
              height="100"
              width="250"
              alt="Sponsor is Webster Bank"
            />
          </div>
          <div className={styles.slide}>
            <img src={boaLogo} height="100" width="250" alt="" />
          </div>
          <div className={styles.slide}>
            <img src={microsoftLogo} height="100" width="250" alt="" />
          </div>
          <div className={styles.slide}>
            <img
              src={commFoundation}
              height="100"
              width="250"
              alt="Sponsor is Community Foundation"
            />
          </div>
          <div className={styles.slide}>
            <img src={bogues} height="100" width="250" alt="" />
          </div>
          <div className={styles.slide}>
            <img
              src="https://i.ibb.co/wd7FSnZ/brand-number-ten-1.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className={styles.slide}>
            <img
              src="https://i.ibb.co/fDL9QLz/brand-number-eleven.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className={styles.slide}>
            <img
              src="https://i.ibb.co/z5YCnWD/brand-number-twelve.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className={styles.slide}>
            <img src="" height="100" width="250" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoCarousel
