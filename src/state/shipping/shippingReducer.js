import {
  GET_SHIPPING_DETAILS_SUCCESS,
  EDIT_SHIPPING_DETAILS_SUCCESS,
  SET_SHIPPING_ERRORS,
  SET_SHIPPING_LOADING_TRUE,
  ADD_SHIPPING_DETAILS_SUCCESS,
  REMOVE_SHIPPING_DETAILS_SUCCESS,
} from "./shippingActiontypes";

const initialShippingState = {
  loading: false,
  data: [],
  msg: "",
  error: "",
};

const shippingReducer = (state = initialShippingState, action) => {
  switch (action.type) {
    case SET_SHIPPING_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };

    case SET_SHIPPING_ERRORS:
      return {
        ...state,
        loading: false,
        msg: action.payload.msg,
        error: action.payload.error,
      };

    case GET_SHIPPING_DETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        msg: "SUCESS",
        error: "",
      };

    case ADD_SHIPPING_DETAILS_SUCCESS:
      return {
        loading: false,
        data: [...state.data, action.payload],
        msg: "SUCESS",
        error: "",
      };

    case EDIT_SHIPPING_DETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        msg: "SUCESS",
        error: "",
      };

    case REMOVE_SHIPPING_DETAILS_SUCCESS:
      const newState = state.data.filter((item) => item.id !== action.payload);
      return {
        loading: false,
        data: newState,
        msg: "SUCESS",
        error: "",
      };

    default:
      return state;
  }
};

export default shippingReducer;
