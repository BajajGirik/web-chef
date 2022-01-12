import {
  // GoogleAuthProvider,
  // signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { getCartFail } from "../cart/cartActions";
import {
  getShippingDetails,
  getShippingDetailsFail,
} from "../shipping/shippingActions";
import {
  GET_USER_SUCCESS,
  GET_USER_NOT_FOUND,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REFRESH_USER_STATE,
  LOGIN_VIA_EMAIL_PASS_FAIL,
  LOGIN_VIA_EMAIL_PASS_SUCCESS,
  SIGNIN_VIA_EMAIL_PASS_SUCCESS,
  SIGNIN_VIA_EMAIL_PASS_FAIL,
} from "./userActionTypes";

export function refreshUserState() {
  return {
    type: REFRESH_USER_STATE,
  };
}

export function getUserSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    payload: user,
  };
}

export function getUserNotFound(msg) {
  return {
    type: GET_USER_NOT_FOUND,
    payload: msg,
  };
}

// export function signInFail(error) {
//   return {
//     type: SIGNIN_FAIL,
//     payload: error,
//   };
// }

export function signinViaEmailPassSuccess(user) {
  return {
    type: SIGNIN_VIA_EMAIL_PASS_SUCCESS,
    payload: user,
  };
}

export function signinViaEmailPassFail(error) {
  return {
    type: SIGNIN_VIA_EMAIL_PASS_FAIL,
    payload: error,
  };
}

export function loginViaEmailPassSuccess(user) {
  return {
    type: LOGIN_VIA_EMAIL_PASS_SUCCESS,
    payload: user,
  };
}

export function loginViaEmailPassFail(error) {
  return {
    type: LOGIN_VIA_EMAIL_PASS_FAIL,
    payload: error,
  };
}

export function logoutSuccess(msg) {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function logoutFail(error) {
  return {
    type: LOGOUT_FAIL,
    payload: error,
  };
}

export function getUser() {
  return (dispatch) => {
    dispatch(refreshUserState());
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(getUserSuccess(user));
        dispatch(getShippingDetails());
      } else {
        dispatch(getUserNotFound("User Not Logged In"));
        dispatch(getCartFail("User Not Logged In", ""));
        dispatch(getShippingDetailsFail("User Not Logged In", ""));
      }
    });

    unsubscribe();
  };
}

// export function signInViaGoogle() {
//   return (dispatch) => {
//     dispatch(refreshUserState());

//     const provider = new GoogleAuthProvider();
//     provider.addScope("profile");
//     provider.addScope("email");

//     signInWithPopup(auth, provider)
//       .then((result) => {
//         dispatch(getUserSuccess(result.user));
//       })
//       .catch((error) => {
//         dispatch(signInFail(error.message));
//       });
//   };
// }

export function signinViaEmailPass(email, password, navigate) {
  return (dispatch) => {
    dispatch(refreshUserState());

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        dispatch(signinViaEmailPassSuccess(result.user));
        navigate("/");
      })
      .catch((error) =>
        dispatch(signinViaEmailPassFail("Email already registered"))
      );
  };
}

export function loginViaEmailPass(email, password, navigate) {
  return (dispatch) => {
    dispatch(refreshUserState());

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        dispatch(loginViaEmailPassSuccess(result.user));
        navigate("/");
      })
      .catch((error) => dispatch(loginViaEmailPassFail("Invalid Credentials")));
  };
}

export function logout() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => dispatch(logoutSuccess()))
      .catch((error) => logoutFail(error));
  };
}
