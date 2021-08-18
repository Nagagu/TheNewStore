import React, { useRef, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import CartContainer from "./CartContainer";

const NavBar = (props) => {
  console.log(props);
  return (
    <>
      <div class="logo-container sticky">
        <div class="logo">
          <h1>The New Store</h1>
        </div>
        <nav class="menu">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">
                <CartContainer />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  cartState: state.cartState,
});
export default connect(mapStateToProps)(NavBar);
{
  /* <Navbar className="navbar sticky" bg="light" variant="light">
      <Navbar.Brand className="navbar-brand" href="#home">
        The New Store
      </Navbar.Brand>
      <Nav className="navlinks">
        {" "}
        <a href="#thenewstore">Categories</a>
        <a href="#about">About</a>
        <div style={{ float: "right" }} className="navlink-right">
          {" "}
          <Nav.Link href="#cart">
            <CartContainer />
          </Nav.Link>
        </div>
      </Nav>
    </Navbar> */
}
