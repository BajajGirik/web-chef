import {
  SET_ORDER_LOADING_TRUE,
  GET_ORDER_HISTORY_SUCCESS,
  PLACE_ORDER_SUCCESS,
  SET_ORDER_ERRORS,
} from "./orderActionTypes";

const intialOrderState = {
  loading: false,
  dataLoaded: false,
  history: [],
  msg: "",
  error: "",
};

const orderReducer = (state = intialOrderState, action) => {
  switch (action.type) {
    case SET_ORDER_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };

    case SET_ORDER_ERRORS:
      return {
        ...state,
        loading: false,
        msg: action.payload.msg,
        error: action.payload.error,
      };

    case GET_ORDER_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        dataLoaded: true,
        history: action.payload,
        msg: "SUCCESS",
      };

    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        history: [action.payload, ...state.history],
      };

    default:
      return state;
  }
};

export default orderReducer;
