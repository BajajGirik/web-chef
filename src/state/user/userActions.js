import { auth } from "../../firebase";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_NOT_FOUND,
} from "./userActionTypes";

export function getUserRequest() {
  return {
    type: GET_USER_REQUEST,
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

export function getUser() {
  return (dispatch) => {
    dispatch(getUserRequest());
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(getUserSuccess(user));
      } else {
        dispatch(getUserNotFound());
      }
    });
  };
}
