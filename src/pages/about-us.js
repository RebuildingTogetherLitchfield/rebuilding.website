import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Header from "../components/Header"

const SecondPage = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <Header pageHeading="About Rebuilding Together Litchfield County" />
      <div className="container about-page-start">
        <div className="row">
          <h1 className="about-heading">Our Mission</h1>
        </div>
        <div className="row">
          <p className="mission-text col-sm-5">
            <span className="bold">
              Repairing homes, revitalizing communities, rebuilding lives.
            </span>{" "}
            We preserve and revitalize houses and communities, assuring that
            low-income homeowners, particularly those who are elderly, disabled
            and/or supporting young children, live in safety and warmth.
            National Rebuild Day is on the last Saturday in April.{" "}
          </p>
          <img
            src="https://res.cloudinary.com/mattaz/image/upload/v1572459613/RebuildingTogether/2016-07-28_group.png"
            alt="Rebuilding Together Crew"
            className="about-intro-img"
          />
        </div>
        <div className="row nondiscrimination">
          <h2 className="orange-heading">Non Discrimination Statement</h2>
          <div className="about-text">
            In accordance with Federal law and U.S. Department of Agriculture
            policy, this institution is prohibited from discriminating on the
            basis of race, color, national origin, sex, age, religion, political
            beliefs or disability. To file a complaint of discrimination, write
            USDA, Director, Office of Civil Rights, 1400 Independence Avenue,
            S.W., Washington, D.C. 20250-9410 or call (800)795-3272 (voice) or
            (202)720-6382 (TTY). USDA is an equal opportunity provider and
            employer.{" "}
          </div>
        </div>
        <div className="row why-service">
          <h2 className="orange-heading">Why Are These Services Needed?</h2>
          <div className="about-text">
            The number of low-income homeowners increases each year. The current
            24 million low-income homeowner families are expected to grow to an
            astonishing 28.5 million by the year 2010. This growth means that
            more and more families are placed in the position of choosing
            between vital necessities, such as food or medicine, or a roof that
            does not leak. Rebuilding Together works to ensure that as many of
            those families as possible do not have to make these difficult
            choices.{" "}
          </div>
        </div>
        <div className="row work-type">
          <h2 className="orange-heading">What Type of Work is Done?</h2>
          <div className="about-text">
            We provide emergency year-round services in addition to the major
            rehabilitation projects we undertake on National Rebuilding Day. We
            build ramps, install grab bars, and work on other home modifications
            to allow homeowners to safely “age in place.”
          </div>
        </div>
        <div className="row selection">
          <h2 className="orange-heading">How are Homeowners Selected?</h2>
          <div className="about-text">
            We also work preserving and revitalizing non-profit facilities. Our
            unskilled volunteers join with skilled tradespeople, painting,
            cleaning, and weatherizing, as well as doing carpentry, plumbing,
            and electrical work.
          </div>
        </div>
        <div className="row payment">
          <h2 className="orange-heading">Do Homeowners Pay?</h2>
          <div className="about-text">
            Homeowners must be low-income and elderly, disabled, or families
            with children, and unable to do the work themselves. The site
            selection process takes place locally, within broad national
            guidelines. Criteria differ slightly from affiliate to affiliate.
            Individual families are referred through neighborhood associations,
            churches, synagogues, community organizations, and service groups,
            or by self-referral. All repairs are free for homeowners. Labor and
            many supplies are typically donated. Homeowners and family members
            are asked to welcome the volunteers into their homes and work
            alongside them to the extent possible. Our work is done with
            families and neighborhoods, not for them. A homeowner brochure (pdf)
            is provided to clarify our process and partnership.
          </div>
        </div>
        <div className="row who-sponsors">
          <h2 className="orange-heading">Who Sponsors Rebuilding Together?</h2>
          <div className="about-text">
            Funds come from generous individuals, corporations, labor
            organizations, foundations, civic organizations, churches, and
            synagogues that are interested in helping to build a better world.
            Our local affiliates do their own fundraising, publicity, volunteer
            recruitment, and management. Rebuilding Together is a non-profit,
            non-sectarian organization supported by voluntary contributions of
            time and money. Every dollar given is wisely spent and is an
            investment in building a better America.
          </div>
        </div>
        <div className="row tax-deduct">
          <h2 className="orange-heading">Is My Contribution Tax-Deductible?</h2>
          <div className="about-text">
            Yes. All contributions are tax-deductible. Contributions can be sent
            to Rebuilding Together, 1536 Sixteenth Street NW, Washington, D.C.
            20036-1402. We also welcome your comments and suggestions.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SecondPage
