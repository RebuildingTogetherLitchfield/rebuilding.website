import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Header from "../components/Header"
import CountUp from "react-countup"

import LogoCarousel from "../components/LogoCarousel"
import workLeft from "../images/workerLeft.png"

const Sponsor = () => {
  return (
    <Layout>
      <Seo title="Sponsor" />
      <Header pageHeading="Become a Sponsor!!" />
      <div className="container mb-4">
        <div className="row">
          <h1
            className="sponsor-heading"
            style={{ textAlign: `center`, margin: `26px auto` }}
          >
            We have helped over{" "}
            <span style={{ color: `red` }}>
              <CountUp end={346} />
            </span>{" "}
            people since we started!!
          </h1>
        </div>
        <div className="row">
          <h2 className="become" style={{ margin: `auto` }}>
            To Become a Sponsor Click Here:
          </h2>
        </div>
        <div className="row">
          <Link
            to="/sponsor-form/"
            className="btn btn-success"
            style={{ margin: `10px auto` }}
          >
            Sign Up
          </Link>
        </div>
        <div
          className="row"
          style={{ marginBottom: `35px`, marginTop: `26px` }}
        >
          <img
            src={workLeft}
            className="col-sm-5 left-image"
            style={{ marginBottom: `20px` }}
            alt="Worker cutting some wood"
          />
          <div className="col-sm-7">
            <h2>Sponsors are the muscle in Rebuilding Together</h2>
            <h3>Your business or organization can sponsor a house!</h3>
            <p>
              Rebuilding Together always has more homeowners that need help than
              we can work with each year. That's why, in addition to the
              generous sponsors listed above, we need your help to sponsor a
              house.
            </p>
            <h3>What is a Sponsor?</h3>
            <p>
              A sponsor is a business or an organization which provides a team
              of volunteers and usually makes a donation to Rebuilding Together
              to help pay for the cost of repairing a home.
            </p>
            <p>
              Team sizes and donations vary widely depending upon the ability of
              the sponsor. Some teams are better at pulling together volunteers.
              Others are better at providing funding. In each case, Rebuilding
              Together matches sponsors with an appropriate home which matches
              their ability to participate. Typically a sponsor will provide
              between 7 and 40 volunteers and make a donation to Rebuilding
              Together Litchfield County of between $1,500 and $5,000 depending
              on the scope of the project they will undertake.
            </p>
            <p>
              Rebuilding Together will provide a house captain if needed who
              will assist the team with every step of the project. Rebuilding
              Together will also provide skilled carpenters, electricians,
              plumbers, etc. as needed.
            </p>
            <p>
              Every business or organization, no matter what the size or scope
              of participation is welcome. Working on a house with Rebuilding
              Together is a wonderful opportunity to network, earn media
              attention, build teams, improve neighborhoods and give back to the
              community.
            </p>
          </div>
        </div>
      </div>
      <LogoCarousel />
    </Layout>
  )
}

export default Sponsor
