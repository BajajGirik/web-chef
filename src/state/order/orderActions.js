import {
  GET_ORDER_HISTORY_FAIL,
  GET_ORDER_HISTORY_REQUEST,
  GET_ORDER_HISTORY_SUCCESS,
} from "./orderActionTypes";
import { collection, getDocs } from "firebase/firestore";

export function getOrderHistoryRequest() {
  return {
    type: GET_ORDER_HISTORY_REQUEST,
  };
}

export function getOrderHistorySuccess(orderHistory) {
  return {
    type: GET_ORDER_HISTORY_SUCCESS,
    payload: orderHistory,
  };
}

export function getOrderHistoryFail(msg, error) {
  return {
    type: GET_ORDER_HISTORY_FAIL,
    payload: { msg, error },
  };
}

export function getOrderHistory() {
  return async (dispatch) => {
    dispatch(getOrderHistoryRequest());

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
      dispatch(getOrderHistoryFail("", "Failed to load order history"));
    }
  };
}
