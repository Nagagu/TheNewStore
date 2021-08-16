import * as actionTypes from "./cart-types";

const INITIAL_STATE = {
  cartTotalNumber: 0,

  cartProducts: [], // {id, title, img, price, amount}

  totalPrice: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      const itemFromCartProducts = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (itemFromCartProducts != null) itemFromCartProducts.quantity++;
      const cartProducts =
        itemFromCartProducts == null
          ? [...state.cartProducts, { ...action.payload, quantity: 1 }]
          : [...state.cartProducts];

      return {
        cartProducts: cartProducts,
        cartTotalNumber: cartProducts.length,
      };
    case actionTypes.GET_CART_NUMBERS:
      return {
        ...state,
      };
    case actionTypes.REMOVE_PRODUCT:
      const itemFromCartProductsToRemove = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (itemFromCartProductsToRemove != null)
        itemFromCartProductsToRemove.quantity--;
      const newCartProducts = [
        ...state.cartProducts.filter((item) => item.quantity > 0),
      ];
      return {
        cartProducts: newCartProducts,
        cartTotalNumber: newCartProducts.length,
      };
    case actionTypes.GET_TOTAL_PRICE:
      if (state.cartProducts === null || state.cartProducts.length === 0)
        return { ...state };
      const totalPrice = state.cartProducts
        .map((item) => item.price * item.quantity)
        .reduce((acc, value) => acc + value);
      return { ...state, totalPrice: totalPrice };
    default:
      return state;
  }
};

export default cartReducer;
