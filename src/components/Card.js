import React from "react"
import Card from "react-bootstrap/Card"

const introCard = props => {
  return (
    <Card style={{ width: "19rem", backgroundColor: `rgba(0, 0, 0, 0.2)` }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text>{props.text}</Card.Text>
        <Card.Link href={props.href}>{props.linkText}</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default introCard
