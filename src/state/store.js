import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import userReducer from "./user/userReducer";

// const rootReducer = combineReducers({
//   user: userReducer,
// });

export const store = createStore(userReducer, applyMiddleware(thunk, logger));
