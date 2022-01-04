import {
  GET_USER_NOT_FOUND,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./userActionTypes";

const userInitialState = {
  loading: false,
  isLoggedIn: false,
  data: {},
  error: "",
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
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
  }
};

export default userReducer;
