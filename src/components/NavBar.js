import React, { useRef, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import CartContainer from "./CartContainer";

const NavBar = (props) => {
  console.log(props);
  return (
    <Navbar id="navbar" className="navbar sticky" bg="light" variant="light">
      <Navbar.Brand className="navbar-brand" href="#home">
        The New Store
      </Navbar.Brand>
      <Nav className="navlinks">
        <Nav.Link href="#thenewstore">Categories</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        {/* <div className="input-search" onChange={handleInputChange}>
          <input type="text" className="form-control" />
        </div> */}

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
