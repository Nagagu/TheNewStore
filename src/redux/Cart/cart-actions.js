import * as actionTypes from "./cart-types";

export const addToCart = (item) => {
  return (dispatch) => {
    console.log("adding to cart");
    dispatch({
      type: actionTypes.ADD_PRODUCT,
      payload: {
        ...item,
      },
    });
    dispatch(getTotalPrice());
  };
};

export const getcartTotalNumber = () => {
  return (dispatch) => {
    console.log("getting number");
    dispatch({
      type: actionTypes.GET_CART_NUMBERS,
    });
  };
};

export const removeFromCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.REMOVE_PRODUCT,
      payload: {
        ...item,
      },
    });
    dispatch(getTotalPrice());
  };
};

export const getTotalPrice = () => {
  return {
    type: actionTypes.GET_TOTAL_PRICE,
    payload: {},
  };
};
