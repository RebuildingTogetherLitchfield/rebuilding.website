import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Header from "../components/Header"

const Volunteer = () => {
  let styles = {
    backgroundImage: `url("https://github.com/RebuildingTogetherLitchfield/rebuilding.website/blob/master/src/images/volunteerHero.png")`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    position: `relative`,
    marginTop: `45px`,
  }
  return (
    <Layout>
      <SEO title="Volunteer" />
      <Header pageHeading="Choose to Volunteer!" />
      <div className="volunteer-hero" style={styles}></div>
    </Layout>
  )
}

export default Volunteer
