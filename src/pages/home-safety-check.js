import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Header from "../components/Header"
import ListGroup from "react-bootstrap/ListGroup"

const HomeSafetyCheck = () => {
  return (
    <Layout>
      <Seo title="Home Safety Check" />
      <Header pageHeading="Home Safety" />
      <h1 className="text-center mt-3">
        Making Homes Safe – Modification Checklist
      </h1>
      <div className="container">
        <div className="row">
          <div className="col mr-sm-2 ml-sm-2">
            Millions of elderly Americans prefer to age in their own homes, but
            many face special challenges to live in and maintain their homes.
            Rebuilding Together USA and the Administration on Aging have
            collaborated in a national effort to allow the elderly to age in
            their homes, safely and securely. The following checklist of home
            modifications, offers solutions for the most common danger areas in
            homes.
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col">
            <ListGroup>
              <ListGroup.Item variant="success" className="font-weight-bold">
                Exterior Entrances &amp; Exits:
              </ListGroup.Item>
              <ListGroup.Item>
                Install stair rails on both sides.
              </ListGroup.Item>
              <ListGroup.Item>
                Install door lever-type handles on all interior and exterior
                doors.
              </ListGroup.Item>
              <ListGroup.Item>Install double-bolt lock.</ListGroup.Item>
              <ListGroup.Item>
                Create surfaces to place packages when opening door.
              </ListGroup.Item>
              <ListGroup.Item>
                Install peephole in exterior door.
              </ListGroup.Item>
              <ListGroup.Item>
                Repair holes, uneven joints on walkway.
              </ListGroup.Item>
              <ListGroup.Item>
                Provide non-slip finish to walkway surface.
              </ListGroup.Item>
              <ListGroup.Item>Add ramp.</ListGroup.Item>
              <ListGroup.Item>Increase lighting at entry area.</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col">
            <ListGroup>
              <ListGroup.Item variant="success" className="font-weight-bold">
                Interior Doors, Halls, Stairs
              </ListGroup.Item>
              <ListGroup.Item>Hello world!!</ListGroup.Item>
              <ListGroup.Item>Hello world!!</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomeSafetyCheck
