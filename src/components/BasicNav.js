import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  NavLink
} from 'reactstrap';

function BasicNav(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand tag={RRNavLink} to="/">
          <img
          alt="logo"
          src="/brand.png"
          style={{
            height: 40,
            width: 40
          }}
          /> Daniel Dusharm
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/languages">
                Languages
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={RRNavLink} to="/links">
                Links
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={RRNavLink} to="/projects">
                Projects
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Library
              </DropdownToggle>
              <DropdownMenu dark end>
              <DropdownItem disabled><NavbarText>This Site</NavbarText></DropdownItem>
                <NavLink href="/how-i-made-this-site/">
                  <DropdownItem>How I Made This Site</DropdownItem>
                </NavLink>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider>Some</DropdownItem>
                <DropdownItem disabled><NavbarText>Work History</NavbarText></DropdownItem>
                <DropdownItem>John Molinelli Inc.</DropdownItem>
                <DropdownItem>Bianco Security</DropdownItem>
                <DropdownItem>ASRC Federal</DropdownItem>
                <DropdownItem>Turtles of the Caribbean</DropdownItem>
                <DropdownItem>Freelance</DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Cool Stuff
              </DropdownToggle>
              <DropdownMenu dark end>
                <NavLink href="https://ethanschoonover.com/solarized/">
                  <DropdownItem>Solarized Theme</DropdownItem>
                </NavLink>
                <NavLink href="https://rust-lang.github.io/mdBook/">
                  <DropdownItem>mdBook</DropdownItem>
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default BasicNav;