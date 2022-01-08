import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
