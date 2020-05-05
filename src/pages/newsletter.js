import React from "react"
import { Link } from "gatsby"
import SignUpPage from "../components/newslettersignup"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = props => (
  <Layout location={props.location.pathname}>
    <SEO title="Newsletter Sign Up" />
    <h3>
      Get a weekly update with behind the scenes, extra videos, great resources
      I've found through the week, giveaways, and more!
    </h3>
    <p>
      Every week I'm delivering more content right to your inbox. Subscribe now
      to get access to the archives as well. I will never sell or share your
      email with anyone.
    </p>
    <br />
    <br />
    <SignUpPage />
  </Layout>
)

export default SecondPage
