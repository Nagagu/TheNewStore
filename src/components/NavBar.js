import React, { useRef, useState } from "react";
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
