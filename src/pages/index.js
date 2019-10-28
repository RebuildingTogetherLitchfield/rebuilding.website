import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"

import "../styles/index.css"
import construction from "../images/construction.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
          <img className="intro-image" src={construction} />
        </div>
      </div>
    </div>

    <Link to="/about-us/">Go to About Us</Link>
  </Layout>
)

export default IndexPage
