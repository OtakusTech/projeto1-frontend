
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Input
} from "reactstrap";

import Pesquisa from '../../../src/components/Pesquisa';
import axios from 'axios';

class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {

    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                    <h5 className="text-white">Otakus Tech</h5>
                </NavbarBrand>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem>
                    <a href="#" className="text-white">Animes</a>
                  </NavItem>
                  <NavItem>
                    <a href="#" className="text-white">Tags</a>
                  </NavItem>
                </Nav>
                  <Nav className="align-items-lg-center ml-lg-auto" navbar>
                    <NavItem>
                      <Pesquisa className="pesquisa"/>
                      <Input placeholder="Pesquisar Anime" type="text" />
                    </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="/login"
                      target="_self"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-user mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Login
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default MainNavbar;
