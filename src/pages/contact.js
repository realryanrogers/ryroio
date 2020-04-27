import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = props => (
  <Layout location={props.location.pathname}>
    <SEO title="Contact" />
    <div>
      <b>Hit me up!</b>
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
  </Layout>
)

export default ContactPage
