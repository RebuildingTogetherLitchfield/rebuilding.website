import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Application = () => {
  return (
    <Layout>
      <Seo title="Application for Services" />
      <Header pageHeading="Application for services from Rebuilding Together Litchfield" />
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h4>Dear Homeowner,</h4>
            <p>
              We are so glad you found your way to us. Please scroll down for
              the application.
            </p>
            <p>
              Rebuilding Together Litchfield County is a not-for-profit
              organization which repairs the homes of Litchfield County
              homeowners whom are seniors, people with disabilities, and
              families in need that meet our income guidelines and are unable to
              complete the needed repairs/modifications themselves.
            </p>
            <p>
              We match our volunteers with skilled professionals to complete the
              repairs to the homes. Repairs and modifications are completed
              safely and in compliance with local building codes. Our biggest
              concerns are with safety and health factors as well as the
              functioning system of a home.
            </p>
            <p>
              If your home is chosen for repair work, all repairs will be
              completed free of charge - however, the places in your home where
              work will be done, need to have all personal items removed from
              the work area prior to our volunteers scheduled arrival. We need
              you as a partner in this process. We ask that you and/or any able
              bodied members of your household participate alongside volunteers
              in repairs to the best of your ability. Please understand that we
              receive many applications and are working to fill the need with
              limited resources.
            </p>
            <p>
              Persons with disabilities who require alternative means for
              communication of program information should contact Rebuilding
              Together Litchfield County at TDD: 800-844-4524, phone:{" "}
              <a href="tel:+12032409666">203-240-9666</a> or email at{" "}
              <a href="mailto:info@rebuildingtogetherlitchfield.org">
                info@rebuildingtogetherlitchfield.org
              </a>
            </p>
            <p>
              Please print all information clearly. If you need assistance
              completing our applications, do not hesitate to contact us.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe0HhI1ajj1K7MfgXv5OJ1ZfYdn3AwKGOQ6tcNEekfScAbJfw/viewform?embedded=true"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              title="Application Form"
              style={{
                display: `inline`,
                width: `100%`,
                border: `none`,
                marginTop: `45px`,
                overflowY: `auto`,
                overflowX: `hidden`,
                minHeight: `1900px`,
              }}>
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Application
