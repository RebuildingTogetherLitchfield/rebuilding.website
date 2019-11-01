import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import BoardMember from "../components/BoardMember"
import execData from "../data/exec"

const SecondPage = () => {
  const executives = execData.map(exMem => (
    <BoardMember
      key={exMem.id}
      title={exMem.position}
      name={exMem.name}
      excerpt={exMem.excerpt}
    />
  ))
  return (
    <Layout>
      <SEO title="About Us" />
      <h1 style={{ marginTop: 50 }}>Board of Directors</h1>
      <div>{executives}</div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
