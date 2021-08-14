import React, { useState } from "react";
import { Button, NavItem } from "react-bootstrap";
import { connect } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = (props) => {
  console.log(props);
  const [cartContainerDisplay, setCartContainerDisplay] = useState(false);

  const showCartContainer = () => {
    setCartContainerDisplay(!cartContainerDisplay);
  };
  return (
    <div>
      <div className="cart-navbar">
        <Button variant="light" onClick={showCartContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-basket2-fill"
            viewBox="0 0 16 16"
          >
            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
          </svg>
        </Button>
        <span>{props.cartState.cartTotalNumber}</span>
      </div>
      <div className="cart-container">
        {cartContainerDisplay &&
          (props.cartState.cartTotalNumber === 0 ? (
            // <div className="cart-container empty">
            //   <h5> Your cart is empty</h5>
            // </div>
            <h5> Your cart is empty</h5>
          ) : (
            props.cartState.cartProducts.map((item) => {
              console.log("abriendo cart");
              return (
                // <div className="cart-container items">
                //   <CartItem key={item.id} item={item} />
                // </div>
                <CartItem key={item.id} item={item} />
              );
            })
          ))}
      </div>
    </div>
  );
  //cart.map y devuelve cada cartItem
};
const mapStateToProps = (state) => ({
  cartState: state.cartState,
});
export default connect(mapStateToProps)(CartContainer);
