import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUpPage from "../components/newslettersignup"

const ContactPage = props => (
  <Layout location={props.location.pathname}>
    <SEO title="Contact" />
    <div>
      <h2>Hit me up!</h2>
      <p>
        Questions? Comments? Just wanna say hi? Shoot me an email!{" "}
        <a href="mailto://ryan@ryro.io">ryan@ryro.io</a>
      </p>
      <p>
        You can also get me on{" "}
        <a href="https://twitter.com/messages/compose?recipient_id=15121325">
          Twitter
        </a>
      </p>
    </div>
    <SignUpPage />
  </Layout>
)

export default ContactPage
