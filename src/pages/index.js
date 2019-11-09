import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Offer from "../components/Offer"
import Carousel from "../components/Carousel"

import "../styles/index.css"
import construction from "../images/construction.svg"
import map from "../images/rtMap.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel />
    <div className="container-fluid index-intro">
      <div className="row">
        <div className="col-md-6 intro-container">
          <h1 className="intro-heading">Our Mission:</h1>
          <h4 className="mission-text center">
            Repairing homes, revitalizing communities, rebuilding lives.
          </h4>
          <h2 className="vision-heading">Our Vision:</h2>
          <h4 className="vision-text center">
            Safe homes and communities for everyone.
          </h4>
        </div>
        <div className="col-md-6 intro-image-container">
          <img
            className="intro-image"
            alt="House Construction"
            src={construction}
          />
        </div>
      </div>
    </div>
    <Offer />
    <div className="container">
      <div className="row">
        <div className="location-heading col-12">
          <h2 className="center">Where to find Rebuilding Together</h2>
        </div>
      </div>
      <div className="row">
        <div className="location-map col-12">
          <img
            src={map}
            style={{ width: `750`, height: `500` }}
            alt="Service Area"
            className="area-map"
            useMap="#imageMap"
          />
          <map name="imageMap" id="Map">
            <area
              target="_parent"
              alt="Rebuilding Together Litchfield"
              title="Rebuilding Together Litchfield"
              href="https://res.cloudinary.com/mattaz/image/upload/v1572460634/RebuildingTogether/Icons/RebuilderLogo.jpg"
              coords="92,164,201,223"
              shape="rect"
            />
            <area
              target="_parent"
              alt="Rebuilding Together New Britain"
              title="Rebuilding Together New Britain"
              href="#"
              coords="300,180,403,239"
              shape="rect"
            />
            <area
              target="_self"
              alt="Rebuilding Together Hartford"
              title="Rebuilding Together Hartford"
              href="#"
              coords="329,104,436,153"
              shape="rect"
            />
            <area
              target="_blank"
              alt="Rebuilding Together Manchester"
              title="Rebuilding Together Manchester"
              href="#"
              coords="394,26,500,79"
              shape="rect"
            />
          </map>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
