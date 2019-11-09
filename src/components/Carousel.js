import React from "react"

import Carousel from "react-bootstrap/Carousel"
import firstCarousel from "../images/carousel1b.jpg"
import secondCarousel from "../images/carousel1a.jpg"
import thirdCarousel from "../images/carousel3a.jpg"

const ImgCarousel = () => {
  return (
    <Carousel fade={true} pauseOnHover={false} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 caro-img"
          src={firstCarousel}
          alt="Kent School Helpers"
        />
        <Carousel.Caption>
          <h1
            style={{
              color: `#89c853`,
              fontSize: `3em`,
              fontWeight: 800,
              textShadow: `2px 2px 4px #000000`,
            }}
          >
            Rebuilding Together Litchfield County
          </h1>
          <p style={{ color: `#000000`, fontSize: `1.5em` }}>
            I am a <span style={{ color: `#89c853` }}>[Re]</span>builder
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caro-img"
          src={secondCarousel}
          alt="Our Volunteers"
        />

        <Carousel.Caption>
          <h1
            style={{
              color: `#89c853`,
              fontSize: `3em`,
              fontWeight: 800,
              textShadow: `2px 2px 4px #000000`,
            }}
          >
            Rebuilding Together Litchfield County
          </h1>
          <p style={{ color: `#000000`, fontSize: `1.5em` }}>
            I am a <span style={{ color: `#89c853` }}>[Re]</span>builder
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caro-img"
          src={thirdCarousel}
          alt="Carpenter Cutting Wood"
        />

        <Carousel.Caption>
          <h1
            style={{
              color: `#89c853`,
              fontSize: `3em`,
              fontWeight: 800,
              textShadow: `2px 2px 4px #000000`,
            }}
          >
            Rebuilding Together Litchfield County
          </h1>
          <p style={{ color: `#000000`, fontSize: `1.5em` }}>
            I am a <span style={{ color: `#89c853` }}>[Re]</span>builder
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ImgCarousel
