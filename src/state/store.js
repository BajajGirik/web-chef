import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cartReducer from "./cart/cartReducer";
import shippingReducer from "./shipping/shippingReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shipping: shippingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
