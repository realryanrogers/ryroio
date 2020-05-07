import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
//import "../css/bootstrap-flatly.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Footer = props => (
  <footer className="footer-container">
    <div className="container">
      <a
        className="icon-link"
        href="https://twitter.com/realryanrogers"
        target="new"
      >
        <FaTwitter size="2.5em" />
      </a>
      <a
        className="icon-link"
        href="https://www.instagram.com/realryanrogers/"
        target="new"
      >
        <FaInstagram size="2.5em" />
      </a>
      <a
        className="icon-link"
        href="https://www.linkedin.com/in/ryansrogers/"
        target="new"
      >
        <FaLinkedin size="2.5em" />
      </a>
      <a className="icon-link" href="mailto:ryan@ryro.io">
        <FaEnvelope size="2.5em" />
      </a>
    </div>
  </footer>
)

export default Footer
