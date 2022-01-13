import {
  GET_ORDER_HISTORY_SUCCESS,
  PLACE_ORDER_SUCCESS,
  SET_ORDER_ERRORS,
  SET_ORDER_LOADING_TRUE,
} from "./orderActionTypes";
import { collection, getDocs } from "firebase/firestore";

export function setOrderLoadingTrue() {
  return {
    type: SET_ORDER_LOADING_TRUE,
  };
}

export function setOrderErrors(msg, error) {
  return {
    type: SET_ORDER_ERRORS,
    payload: { msg, error },
  };
}

export function getOrderHistorySuccess(orderHistory) {
  return {
    type: GET_ORDER_HISTORY_SUCCESS,
    payload: orderHistory,
  };
}

export function placeOrderSuccess(order) {
  return {
    type: PLACE_ORDER_SUCCESS,
    payload: order,
  };
}

export function getOrderHistory() {
  return async (dispatch) => {
    dispatch(setOrderLoadingTrue());

    try {
      const collectionSnap = await getDocs(
        collection(db, "users", auth.currentUser.uid, "orderHistory")
      );
      const orderHistory = collectionSnap.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));

      dispatch(getOrderHistorySuccess(orderHistory));
    } catch (error) {
      dispatch(setOrderErrors("", "Failed to load order history"));
    }
  };
}
