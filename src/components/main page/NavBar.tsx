import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../../redux/actions/action-theme";
import Logo from "./Logo";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import "./mainpage.css";
import { rootState } from "../../redux/reducers/rootReducer";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: rootState) => state.themeReducer.theme);
  return (
    <div>
      <Navbar className="navBar" expand="lg">
        <Container fluid>
          <div>
            <Logo />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="navBarOptions">
              <Nav.Link>
                <Link className="navBar" to={"/"}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navBar" to={"/store"}>
                  Store
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navBar" to={"/"}>
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
            {theme === "light" ? (
              <MdDarkMode onClick={() => dispatch(switchTheme())} />
            ) : (
              <MdOutlineLightMode onClick={() => dispatch(switchTheme())} />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
