import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductsList = (props) => {
  console.log(props);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

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
      <div className="search-container">
        <div className="input-search">
          {" "}
          <input
            type="text"
            id="search-bar"
            placeholder="What do you wish for today?"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <div>
          {" "}
          <a href="#">
            <div className="search-icon">
              <i class="fas fa-search"></i>
            </div>
          </a>
        </div>
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
