import React, { useEffect, useState } from "react";
// import { Product } from "./Product";
import { connect } from "react-redux";
import { addToCart } from "../redux/Cart/cart-actions";
import Product from "./Product";

const ProductsList = (props) => {
  console.log(props);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

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
      <div className="hero"></div>
      {/* <div className="input-search" onChange={handleInputChange}>
        <input
          type="text"
          placeholder="Search "
          className="inputSearch form-control"
        />
      </div> */}
      {/* <form className="search-container">
        <input
          type="text"
          id="search-bar"
          placeholder="What do you wish for today?"
          className="form-control"
        />
        <a href="#">
          <img
            className="search-icon"
            src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
          />
        </a>
      </form> */}
      <div className="search-container">
        <input
          type="text"
          id="search-bar"
          placeholder="What do you wish for today?"
          className="form-control"
        />
        {/* <a href="#">
          <img
            className="search-icon"
            src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
          />
        </a> */}
        <a href="#">
          <div className="search-icon">
            <i class="fas fa-search"></i>
          </div>
        </a>
      </div>
      <div className="productList">
        {data
          .filter((item) =>
            item.title.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((item) => {
            return <Product item={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};
export default ProductsList;
