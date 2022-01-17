import { getCartSuccess, setCartErrors } from "../cart/cartActions";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  GET_SHIPPING_DETAILS_SUCCESS,
  SAVE_SHIPPING_DETAILS_SUCCESS,
  SET_SHIPPING_ERRORS,
  SET_SHIPPING_LOADING_TRUE,
} from "./shippingActiontypes";
import { ROUTES } from "../../utils/constants";
import { auth, db } from "../../firebase";

export function setShippingLoadingTrue() {
  return {
    type: SET_SHIPPING_LOADING_TRUE,
  };
}

export function setShippingErrors(msg, error) {
  return {
    type: SET_SHIPPING_ERRORS,
    payload: { msg, error },
  };
}

export function getShippingDetailsSuccess(name, phone, address, pincode, city) {
  return {
    type: GET_SHIPPING_DETAILS_SUCCESS,
    payload: { name, phone, address, pincode, city },
  };
}

export function saveShippingDetailsSuccess(data) {
  return {
    type: SAVE_SHIPPING_DETAILS_SUCCESS,
    payload: data,
  };
}

export function getShippingDetails() {
  return (dispatch) => {
    const userDocRef = doc(db, "users", auth.currentUser.uid);

    getDoc(userDocRef)
      .then((userSnap) => {
        let { name, phone, address, pincode, city, amount } = userSnap.data();
        name === undefined && (name = "");
        phone === undefined && (phone = "");
        address === undefined && (address = "");
        pincode === undefined && (pincode = "");
        city === undefined && (city = "");
        amount === undefined && (amount = 0);

        dispatch(
          getShippingDetailsSuccess(name, phone, address, pincode, city)
        );
      })
      .catch(() => {
        dispatch(setShippingErrors("", "Failed to load shipping details"));
      });
  };
}

export function saveShippingDetails(data, navigate) {
  return (dispatch) => {
    const docRef = doc(db, "users", auth.currentUser.uid);

    setDoc(docRef, data, { merge: true })
      .then(() => {
        dispatch(saveShippingDetailsSuccess(data));
        navigate(ROUTES.HOME);
      })
      .catch(() =>
        dispatch(
          setShippingErrors(
            "Some error occurred while updating shipping details. Please try again",
            "Failed to update Shipping Details"
          )
        )
      );
  };
}
