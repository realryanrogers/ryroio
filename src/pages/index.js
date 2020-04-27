import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout location={props.location.pathname}>
    <SEO title="Home" />
    <h2>Hi. I'm Ryan.</h2>
    <p>
      <h3>I'm making games right now. Also, videos about those games.</h3>
      You can see what else I'm up to on my <Link to="/now">now page</Link>.
    </p>
    <p>
      In the past, I worked for a lot of advertising startups, on the operations
      side of things. It gave me a love of moving fast and iterating faster.
      I've been working to apply that mindset to pretty much everything in my
      life.
    </p>
  </Layout>
)

export default IndexPage
