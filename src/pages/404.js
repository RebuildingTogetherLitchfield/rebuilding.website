import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import error from "../images/error.svg"

const NotFoundPage = () => {
  let goBack = () => {
    window.history.back()
  }
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="container center mt-4" style={{ marginBottom: `46px` }}>
        <h1 style={{ color: `#89c853` }}>404: NOT FOUND</h1>
        <p style={{ fontSize: `22px` }}>
          This page does not exist... hit the back button or click here:
        </p>
        <button onClick={goBack} className="btn btn-outline-success mb-4">
          Go Back
        </button>
        <img src={error} atl="Crane with page under construction" />
      </div>
    </Layout>
  )
}

export default NotFoundPage
