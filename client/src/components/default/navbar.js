import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';

const SMNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar style={{ backgroundColor: '#2a363b', marginBottom: 35 }} dark expand="md">
      <NavbarBrand className="text-white">Solar Panel</NavbarBrand>
      <NavbarToggler onClick={toggle} className="border-white" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to="/" className="nav-link text-white">All</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Temperature" className="nav-link text-white">Temperature</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Voltage" className="nav-link text-white">Voltage</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Current" className="nav-link text-white">Current</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Power" className="nav-link text-white">Power</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default SMNavBar;