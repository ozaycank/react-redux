import React, { Component } from 'react';
import  {Navbar, NavbarBrand}  from 'reactstrap';

export default class navi extends Component {
  render() {
    return (
      <Navbar
      className="my-2"
      color="dark"
      dark
    >
      <NavbarBrand href="/">
        Reactstrap
      </NavbarBrand>
    </Navbar>
    )
  }
}
