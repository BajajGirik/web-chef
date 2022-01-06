import {
  // GoogleAuthProvider,
  // signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import {
  GET_USER_SUCCESS,
  GET_USER_NOT_FOUND,
  SIGNIN_FAIL,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REFRESH_USER_STATE,
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

export function getUserNotFound() {
  return {
    type: GET_USER_NOT_FOUND,
  };
}

export function signInFail(error) {
  return {
    type: SIGNIN_FAIL,
    payload: error,
  };
}

export function logoutSuccess() {
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
      } else {
        dispatch(getUserNotFound());
      }
    });

    return unsubscribe;
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

export function loginViaEmailPass(email, password) {
  return (dispatch) => {
    dispatch(refreshUserState());

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
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
