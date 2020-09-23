import React from "react"
import Card from "react-bootstrap/Card"

const cardStyle = {
  backgroundColor: `#dfe5e0`,
  borderRadius: `6px`,
  boxShadow: `10px 10px 15px -1px #bababa`,
  margin: `0.5rem`,
  padding: `10px`,
}
const BoardMember = (props) => {
  return (
    <Card className="member" style={cardStyle}>
      <Card.Title className="member-name">{props.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted title">
        {props.title}
      </Card.Subtitle>
      <Card.Text className="member-excerpt">{props.excerpt}</Card.Text>
    </Card>
  )
}

export default BoardMember
