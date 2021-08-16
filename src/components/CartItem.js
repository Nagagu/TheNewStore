import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/Cart/cart-actions";

const CartItem = (props) => {
  const item = props.item;
  const handleAddToCart = (item) => {
    console.log("hola");
    props.addToCart(item);
  };
  const handleRemoveFromCart = (item) => {
    console.log("removiendo");
    props.removeFromCart(item);
  };

  return (
    <>
      <div className="items">
        <img src={item.image} />
        <div className="item-title">{item.title}</div>
        <div className="buttons-container">
          {" "}
          <button onClick={() => handleRemoveFromCart(item)}>
            {" "}
            <i class="fas fa-minus-circle"></i>
          </button>
          <div>{item.quantity}</div>
          <button onClick={() => handleAddToCart(item)}>
            {" "}
            <i class="fas fa-plus-circle"></i>{" "}
          </button>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cartState: state.cartState,
  };
};

export default connect(mapStateToProps, { addToCart, removeFromCart })(
  CartItem
);
