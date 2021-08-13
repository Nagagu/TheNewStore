import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import CartContainer from "./CartContainer";

const NavBar = (props) => {
  // const [inputValue, setInputValue] = useState("");
  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };
  console.log(props);
  return (
    <Navbar className="navBar" bg="light" variant="light">
      <Navbar.Brand href="#home">The New Store</Navbar.Brand>
      <Nav className="mr-auto">
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
