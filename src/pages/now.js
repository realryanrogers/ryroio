import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NowPage = props => (
  <Layout location={props.location.pathname}>
    <SEO title="Now" />
    <h2>What I'm Doing Now</h2>
    <p>
      <b>Unnamed Game:</b> Working on a new game. Nothing to share just yet.
    </p>
    <p>
      <b>Devlogs on youtube:</b> Documenting the game project in video form.
      First video coming soon!
    </p>
    <p>
      <b>WebDev:</b> Learning Gatsby and React (and CSS...) to make this amazing
      website. Hopefully starts looking a little better as time goes on.
    </p>
  </Layout>
)

export default NowPage
