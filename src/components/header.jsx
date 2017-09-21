import React from 'react';

import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              Our Awesome Store
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem
              eventKey={1}
              href="#">
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              href="#">
             Downloads
            </NavItem>
            <NavItem
              eventKey={3}
              href="#">
            </NavItem>
            <NavItem
              eventKey={4}
              href="#">
              Testmonials
            </NavItem>
            <NavItem
              eventKey={5}
              href="#">
              FAQ
            </NavItem>
            <NavItem
              eventKey={6}
              href="#">
              Contact Us
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default Header;