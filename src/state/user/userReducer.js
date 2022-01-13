import {
  GET_USER_SUCCESS,
  LOGIN_VIA_EMAIL_PASS_SUCCESS,
  LOGOUT_SUCCESS,
  SET_USER_ERRORS,
  SET_USER_LOADING_TRUE,
  SIGNIN_VIA_EMAIL_PASS_SUCCESS,
  // SIGNIN_FAIL,
} from "./userActionTypes";

const userInitialState = {
  loading: false,
  isLoggedIn: false,
  data: {},
  msg: "",
  error: "",
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };

    case SET_USER_ERRORS:
      return {
        ...state,
        loading: false,
        msg: action.payload.msg,
        error: action.payload.error,
      };

    case GET_USER_SUCCESS:
      return {
        loading: false,
        isLoggedIn: true,
        data: action.payload,
        msg: "SUCCESS",
        error: "",
      };

    // case SIGNIN_FAIL:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };

    case SIGNIN_VIA_EMAIL_PASS_SUCCESS:
      return {
        loading: false,
        isLoggedIn: true,
        data: action.payload,
        error: "",
      };

    case LOGIN_VIA_EMAIL_PASS_SUCCESS:
      return {
        loading: false,
        isLoggedIn: true,
        data: action.payload,
        error: "",
      };

    case LOGOUT_SUCCESS:
      return userInitialState;

    default:
      return state;
  }
};

export default userReducer;
