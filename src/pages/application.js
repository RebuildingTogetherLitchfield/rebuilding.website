import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Application = () => {
  return (
    <Layout>
      <Seo title="Application for Services" />
      <Header pageHeading="Application for services from Rebuilding Together Litchfield" />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe0HhI1ajj1K7MfgXv5OJ1ZfYdn3AwKGOQ6tcNEekfScAbJfw/viewform?embedded=true"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Application Form"
        style={{
          marginTop: `45px`,
          overflow: `hidden`,
        }}
      >
        Loading…
      </iframe>
    </Layout>
  )
}

export default Application
