import {
  DELETE_FROM_CART_SUCCESS,
  GET_CART_SUCCESS,
  SAVE_TO_CART_SUCCESS,
  SET_CART_ERRORS,
  SET_CART_LOADING_TRUE,
} from "./cartActionTypes";

const cartInitialState = {
  loading: false,
  size: 0,
  amount: 0,
  data: [],
  msg: "",
  error: "",
};

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case SET_CART_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };

    case SET_CART_ERRORS:
      return {
        ...state,
        loading: false,
        msg: action.payload.msg,
        error: action.payload.error,
      };

    case GET_CART_SUCCESS:
      return {
        loading: false,
        size: action.payload.size,
        data: action.payload.cartItems,
        amount: action.payload.amount,
        msg: "SUCCESS",
        error: "",
      };

    case SAVE_TO_CART_SUCCESS:
      return {
        ...state,
        data: action.payload.updatedCart,
        amount: state.amount + action.payload.changeInAmount,
        ...(!action.payload.itemPresentBefore && { size: state.size + 1 }),
      };

    case DELETE_FROM_CART_SUCCESS:
      return {
        ...state,
        data: action.payload.updatedCart,
        amount: state.amount - action.payload.changeInAmount,
        size: state.size - 1,
      };

    default:
      return state;
  }
};

export default cartReducer;
