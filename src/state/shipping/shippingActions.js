import { getCartSuccess, setCartErrors } from "../cart/cartActions";
import { doc, getDoc } from "firebase/firestore";
import {
  GET_SHIPPING_DETAILS_SUCCESS,
  SET_SHIPPING_ERRORS,
  SET_SHIPPING_LOADING_TRUE,
} from "./shippingActiontypes";
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

export function getShippingDetails() {
  return (dispatch) => {
    const userDocRef = doc(db, "users", auth.currentUser.uid);

    getDoc(userDocRef)
      .then((userSnap) => {
        let { name, phone, address, pincode, city, cart, amount } =
          userSnap.data();
        name === undefined && (name = "");
        phone === undefined && (phone = "");
        address === undefined && (address = "");
        pincode === undefined && (pincode = "");
        city === undefined && (city = "");
        cart === undefined && (cart = []);
        amount === undefined && (amount = 0);

        dispatch(getCartSuccess(cart, cart.length, amount));
        dispatch(
          getShippingDetailsSuccess(name, phone, address, pincode, city)
        );
      })
      .catch(() => {
        dispatch(setCartErrors("", "Failed to load cart info"));
        dispatch(setShippingErrors("", "Failed to load shipping details"));
      });
  };
}
