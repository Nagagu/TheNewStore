import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/Cart/cart-actions";

const Product = (props) => {
  const item = props.item;
  const { id, title, image, price } = item;

  return (
    <div className="product">
      <div>
        {" "}
        <img src={image} alt={title} />
      </div>

      <div className="content-product">
        {" "}
        <div className="productTitle">{title}</div>
        <div className="priceProduct">{price} €</div>
        <button
          type=""
          className="addButton"
          onClick={() => props.addToCart(item)}
        >
          ADD
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartState: state.cartState,
  };
};

export default connect(mapStateToProps, { addToCart })(Product);
