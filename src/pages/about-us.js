import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Header from "../components/Header"

const SecondPage = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <Header pageHeading="About Rebuilding Together Litchfield County" />
      <div className="container">
        <div className="row">
          <h1 className="about-heading">Our Mission</h1>
        </div>
        <div className="row">
          <p className="mission-text col-sm-7">
            Repairing homes, revitalizing communities, rebuilding lives. We
            preserve and revitalize houses and communities, assuring that
            low-income homeowners, particularly those who are elderly, disabled
            and/or supporting young children, live in safety and warmth.
            National Rebuild Day is on the last Saturday in April.{" "}
          </p>
          <img
            src="https://res.cloudinary.com/mattaz/image/upload/v1572459613/RebuildingTogether/2016-07-28_group.png"
            alt="Rebuilding Together Crew"
          />
          >
        </div>
      </div>
    </Layout>
  )
}

export default SecondPage
