import {
  GET_SHIPPING_DETAILS_FAIL,
  GET_SHIPPING_DETAILS_REQUEST,
  GET_SHIPPING_DETAILS_SUCCESS,
} from "./shippingActiontypes";

const initialShippingState = {
  loading: false,
  data: {},
  msg: "",
  error: "",
};

const shippingReducer = (state = initialShippingState, action) => {
  switch (action.type) {
    case GET_SHIPPING_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_SHIPPING_DETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        msg: "SUCESS",
        error: "",
      };

    case GET_SHIPPING_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        msg: action.payload.msg,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default shippingReducer;
