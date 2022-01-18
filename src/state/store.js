import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cartReducer from "./cart/cartReducer";
import shippingReducer from "./shipping/shippingReducer";
import userReducer from "./user/userReducer";
import orderReducer from "./order/orderReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shipping: shippingReducer,
  orders: orderReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
