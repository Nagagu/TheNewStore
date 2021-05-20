import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import CartContainer from "./CartContainer";

const NavBar = (props) => {
  console.log(props);
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#thenewstore">The New Store</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#cart">
          <CartContainer />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
const mapStateToProps = (state) => ({
  cartState: state.cartState,
});
export default connect(mapStateToProps)(NavBar);
