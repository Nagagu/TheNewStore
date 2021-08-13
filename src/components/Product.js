import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/Cart/cart-actions";

const Product = (props) => {
  const item = props.item;
  const { id, title, image, price } = item;
  const [cart, setCart] = useState([]);

  const CartProducts = (id, number) => {
    return {
      id: id,
      amount: number,
    };
  };

  const handleAddProduct = () => {
    var item = cart.find((o) => (o.id = id));

    var amount = 0;
    if (item === undefined) {
      amount = 1;
      setCart([...cart, CartProducts(id, amount)]);
    } else {
      item.amount += 1;
      setCart([...cart]);
    }
  };

  return (
    <div className="product">
      <img src={image} alt={title} />
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
  );
};
const mapStateToProps = (state) => {
  return {
    cartState: state.cartState,
  };
};

export default connect(mapStateToProps, { addToCart })(Product);
