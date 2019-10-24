import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <div className="container">
      <iframe
        src="https://secure.anedot.com/rebuilding-together-litchfield-county/donate?embed=true"
        width="100%"
        height="1100"
        frameBorder="0"
        title="Anedot Donation"
      ></iframe>
    </div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about-us/">Go to About Us</Link>
  </Layout>
)

export default IndexPage
