import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Header from "../components/Header"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import checkbox from "../images/icons/checkboxGreenChecksmaller.png"

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
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Exterior Entrances &amp; Exits:
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ul style={{ listStyleImage: `url(${checkbox})` }}>
                      <li>Install stair rails on both sides.</li>
                      <li>
                        Install door lever-type handles on all interior and
                        exterior doors.
                      </li>
                      <li>Install double-bolt lock.</li>
                      <li>
                        Create surfaces to place packages when opening door.
                      </li>
                      <li>Install peephole in exterior door.</li>
                      <li>Repair holes, uneven joints on walkway.</li>
                      <li>Provide non-slip finish to walkway surface.</li>
                      <li>Add ramp.</li>
                      <li>Increase lighting at entry area.</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Interior Doors, Halls, Stairs
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ul
                      style={{
                        listStyleImage: `url(${checkbox})`,
                      }}>
                      <li>Create clear pathways between rooms.</li>
                      <li>
                        Apply color contrast/texture change at top/bottom stair
                        edges.
                      </li>
                      <li>
                        Install “swing-clear” hinges to widen doorways, minimum
                        width – 32”.
                      </li>
                      <li>Install beveled thresholds (max ½”).</li>
                      <li>Replace/add non-slip surface on steps.</li>
                      <li>Repair/install stair handrails on both sides.</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Bathroom
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <ul
                      style={{
                        listStyleImage: `url(${checkbox})`,
                      }}>
                      <li>Install secure wall reinforcement.</li>
                      <li>Place grab bars at toilet, bath and shower.</li>
                      <li>Install adjustable-height shower head.</li>
                      <li>Install non-slip strips in bath/shower.</li>
                      <li>
                        Secure floor bathmat with non-slip, double-sided rug
                        tape.
                      </li>
                      <li>Elevate toilet height to 16 ½”</li>
                      <li>Adapt flush handle or install flush sensor.</li>
                      <li>Adapt or relocate toilet paper dispenser.</li>
                      <li>Round counter corners to provide safety.</li>
                      <li>
                        Insulate hot water pipes if exposed in bath or kitchen.
                      </li>
                      <li>
                        Create sitting knee clearance at basin by removing
                        bottom vanity door/shelves.
                      </li>
                      <li>Install mirror for sitting/standing view.</li>
                      <li>Install good-quality non-glare lighting.</li>
                      <li>
                        Install no threshold shower if bathing abilities are
                        limited.
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  Laundry
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <ul
                      style={{
                        listStyleImage: `url(${checkbox})`,
                      }}>
                      <li>Build counter for sorting/folding clothes.</li>
                      <li>Adjust clothesline to convenient height.</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  Kitchen
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <ul
                      style={{
                        listStyleImage: `url(${checkbox})`,
                      }}>
                      <li>Increase task lighting – sink, stove, etc.</li>
                      <li>Install “D” type cupboard door handles.</li>
                      <li>
                        Install adjustable shelving to increase access to upper
                        cabinets.
                      </li>
                      <li>Install hot-proof surface near oven.</li>
                      <li>Install switch/outlets at front of counter.</li>
                      <li>
                        Install pressure-balanced, temperature regulated
                        faucets, lever type.
                      </li>
                      <li>
                        Create sitting knee clearance under work sites by
                        removing cabinet door/shelves.
                      </li>
                      <li>
                        Improve color-contrast cabinet/counter surface edges and
                        add tactile/color contrasted controls for vision
                        impaired.
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  Living, Dining, Bedroom
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <ul
                      style={{
                        listStyleImage: `url(${checkbox})`,
                      }}>
                      <li>
                        Widen/clear pathways within each room by rearranging
                        furniture.
                      </li>
                      <li>
                        Secure throw/area rug edges with double-sided tape.
                      </li>
                      <li>
                        Improve access to/from chair and bed by inserting risers
                        under furniture legs
                      </li>
                      <li>Use side bed rail or chairs with armrests.</li>
                      <li>Install telephone jack near chair/bed.</li>
                      <li>
                        Enlarge lamp switch or install touch control lamp at
                        bedside.
                      </li>
                      <li>
                        Install adjustable closet rods/shelving and light source
                        for better storage access.
                      </li>
                      <li>Install vertical pole adjacent to chair/sofa.</li>
                      <li>
                        Raise furniture to appropriate height using leg extender
                        products.
                      </li>
                      <li>
                        Install uniform level floor surfaces using wood/tile/or
                        low pile rugs.
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="6">
                  Storage Space
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                    <ul
                      style={{
                        listStyleImage: `url(${checkbox})`,
                      }}>
                      <li>Install lights inside closets.</li>
                      <li>Install adjustable closet rods and shelves.</li>
                      <li>Install bi-fold/pocket doors.</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="7">
                  Windows
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>
                    <ul
                      style={{
                        listStyleImage: `url(${checkbox})`,
                      }}>
                      <li>
                        Install easy-to-grip handles and locks at appropriate
                        heights.
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="8">
                  Environmental Controls
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="8">
                  <Card.Body>
                    <ul
                      style={{
                        listStyleImage: `url(${checkbox})`,
                      }}>
                      <li>
                        Increase resident’s access to environmental control
                        systems.
                      </li>
                      <li>Install smoke/CO2 detectors; fire extinguisher</li>
                      <li>Relocate laundry appliances.</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomeSafetyCheck
