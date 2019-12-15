import React from "react"
import { navigate } from "gatsby"
import Button from "react-bootstrap/Button"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Header from "../components/Header"
import VisibilitySensor from "react-visibility-sensor"
import volunteerHero from "../images/volunteerHero.png"
import twoHouses from "../images/twoHouses.svg"
import volImg from "../images/vol_img_2.jpg"

const Volunteer = () => {
  return (
    <Layout>
      <SEO title="Volunteer" />
      <Header pageHeading="Choose to Volunteer!" />
      <div className="volunteer-intro">
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="volunteer-intro-img mx-auto col-sm-4">
              <img
                src={volunteerHero}
                style={{ maxHeight: `540px`, marginBottom: `2em` }}
                alt="Heart with Brand"
                className="tilt-in"
              />
            </div>
            <div className="col-sm-6" style={{ margin: `auto` }}>
              <h1 className="vol-heading">
                We invite you and your family to consider joining Rebuilding
                together Litchfield County’s volunteer group.
              </h1>
              <p className="vol-text" style={{ fontSize: `22px` }}>
                We are always looking for motivated volunteers who would like to
                contribute their talents. If you would like to contribute yours,
                please email{" "}
                <a href="mailto:info@rebuildingtogetherlitchfield.org">
                  info@rebuildinglitchfieldcounty.org
                </a>{" "}
                so we can pair you with a qualified homeowner. Rebuilding
                Together does specialty work in the repair of homes, however,
                there is a great need for people to volunteer their ‘willing
                hands’ as helpers, painters, materials pick-up, photographers,
                lunch preparation and delivery (that includes cookies too). Our
                skilled volunteers and technical support teams are invaluable –
                they are the leads on the home repairs and are our ‘go-to’
                experts. We also have a need for Site Selection volunteers who
                have a knowledge of electrical, plumbing and general carpentry
                assessing to provide the ‘first look’ at the homes of our
                applicants.
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6" style={{ margin: `auto` }}>
              <p className="mx-auto" style={{ fontSize: `22px` }}>
                Our ability to make repairs relies largely on available budget
                and volunteers ; even if the repair concerns match up with our
                priorities, it does not mean that we will definitely be able to
                work a home, due to a lack of volunteers available. We strive to
                manage our resources wisely and to be good stewards of the
                donations, grants and awards entrusted to us, however, there are
                periods when demand for services far outdistance our capacity to
                serve. If that is the case, homeowners may be placed on a
                waiting list. Maybe your talents will match some of the needs of
                homeowners.
              </p>
            </div>
            <div className="col-sm-4 mx-auto">
              <img src={twoHouses} alt="Two Houses" className="mb-4" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-3 justify-content-md-center">
            <div className="col-sm-8">
              <h2 className="center" style={{ marginTop: `35px` }}>
                As a potential volunteer, we’d like you to be aware of what we
                repair. Generally, we concentrate on repairs that make a home
                safe, secure and weatherproof.
              </h2>
            </div>
            <div className="row mt-3" style={{ marginBottom: `45px` }}>
              <div className="col-sm-2 col-md-5">
                <VisibilitySensor partialVisibility>
                  {({ isVisible }) => (
                    <img
                      src={volImg}
                      alt="Man Cutting Board"
                      className={isVisible ? `animated flipInX` : null}
                      style={{
                        borderRadius: `45px`,
                        marginTop: `35px`,
                        marginBottom: `45px`,
                        boxShadow: `10px 10px 10px 0px #bababa`,
                        visibility: isVisible ? `visible` : `hidden`,
                      }}
                    />
                  )}
                </VisibilitySensor>
              </div>
              <ul
                className="col-sm-6 mx-auto"
                style={{ listStyleType: `square` }}
              >
                <h3
                  style={{
                    color: `#1a1a1a`,
                    textAlign: `left`,
                    marginLeft: `5px`,
                  }}
                >
                  Our main priorities are:
                </h3>
                <li className="ml-4">
                  Alleviating substandard conditions and safety hazards in a
                  home.
                </li>
                <li className="ml-4">
                  Providing home modifications for better accessibility and
                  independence of elderly/ disabled individuals.
                </li>
                <li className="ml-4">
                  Increasing energy efficiency and weatherization in a home. We
                  have the ability to do most any repair in a home.
                </li>
                <h3
                  style={{
                    color: `#1a1a1a`,
                    textAlign: `left`,
                    marginLeft: `5px`,
                  }}
                >
                  What we don't repair:
                </h3>
                <li className="ml-4">Major HVAC</li>
                <li className="ml-4">Major Concrete Work</li>
                <li className="ml-4">Aesthetic Remodeling</li>
                <li className="ml-4">
                  Rental homes, Multi-family homes or Investment properties
                </li>
                <li className="ml-4">
                  Homes with Lead Based Paint - Painted prior to 1978
                </li>
              </ul>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-sm-12 center">
                <h2 className="mt-3 ml-1">
                  Let's get started becoming a volunteer!
                </h2>
                <Button
                  variant="success"
                  className="mb-3"
                  onClick={event => {
                    event.preventDefault()
                    navigate("/volunteer-form/")
                  }}
                >
                  Sign Up!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Volunteer
