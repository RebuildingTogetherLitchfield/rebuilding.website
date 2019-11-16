import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Offer from "../components/Offer"
import Hero from "../components/Hero"
import CoverageMap from "../components/CoverageMap"
import VolunteerCta from "../components/VolunteerCta"

import "../styles/index.css"
import construction from "../images/construction.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div className="container-fluid index-intro">
      <div className="row">
        <div className="col-md-6 intro-image-container">
          <img
            className="intro-image"
            alt="House Construction"
            src={construction}
          />
        </div>
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
      </div>
    </div>
    <Offer />
    <CoverageMap />
    <VolunteerCta />
  </Layout>
)

export default IndexPage
