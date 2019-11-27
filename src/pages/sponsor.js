import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Header from "../components/Header"
import CountUp from "react-countup"

const Sponsor = () => {
  return (
    <Layout>
      <Seo title="Sponsor" />
      <Header pageHeading="Become a Sponsor!!" />
      <div className="container">
        <div className="row">
          <h1 className="sponsor-heading">
            We have helped over <CountUp end={346} /> people since the beginning
            of the year!!
          </h1>
        </div>
      </div>
    </Layout>
  )
}

export default Sponsor
