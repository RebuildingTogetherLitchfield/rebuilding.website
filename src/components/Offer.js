import React from "react"

import house from "../images/womenBuildHouse.svg"

const Offer = () => {
  return (
    <section className="services-section">
      <div className="container offer-section">
        <div className="row col-sm-6-offset-2 offer-head">
          <h2 className="offer-heading blue-color">Homeowner:</h2>
        </div>
        <div className="row col-sm-6-offset-2">
          <p className="offer-text">
            It's your home but we can help make it home again.
          </p>
          <p className="offer-text">
            There are things that slip by in a house. Upkeep we never seem to
            get around to doing. The roof starts leaking. The furnace isn't
            working properly. Windows break. Heating bills escalate or worse,
            the house is just cold all the time.
          </p>
          <p className="offer-text">
            There are things we need to add as we get older too. Simple things
            -- like a hand rail in the shower or changing the door knobs to
            handles so the doors are easier to open.
          </p>
          <p className="offer-text">
            Sometimes getting these things done becomes too much for us to do
            alone and hiring a contractor can be confusing and unaffordable.
          </p>
          <p className="offer-text">
            We are your neighbors. You've helped others for years and we think
            it is your turn to receive some help. We are the volunteers of
            Rebuilding Together Litchfield County. Some of us are skilled
            laborers like carpenters, electricians, and plumbers. Some of us are
            just willing helpers.
          </p>
          <p className="offer-text">
            If you need help or know someone who does, let us know ... please.
          </p>
        </div>
      </div>
      <div className="container services">
        <div className="row">
          <div className="service-img col-sm-6">
            <img src={house} alt="Woman and House" className="service-svg" />
          </div>
          <div className="service-list col-sm-6-offset-2">
            <h3
              className="services-heading"
              style={{
                display: `block`,
                fontSize: `22px`,
                lineHeight: `28px`,
                letterSpacing: `1px`,
                padding: `20px 0 10px`,
                textAlign: `center`,
                fontWeight: 800,
              }}
            >
              Services for Homeowners
            </h3>
            <ul>
              <li>National Rebuild Day</li>
              <li>Contractors Network</li>
              <li>Suppliers Network</li>
              <li>Referral Network for Homeowners</li>
              <li>Year-round Emergency Repairs</li>
              <li>Homeowner Maintenance Updates</li>
              <li>Energy Audits</li>
              <li>Alumni Program</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Offer
