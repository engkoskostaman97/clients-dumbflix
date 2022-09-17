import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate as navigate } from "react-router-dom";
import Logo from "../image/dumbflix.png";
import UserBlank from "../assets/blank-profile.png";
import Film from "../image/Vector.png";
import LogoutIcon from "../assets/logout.svg";

export default function Listtrans() {
  return (
    <Navbar
      fixed="top"
      bg="dark"
      variant="dark"
      expand="lg"
      className="navbg"
      style={{ height: "10vh" }}
    >
      <Container>
        <Nav>
          <Navbar.Brand as={Link} to="/admin">
            <img src={Logo} alt="" />
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav style={{ marginRight: "5%" }}>
            <NavDropdown
              title={
                <div>
                  <img
                    className="rounded-circle"
                    src={UserBlank}
                    alt="User"
                    style={{ width: "35px", marginTop: "15px" }}
                  />
                </div>
              }
              id="nav-dropdown"
            >
              <NavDropdown.Item
                style={{ backgroundColor: "black", color: "white" }}
                as={Link}
                to="/listfilms"
              >
                <img
                  src={Film}
                  alt="icon"
                  style={{ width: "25px", marginRight: "5px" }}
                />
                Film
              </NavDropdown.Item>
              <NavDropdown.Divider
                style={{ backgroundColor: "grey", color: "white" }}
              />
              <NavDropdown.Item
                // onClick={() => setIsLogin(false)}
                style={{ backgroundColor: "black", color: "white" }}
                as={Link}
                to="/"
              >
                <img
                  src={LogoutIcon}
                  alt="icon"
                  style={{ width: "25px", marginRight: "5px" }}
                />
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* ) : (
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <button
                className="btnregist me-2"
                onClick={() => setRegisterShow(true)}
              >
                Register
              </button>
              <button className="btnlogin" onClick={() => setLoginShow(true)}>
                Login
              </button>
            </Navbar.Collapse>
          )} */}
      </Container>
    </Navbar>
  );
}
