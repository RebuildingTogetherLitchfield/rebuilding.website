import React from "react"
import Card from "react-bootstrap/Card"

const IntroCard = (props) => {
  return (
    <Card bg="light" style={{ width: "19rem" }} className="m-2">
      <Card.Header>{props.header}</Card.Header>
      <Card.Body>
        <Card.Title className="mb-2 text-muted">{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Card.Link href={props.href}>{props.linkText}</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default IntroCard
