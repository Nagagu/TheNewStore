import * as actionTypes from "./cart-types";

const INITIAL_STATE = {
  cartTotalNumber: 0,

  cartProducts: [], // {id, title, img, price, amount}
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      let itemFromCartProducts = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (itemFromCartProducts != null) itemFromCartProducts.quantity++;
      let cartProducts =
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
      const itemFromCartProducts2 = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (itemFromCartProducts2 != null) itemFromCartProducts2.quantity--;
      const cartProducts2 = [
        ...state.cartProducts.filter((item) => item.quantity > 0),
      ];
      return {
        cartProducts: cartProducts2,
        cartTotalNumber: cartProducts2.length,
      };
    default:
      return state;
  }
};

export default cartReducer;
