import {
  GET_CART_FAIL,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
} from "./cartActionTypes";

const cartInitialState = {
  loading: false,
  size: 0,
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
        error: "",
      };

    case GET_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
