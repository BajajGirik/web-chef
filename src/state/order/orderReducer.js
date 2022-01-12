import {
  GET_ORDER_HISTORY_FAIL,
  GET_ORDER_HISTORY_REQUEST,
  GET_ORDER_HISTORY_SUCCESS,
} from "./orderActionTypes";

const intialOrderState = {
  loading: false,
  history: [],
  msg: "",
  error: "",
};

const orderReducer = (state = intialOrderState, action) => {
  switch (action.type) {
    case GET_ORDER_HISTORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_ORDER_HISTORY_SUCCESS:
      return {
        ...state,
        history: action.payload,
        msg: "SUCCESS",
      };

    case GET_ORDER_HISTORY_FAIL:
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
