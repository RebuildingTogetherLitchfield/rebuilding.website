import React from "react"
import CardDeck from "react-bootstrap/CardDeck"
import CardColumns from "react-bootstrap/CardColumns"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Header from "../components/Header"
import BoardMember from "../components/BoardMember"
import execData from "../data/exec"
import execComm from "../data/execCommittee"
import boardMem from "../data/boardMembers"
import advisoryBoard from "../data/advisoryBoard"

const BoardOfDirectors = () => {
  const executives = execData.map((exMem) => (
    <BoardMember
      key={exMem.id}
      title={exMem.position}
      name={exMem.name}
      excerpt={exMem.excerpt}
    />
  ))
  const committee = execComm.map((commMem) => (
    <BoardMember
      key={commMem.id}
      title={commMem.position}
      name={commMem.name}
      excerpt={commMem.excerpt}
    />
  ))
  const board = boardMem.map((bMember) => (
    <BoardMember
      key={bMember.id}
      title={bMember.position}
      name={bMember.name}
      excerpt={bMember.excerpt}
    />
  ))
  const advisory = advisoryBoard.map((advisor) => (
    <BoardMember
      key={advisor.id}
      title={advisor.position}
      name={advisor.name}
      excerpt={advisor.excerpt}
    />
  ))
  return (
    <Layout>
      <SEO title="Board of Directors" />
      <Header pageHeading="Board of Directors" />
      <div className="container mb-5">
        <div className="container">
          <h2
            className="font-weight-bold"
            style={{ marginTop: 50, textAlign: `center` }}>
            Executive
          </h2>
        </div>
        <div className="container mb-4">
          <CardDeck>{executives}</CardDeck>
        </div>

        <div className="container">
          <h2 style={{ textAlign: `center` }}>Executive Committee</h2>
        </div>
        <div className="container mb-4">
          <CardDeck>{committee}</CardDeck>
        </div>

        <div className="container">
          <h2 style={{ textAlign: `center` }}>Members of the Board</h2>
        </div>
        <div className="container mb-4">
          <CardColumns>{board}</CardColumns>
        </div>

        <div className="container">
          <h2 style={{ textAlign: `center` }}>Advisory Board</h2>
        </div>
        <div className="container mb-4">
          <CardColumns>{advisory}</CardColumns>
        </div>
      </div>
    </Layout>
  )
}

export default BoardOfDirectors
