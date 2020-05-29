import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Application = () => {
  return (
    <Layout>
      <Seo title="Application for Services" />
      <Header pageHeading="Application for services from Rebuilding Together Litchfield" />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe0HhI1ajj1K7MfgXv5OJ1ZfYdn3AwKGOQ6tcNEekfScAbJfw/viewform?embedded=true"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              height="100%"
              scrolling="no"
              title="Application Form"
              style={{
                display: `block`,
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
