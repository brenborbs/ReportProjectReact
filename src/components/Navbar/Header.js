import React from "react";
import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from "reactstrap";
import NavbarBrand from "reactstrap/lib/NavbarBrand";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavbarBrand tag={Link} to="/">
          MyShop
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav navbar-nav mx-auto" navbar>
            <React.Fragment>
              <NavItem>
                <NavLink tag={Link} to="/report">
                  Report
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/shop">
                  Shop
                </NavLink>
              </NavItem>
            </React.Fragment>
          </Nav>
          <Nav className="nav navbar-nav pull-right" navbar>
            <NavItem>
              <NavLink
                className="btn btn-outline-success"
                tag={Link}
                to="/signin"
              >
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
