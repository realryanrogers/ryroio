import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = props => (
  <Layout location={props.location.pathname}>
    <SEO title="Thanks" />
    Thank you! You should get your first email soon!
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
