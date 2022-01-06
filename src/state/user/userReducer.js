import {
  GET_USER_NOT_FOUND,
  GET_USER_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REFRESH_USER_STATE,
  SIGNIN_FAIL,
} from "./userActionTypes";

const userInitialState = {
  loading: false,
  isLoggedIn: false,
  data: {},
  error: "",
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case REFRESH_USER_STATE:
      return {
        ...userInitialState,
        loading: true,
      };

    case GET_USER_SUCCESS:
      return {
        loading: false,
        isLoggedIn: true,
        data: action.payload,
        error: "",
      };

    case GET_USER_NOT_FOUND:
      return {
        ...state,
        loading: false,
      };

    case SIGNIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGOUT_SUCCESS:
      return userInitialState;

    case LOGOUT_FAIL:
      return {
        ...userInitialState,
        error: action.payload,
      };
  }
};

export default userReducer;
