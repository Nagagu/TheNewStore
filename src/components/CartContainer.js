import React, { useState } from "react";
import { Button, NavItem } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = (props) => {
  console.log(props);
  const [cartContainerDisplay, setCartContainerDisplay] = useState(false);
  const { totalPrice } = useSelector((state) => state.cartState);

  const showCartContainer = () => {
    setCartContainerDisplay(!cartContainerDisplay);
  };
  return (
    <div>
      <div className="cart-navbar">
        <button variant="light" onClick={showCartContainer}>
          <i class="fa fa-shopping-cart"></i>
        </button>
        <span>{props.cartState.cartTotalNumber}</span>
      </div>

      {cartContainerDisplay && (
        <>
          <div className="cart-container">
            {props.cartState.cartTotalNumber === 0 ? (
              <h5> Your cart is empty</h5>
            ) : (
              props.cartState.cartProducts.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })
            )}{" "}
            <div className="total-conatiner">
              Total: {totalPrice.toFixed(2)}
            </div>
          </div>
        </>
      )}
    </div>
  );
  //cart.map y devuelve cada cartItem
};
const mapStateToProps = (state) => ({
  cartState: state.cartState,
});
export default connect(mapStateToProps)(CartContainer);
