import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Header from "../components/Header"
import BoardMember from "../components/BoardMember"
import execData from "../data/exec"
import execComm from "../data/execCommittee"
import boardMem from "../data/boardMembers"
import advisoryBoard from "../data/advisoryBoard"

const BoardOfDirectors = () => {
  const executives = execData.map(exMem => (
    <BoardMember
      key={exMem.id}
      title={exMem.position}
      name={exMem.name}
      excerpt={exMem.excerpt}
    />
  ))
  const committee = execComm.map(commMem => (
    <BoardMember
      key={commMem.id}
      title={commMem.position}
      name={commMem.name}
      excerpt={commMem.excerpt}
    />
  ))
  const board = boardMem.map(bMember => (
    <BoardMember
      key={bMember.id}
      title={bMember.position}
      name={bMember.name}
      excerpt={bMember.excerpt}
    />
  ))
  const advisory = advisoryBoard.map(advisor => (
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
      <Header pageHeading="Board Members" />
      <div className="container">
        <h1 style={{ marginTop: 50 }}>Board of Directors</h1>
      </div>
      <div>{executives}</div>
      <div className="container">
        <h2>Executive Committee</h2>
      </div>
      <div>{committee}</div>
      <div className="container">
        <h2>Members of the Board</h2>
      </div>
      <div>{board}</div>
      <div className="container">
        <h2>Advisory Board</h2>
      </div>
      <div>{advisory}</div>
    </Layout>
  )
}

export default BoardOfDirectors
