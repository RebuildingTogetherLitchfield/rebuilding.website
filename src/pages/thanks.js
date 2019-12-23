import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Link } from "gatsby"
import messageSent from "../images/messageSent.svg"

export default () => (
  <Layout>
    <Seo title="Thank You for your Submission" />
    <div className="container">
      <h1 className="thanks-heading center mt-4">
        Thank You for your Submission!
      </h1>
      <img
        src={messageSent}
        alt="Mailbox with mail on its way"
        style={{ maxHeight: `450px`, marginTop: `36px`, marginBottom: `36px` }}
      />
      <h2 className="thanks-message center mt-4 mb-4">
        Your Mail is on it's way. We will get back to you as soon as possible!
      </h2>
      <p className="thanks-para center" style={{ fontSize: `24px` }}>
        We appreciate your interest in Rebuilding Together Litchfield County. We
        are a part of a larger community of{" "}
        <span style={{ color: `#89c853` }}>[Re]</span>Builder's. Check out our{" "}
        <a href="https://rebuildingtogether.org">
          Rebuilding Together National Organization
        </a>
        .{" "}
      </p>
      <p className="center">
        <Link to="/">&larr; Go Back to Homepage</Link>
      </p>
    </div>
  </Layout>
)
