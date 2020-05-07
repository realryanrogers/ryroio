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

//import "../css/bootstrap-flatly.css"
import NavbarBrand from "react-bootstrap/NavbarBrand"

function menuClassName(link) {
  var tempstr = " "
  if (link.name !== "Contact") {
    tempstr = tempstr + "px-2 border-right "
  }
  if (link.name === "Etc" || link.name === "Resources") {
    tempstr = tempstr + "line-through "
  }
  return tempstr
}

const Header = props => (
  <Navbar bg="light" expand="md" variant="light">
    <div className="container">
      <Navbar.Brand href="/">Ryan S. Rogers</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Nav className="ml-auto" activeKey={props.location}>
          {props.menuLinks.map(link => (
            <Nav.Link
              className={menuClassName(link)}
              key={link.name}
              href={link.link}
            >
              {link.name}
            </Nav.Link>
          ))}
        </Nav> */}
        <Nav className="ml-auto" activeKey={props.location}>
          <Nav.Link className="px-2 border-right " key="Me" href="/">
            Me
          </Nav.Link>
          <Nav.Link className="px-2 border-right " key="Now" href="/now/">
            Now
          </Nav.Link>
          <Nav.Link
            className="px-2 border-right "
            key="GameDev"
            href="/gamedev/"
          >
            GameDev
          </Nav.Link>
          <Nav.Link key="contact" href="/contact/">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
