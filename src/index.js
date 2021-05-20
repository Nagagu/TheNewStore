import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import ProductsList from "./components/ProductsList";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <NavBar />
    <ProductsList />
    {/* <GetProducts /> */}
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
