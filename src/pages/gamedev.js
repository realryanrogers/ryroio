import React from "react"
import { Link } from "gatsby"
import SignUpPage from "../components/newslettersignup"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GameDevPage = props => (
  <Layout location={props.location.pathname}>
    <SEO title="GameDev" />
    <h2>Making Games?</h2>
    <p>
      Trying to! Currently building a small studio working on a currently
      unnamed ARPG. I'm documenting how it's going over on <b>youtube</b> and
      also in an occasional{" "}
      <Link to="/newsletter/">
        <b>newsletter</b>
      </Link>
    </p>
    <br />
    <br />
    <SignUpPage />
  </Layout>
)

export default GameDevPage
