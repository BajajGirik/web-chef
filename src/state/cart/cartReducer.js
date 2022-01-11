import {
  DELETE_FROM_CART_FAIL,
  DELETE_FROM_CART_SUCCESS,
  GET_CART_FAIL,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  SAVE_TO_CART_FAIL,
  SAVE_TO_CART_SUCCESS,
} from "./cartActionTypes";

const cartInitialState = {
  loading: false,
  size: 0,
  amount: 0,
  data: [],
  error: "",
};

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case GET_CART_REQUEST:
      return {
        ...cartInitialState,
        loading: true,
      };

    case GET_CART_SUCCESS:
      return {
        loading: false,
        size: action.payload.size,
        data: action.payload.cartItems,
        amount: action.payload.amount,
        error: "",
      };

    case GET_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SAVE_TO_CART_SUCCESS:
      return {
        ...state,
        data: action.payload.updatedCart,
        amount: state.amount + action.payload.changeInAmount,
        ...(!action.payload.itemPresentBefore && { size: state.size + 1 }),
      };

    case SAVE_TO_CART_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_FROM_CART_SUCCESS:
      return {
        ...state,
        data: action.payload.updatedCart,
        amount: state.amount - action.payload.changeInAmount,
        size: state.size - 1,
      };

    case DELETE_FROM_CART_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
