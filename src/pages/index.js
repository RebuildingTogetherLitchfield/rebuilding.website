import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Offer from "../components/Offer"
import Hero from "../components/Hero"
import CoverageMap from "../components/CoverageMap"
import VolunteerCta from "../components/VolunteerCta"
import ProgressBar from "react-bootstrap/ProgressBar"
import VisibilitySensor from "react-visibility-sensor"
import CountUp from "react-countup"

import "../styles/index.css"
import construction from "../images/construction.svg"
import heroImage from "../images/hero2.png"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero imageUrl={heroImage} height={`100vh`} />
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
      <div className="container get-involved">
        <div className="row">
          <h4 className="getInvolved-heading center">How to get involved:</h4>
        </div>
        <div className="row">
          <h5 className="getInvolved-sub">Donations &amp; Grants</h5>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ProgressBar
              animated
              variant="success"
              now={56}
              style={{ height: `45px` }}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="getInvolved-text col-md-8">
            <div className="text mt-4 d-md-flex">
              <div className="one d-flex">
                <div className="mr-4">
                  <h2 className="percentage">
                    <CountUp end={56} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    %
                  </h2>
                </div>
                <div className="goal">
                  <p className="d-flex">
                    <span>Collected:</span>
                    <span>$55,000</span>
                  </p>
                  <p className="d-flex">
                    <span>Goal:</span>
                    <span>$99,500</span>
                  </p>
                </div>
              </div>
              <div className="donate-link text-md-right">
                <p>
                  <a
                    href="https://secure.anedot.com/rebuilding-together-litchfield-county/donate"
                    className="btn btn-success"
                  >
                    Donate now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row rebuildDay">
          <h2 className="rebuildDay-heading col-sm-12 center">
            Rebuild Day - Every Year on the last saturday of April
          </h2>
          <p className="rebuildDay-text col-12 center">
            There is a great need for volunteers on Rebuild Day!
          </p>
        </div>
        <div className="row">
          <div className="rebuildDay-explain col-sm-6">
            <p>
              Our 'go-to' experts at every site are the skilled volunteers and
              technical support staff who return year after year to lead the
              Rebuild Day teams – they always appreciate assistance. Please take
              a look at our website, set aside the last Saturday in April to
              help out, and be in touch. We would love to hear from you!
            </p>
          </div>
          <div className="rebuildDay-list col-sm-6 col-md-5">
            <ul>
              <li>Helpers</li>
              <li>Painters</li>
              <li>Assistants to Carpenters &amp; Masons</li>
              <li>Materials Pick-up runners</li>
              <li>Photographers</li>
              <li>Lunch Preparers &amp; Delivers</li>
              <li>Even Cookie Bakers!</li>
            </ul>
          </div>
        </div>
      </div>
      <VolunteerCta />
    </Layout>
  )
}

export default IndexPage
