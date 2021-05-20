import { combineReducers } from "redux";
import cartReducer from "./Cart/cart-reducers";

export default combineReducers({
  cartState: cartReducer,
});
