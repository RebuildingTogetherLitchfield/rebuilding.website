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
import BnD from "../images/logos/BnDcontrol.jpg"
import sentinel from "../images/logos/sentinel.jpg"
import alliedRoof from "../images/logos/alliedRoof.jpg"

const LogoCarousel = () => {
  return (
    <div className={`container-fluid ${styles.logoCarousel}`}>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          <div className={styles.slide}>
            <img
              src={lowesLogo}
              alt="This Sponsor is Lowes"
              height="100"
              width="250"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={homeDepot}
              height="100"
              width="250"
              alt="This Sponsor is Home Depot"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={searsLogo}
              height="100"
              width="250"
              alt="This Sponsor is Sears"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={websterBank}
              height="100"
              width="250"
              alt="This Sponsor is Webster Bank"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={boaLogo}
              height="100"
              width="250"
              alt="This Sponsor is Bank of America"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={microsoftLogo}
              height="100"
              width="250"
              alt="This Sponsor is Microsoft"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={commFoundation}
              height="100"
              width="250"
              alt="This Sponsor is Community Foundation"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={bogues}
              height="100"
              width="250"
              alt="This Sponsor is Michael Bogues Construction"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={BnD}
              height="100"
              width="250"
              alt="This Sponsor is B &amp; D Controlled Air Corp"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={sentinel}
              height="100"
              width="250"
              alt="This Sponsor is The Greenwich Sentinel"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={alliedRoof}
              height="100"
              width="250"
              alt="This Sponsor is Allied Roofing &amp; Sheet Metal"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={lowesLogo}
              alt="This Sponsor is Lowes"
              height="100"
              width="250"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={homeDepot}
              height="100"
              width="250"
              alt="This Sponsor is Home Depot"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={searsLogo}
              height="100"
              width="250"
              alt="This Sponsor is Sears"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={websterBank}
              height="100"
              width="250"
              alt="This Sponsor is Webster Bank"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={boaLogo}
              height="100"
              width="250"
              alt="This Sponsor is Bank of America"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={microsoftLogo}
              height="100"
              width="250"
              alt="This Sponsor is Microsoft"
            />
          </div>
          <div className={styles.slide}>
            <img
              src={commFoundation}
              height="100"
              width="250"
              alt="This Sponsor is Community Foundation"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoCarousel
