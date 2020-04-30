import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "../css/bootstrap-flatly.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Footer = props => (
  <Navbar
    fixed="bottom"
    variant="light"
    bg="light"
    className="justify-content-center"
  >
    <div>
      <a
        className="icon-link"
        href="https://twitter.com/realryanrogers"
        target="new"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        className="icon-link"
        href="https://www.instagram.com/realryanrogers/"
        target="new"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        className="icon-link"
        href="https://www.linkedin.com/in/ryansrogers/"
        target="new"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a className="icon-link" href="mailto:ryan@ryro.io">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
  </Navbar>
)

export default Footer
