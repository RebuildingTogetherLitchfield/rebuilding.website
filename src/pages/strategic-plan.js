import React from "react"

import Header from "../components/Header"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

import planIcon from "../images/planIcon.png"

const StrategicPlan = () => {
  let contStyle = {
    marginTop: 25,
    marginBottom: 25,
  }

  return (
    <Layout>
      <Seo title="Strategic Plan" />
      <Header pageHeading="Strategic Plan" />
      <div className="container" style={contStyle}>
        <div className="row mb-3">
          <img src={planIcon} className="plan-icon-img col-sm-6" />
          <h3 className="plan-heading col-sm-6">
            A Strategic Plan on
            <br /> Four Service Areas
          </h3>
        </div>
        <div className="row">
          <p className="plan-text">
            Rebuild Day, 4th weekend in April annually: individual sites worked
            at by teams from religious/civic/municipal or business groups. Work
            scheduled at sites only as funding permits each year. Increased
            visibility in Litchfield County will provide increased # of
            low-income, elderly homeowner referrals, and volunteer teams.
            Emphasis will be placed on community recognition.
          </p>
          <p className="plan-text">
            There is a potential for creating smaller geographic zones with
            Board Members from each zone, or a group of zone advisors that would
            control travel distances for site assessments, etc.
          </p>
          <p className="plan-text">
            Homeowner (Maintenance) Training using Rebuilding Together (R T)
            manuals, volunteer and paid instructors. Trainings are in
            cooperation with local Community groups, Senior Centers, Western
            Connecticut AAA and other organizations creating partnerships.
          </p>
          <ul className="plan-text-list">
            <li>R T Homeowners Safe At Home Program</li>
            <li>
              R T is responsible for construction budger, trainers and 'hands
              on' equipment necessary using paid contract labor, when necessary,
              who are reliable and can/will respond quickly & are known and
              therefore trusted to be referred to older Year-Round Emergency
              Maintenance homes persons
            </li>
            <li>We would be familiar with their work</li>
            <li>We would be sure that work was done in a timely way</li>
            <li>
              Work would be billed without worry of inflated hours or supplies
            </li>
          </ul>
          <p className="plan-text">
            Homeowner Reassurance, Caretaker/Maintenance Service Initiated to
            support RT work-site homeowners who would like the continuing
            contact which will support their ability to remain in their own
            homes in safety and comfort as long as is reasonable. Some of our
            homeowners have offered to relate their experiences to other
            applicants in an effort to make the experience seem less daunting.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default StrategicPlan
