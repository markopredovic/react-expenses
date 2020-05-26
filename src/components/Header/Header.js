import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import { logout } from "../../actions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.token);

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <header className="mb-5">
      <Navbar bg="dark" variant="dark" expand="lg">
        <div className="container">
          <Navbar.Brand as={NavLink} to="/">
            Expenses
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {!isLoggedIn ? (
                <>
                  <Nav.Link as={NavLink} to="/register">
                    Signup
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/login">
                    Login
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown title="Dashboard" id="dashboard">
                  <NavDropdown.Item as={NavLink} to="/expenses" exact>
                    Expenses
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/expenses/new" exact>
                    Add expense
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Button} onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
