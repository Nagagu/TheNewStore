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
    <div className="cartItem">
      <img src={item.image} />
      {item.title}

      <button onClick={() => handleRemoveFromCart(item)}> - </button>
      <div>{item.quantity}</div>
      <button onClick={() => handleAddToCart(item)}> + </button>
    </div>
    // <div className="cartItem">
    //   <Button variant="outline-dark" onClick={() => handleRemoveFromCart(item)}>
    //     -
    //   </Button>
    //   <div className="itemInCart">
    //     {item.title} {item.quantity}
    //   </div>
    //   <Button variant="outline-dark" onClick={() => handleAddToCart(item)}>
    //     +
    //   </Button>
    // </div>
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
