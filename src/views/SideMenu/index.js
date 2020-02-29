/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Sidebar, Menu, Header } from "semantic-ui-react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";

import "./styles.css";

const SideMenu = props => (
  <Sidebar
    as={Menu}
    borderless
    animation="overlay"
    width="thin"
    visible={props.isVisible}
    icon="labeled"
    vertical
    inverted
    color="green"
  >
    <Header as="h2" inverted>
      MENU
    </Header>
    <Link to="/" onClick={props.closeMenu}>
      <Menu.Item name="home">
        <HomeIcon />
        <p>Home</p>
      </Menu.Item>
    </Link>

    <Link to="/cart" onClick={props.closeMenu}>
      <Menu.Item name="ordering">
        <ShoppingCartIcon />
        <p>Shopping Cart</p>
      </Menu.Item>
    </Link>
    <Menu.Item name="account">
      <PersonIcon />
      <p>Account</p>
    </Menu.Item>
  </Sidebar>
);

SideMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired
};

export default SideMenu;
