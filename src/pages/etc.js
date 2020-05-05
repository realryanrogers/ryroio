import React, { Component } from "react"
import { Link, navigate } from "gatsby"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUpPage from "../components/newslettersignup"

const EtcPage = props => (
  <Layout location={props.location.pathname}>
    <SignUpPage />
  </Layout>
)

export default EtcPage
