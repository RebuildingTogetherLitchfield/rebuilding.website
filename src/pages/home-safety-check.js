import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Header from "../components/Header"
import ListGroup from "react-bootstrap/ListGroup"

const HomeSafetyCheck = () => {
  return (
    <Layout>
      <Seo title="Home Safety Check" />
      <Header pageHeading="Home Safety Checklist" />
      <ListGroup>
        <ListGroup.Item>Hello world!!</ListGroup.Item>
        <ListGroup.Item>Hello world!!</ListGroup.Item>
        <ListGroup.Item>Hello world!!</ListGroup.Item>
      </ListGroup>
    </Layout>
  )
}

export default HomeSafetyCheck
