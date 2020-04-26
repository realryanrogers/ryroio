//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import {
//   Navbar,
//   Nav,
//   Form,
//   FormControl,
//   NavDropdown,
//   Button
// } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "../css/bootstrap-flatly.css"

const Header = props => (
  <Navbar bg="light" expand="md" variant="light">
    <Navbar.Brand href="#home">Ryan S. Rogers</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto" activeKey={props.location}>
        {props.menuLinks.map(link => (
          <Nav.Link
            className={
              link === props.menuLinks[props.menuLinks.length - 1]
                ? ""
                : "px-2 border-right "
            }
            key={link.name}
            href={link.link}
          >
            {link.name}
          </Nav.Link>
        ))}

        {/* <Nav.Link className="px-2 border-right" href="/">
          Me
        </Nav.Link>
        <Nav.Link className="px-2 border-right" href="/page-2">
          Experience
        </Nav.Link>
        <Nav.Link className="px-2 border-right" href="#home">
          Now
        </Nav.Link>
        <Nav.Link className="px-2 border-right" href="#link">
          GameDev
        </Nav.Link>
        <Nav.Link className="px-2 border-right" href="#link">
          Photography
        </Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
