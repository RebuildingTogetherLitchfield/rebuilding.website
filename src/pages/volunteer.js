import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Header from "../components/Header"
import volunteerHero from "../images/volunteerHero.png"
import twoHouses from "../images/twoHouses.svg"

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
      </div>
    </Layout>
  )
}

export default Volunteer
