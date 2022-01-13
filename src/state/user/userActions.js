import {
  // GoogleAuthProvider,
  // signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { setCartErrors, setCartLoadingTrue } from "../cart/cartActions";
import {
  getShippingDetails,
  setShippingErrors,
  setShippingLoadingTrue,
} from "../shipping/shippingActions";
import {
  GET_USER_SUCCESS,
  LOGOUT_SUCCESS,
  SET_USER_LOADING_TRUE,
  LOGIN_VIA_EMAIL_PASS_SUCCESS,
  SIGNIN_VIA_EMAIL_PASS_SUCCESS,
  SET_USER_ERRORS,
} from "./userActionTypes";

export function setUserLoadingTrue() {
  return {
    type: SET_USER_LOADING_TRUE,
  };
}

export function setUserErrors(msg, error) {
  return {
    type: SET_USER_ERRORS,
    payload: { msg, error },
  };
}

export function getUserSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    payload: user,
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

export function loginViaEmailPassSuccess(user) {
  return {
    type: LOGIN_VIA_EMAIL_PASS_SUCCESS,
    payload: user,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function getUser() {
  return (dispatch) => {
    dispatch(setUserLoadingTrue());
    dispatch(setCartLoadingTrue());
    dispatch(setShippingLoadingTrue());

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(getUserSuccess(user));
        dispatch(getShippingDetails());
      } else {
        dispatch(setUserErrors("User Not Logged In", ""));
        dispatch(setCartErrors("User Not Logged In", ""));
        dispatch(setShippingErrors("User Not Logged In", ""));
      }
    });

    unsubscribe();
  };
}

// export function signInViaGoogle() {
//   return (dispatch) => {
//     dispatch(setUserLoadingTrue());

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
    dispatch(setUserLoadingTrue());

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        dispatch(signinViaEmailPassSuccess(result.user));
        navigate("/");
      })
      .catch((error) =>
        dispatch(setUserErrors("", "Email already registered"))
      );
  };
}

export function loginViaEmailPass(email, password, navigate) {
  return (dispatch) => {
    dispatch(setUserLoadingTrue());

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        dispatch(loginViaEmailPassSuccess(result.user));
        navigate("/");
      })
      .catch((error) => dispatch(setUserErrors("", "Invalid Credentials")));
  };
}

export function logout() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => dispatch(logoutSuccess()))
      .catch((error) => setUserErrors("", "Error Logging Out"));
  };
}
