import React, { useEffect, useState } from "react";
// import { Product } from "./Product";
import { connect } from "react-redux";
import { addToCart } from "../redux/Cart/cart-actions";
import Product from "./Product";

const ProductsList = (props) => {
  console.log(props);
  const [data, setData] = useState([]);

  // const [cartTotalNumber, setcartTotalNumber] = useState(0);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((obj) => setData(obj));
  };

  return (
    <div>
      <h1>Prueba</h1>
      <div className="productList">
        {data.map((item) => {
          return <Product item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
export default ProductsList;
