import {
  GET_ORDER_HISTORY_SUCCESS,
  PLACE_ORDER_SUCCESS,
  SET_ORDER_ERRORS,
  SET_ORDER_LOADING_TRUE,
} from "./orderActionTypes";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { ROUTES } from "../../utils/constants";

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
  return async (dispatch, getState) => {
    if (!getState().user.isLoggedIn) {
      dispatch(
        setOrderErrors(
          "Please Login/Signup to add items to cart",
          "User Not Logged in"
        )
      );
      return;
    }

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

export function placeOrder(navigate) {
  return async (dispatch, getState) => {
    const orderCollection = collection(
      db,
      "users",
      auth.currentUser.uid,
      "orderHistory"
    );

    const shipId = getState().checkout.shippingId;
    const { id, ...shippingDetails } = getState().shipping.data.find(
      (item) => item.id === shipId
    );

    const data = {
      items: getState().cart.data,
      totalItems: getState().cart.size,
      orderedOn: serverTimestamp(),
      orderStatus: 0,
      shippingDetails: shippingDetails,
    };

    addDoc(orderCollection, data)
      .then((res) => {
        dispatch(
          placeOrderSuccess({
            id: res.id,
            orderedAt: new Date().toString(),
            ...data,
          })
        );

        navigate(ROUTES.ORDERS);
      })
      .catch(() =>
        dispatch(setOrderErrors("Unable to place order", "Some error occured"))
      );
  };
}
