import React from "react"

const BoardMember = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="member">
          <h3 className="member-name">{props.title}</h3>
          <h4 className="title">{props.name}</h4>
          <p className="member-excerpt">{props.excerpt}</p>
        </div>
      </div>
    </div>
  )
}

export default BoardMember
