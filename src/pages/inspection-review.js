import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Header from "../components/Header"
import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"

const InspectionReview = () => {
  const myPointer = {
    cursor: `pointer`,
  }
  return (
    <Layout>
      <Seo title="Inspection Review Checklist" />
      <Header pageHeading="Rebuilding Together's Inspection Review Sheet" />
      <div className="container">
        <div
          className="row col-sm-12"
          style={{ textAlign: `center`, margin: `auto` }}>
          <h3 className="center col-sm-12 mt-4">
            Identify fall hazards and accessibility issues
          </h3>
          <hr
            style={{
              color: `#FFA500`,
              backgroundColor: `#FFA500`,
              height: `5px`,
              borderColor: `#FFA500`,
              margin: `0 auto 45px`,
            }}
            className="col-sm-7"
          />
        </div>
        <div className="row mb-4 mx-auto">
          <Tab.Container
            id="inspection-review-tablist"
            defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup className="flex-column">
                  <ListGroup.Item href="#link1" style={myPointer}>
                    Exterior Entrances &amp; Exits
                  </ListGroup.Item>
                  <ListGroup.Item href="#link2" style={myPointer}>
                    Interior Doors, Stairs, Halls
                  </ListGroup.Item>
                  <ListGroup.Item href="#link3" style={myPointer}>
                    Bathrooms
                  </ListGroup.Item>
                  <ListGroup.Item href="#link4" style={myPointer}>
                    Kitchen
                  </ListGroup.Item>
                  <ListGroup.Item href="#link5" style={myPointer}>
                    Living / Dining / Bedroom
                  </ListGroup.Item>
                  <ListGroup.Item href="#link6" style={myPointer}>
                    Telephone / Door
                  </ListGroup.Item>
                  <ListGroup.Item href="#link7" style={myPointer}>
                    Storage Space
                  </ListGroup.Item>
                  <ListGroup.Item href="#link8" style={myPointer}>
                    Windows
                  </ListGroup.Item>
                  <ListGroup.Item href="#link9" style={myPointer}>
                    Electric Outlets &amp; Controls
                  </ListGroup.Item>
                  <ListGroup.Item href="#link10" style={myPointer}>
                    Heat / Light / Ventilation / Security / CO2 / Water Temp
                    Control
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <ListGroup>
                      <ListGroup.Item>
                        Note condition of walk and drive surface; existence of
                        curb cuts
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Note handrail condition, right and left sides
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Note light level for driveway, walk, porch
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Check door threshold height
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Note ability to use knob, lock, key, mailbox, peephole,
                        and package shelf
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Do door and window locks work?
                      </ListGroup.Item>
                    </ListGroup>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <ListGroup>
                      <ListGroup.Item>
                        Note height of door threshold, knob and hinge types
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Clear width door opening; direction that door swings
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Note presence of floor level changes
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Note hall width, adequate for walker/WC
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Determine stair flight run: straight or curved
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Note stair rails: condition, right and left side
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Examine light level, clutter hazards
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Note floor surface texture and contrast
                      </ListGroup.Item>
                    </ListGroup>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                    <ListGroup>
                      <ListGroup.Item>
                        Are basin and tub faucets, shower control and drain
                        plugs manageable?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Are hot water pipes covered?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Is mirror height appropriate, sit and stand?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Note ability reach shelf above, below basin
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Note ability to step in and out of the bath and shower
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Can resident use bath bench in tub or shower?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Note toilet height; ability to reach paper; flush; come
                        from sit to stand posture
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Is space available for caregiver to assist?
                      </ListGroup.Item>
                    </ListGroup>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link4">
                    <ListGroup>
                      <ListGroup.Item>
                        Note overall light level, task lighting
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Note sink and counter heights
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Note wall and floor storage shelf heights
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Are undersink hot water pipes covered?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Is there under counter knee space?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Is there a nearby surface to rest hot foods on when
                        removed from oven?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Note stove control location (rear or front)
                      </ListGroup.Item>
                    </ListGroup>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link5">
                    <ListGroup>
                      <ListGroup.Item>
                        Chair, sofa, bed heights allow sit/stand?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Do rugs have non-slip pad or rug tape?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Chair available with arm rests?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Able to turn on light, radio, TV, place a phone call
                        from bed, chair, and sofa?
                      </ListGroup.Item>
                      <ListGroup.Item>Laundry</ListGroup.Item>
                      <ListGroup.Item>
                        Able to hand wash and hang clothes to dry?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Able to access automatic washer/dryer?
                      </ListGroup.Item>
                    </ListGroup>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link6">
                    <ListGroup>
                      <ListGroup.Item>
                        Phone jack location near bed, sofa, chair?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Able to get to phone, dial, hear caller?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Able to identify visitors, hear doorbell?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Able to reach and empty mailbox?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Wears neck/wrist device to obtain emergency help?
                      </ListGroup.Item>
                    </ListGroup>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link7">
                    <ListGroup>
                      <ListGroup.Item>
                        Able to reach closet rods and hooks, open bureau
                        drawers?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Is there a light inside the closet?{" "}
                      </ListGroup.Item>
                    </ListGroup>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link8">
                    <ListGroup>
                      <ListGroup.Item>
                        Opening mechanism at 42 inches from floor?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Lock accessible, easy-to-operate?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Sill height above floor level?
                      </ListGroup.Item>
                    </ListGroup>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link9">
                    <ListGroup>
                      <ListGroup.Item>Sufficient outlets?</ListGroup.Item>
                      <ListGroup.Item>
                        Outlet height, wall locations
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Low vision/sound warnings available?
                      </ListGroup.Item>
                      <ListGroup.Item>Extension cord hazard?</ListGroup.Item>
                    </ListGroup>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link10">
                    <ListGroup>
                      <ListGroup.Item>
                        Able to open drapes or curtains?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Able to open windows; slide patio doors?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Note rooms where poor light level exists
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Pressure balance valve available?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Accessible environmental controls?
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Thermometer displays easily readable?
                      </ListGroup.Item>
                      <ListGroup.Item>Fire Extinguisher?</ListGroup.Item>
                    </ListGroup>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </Layout>
  )
}

export default InspectionReview
