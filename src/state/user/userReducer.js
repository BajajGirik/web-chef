import { GET_USER_SUCCESS } from "./userActionTypes";

const userInitialState = {
  loading: false,
  isLoggedIn: false,
  user: {},
  error: "",
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        loading: false,
        isLoggedIn: true,
        user: action.payload,
        error: "",
      };
  }
};

export default userReducer;
