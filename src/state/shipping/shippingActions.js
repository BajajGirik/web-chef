import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import {
  GET_SHIPPING_DETAILS_SUCCESS,
  EDIT_SHIPPING_DETAILS_SUCCESS,
  SET_SHIPPING_ERRORS,
  SET_SHIPPING_LOADING_TRUE,
  ADD_SHIPPING_DETAILS_SUCCESS,
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

export function getShippingDetailsSuccess(data) {
  return {
    type: GET_SHIPPING_DETAILS_SUCCESS,
    payload: data,
  };
}

export function addShippingDetailsSuccess(newDetails) {
  return {
    type: ADD_SHIPPING_DETAILS_SUCCESS,
    payload: newDetails,
  };
}

export function editShippingDetailsSuccess(updatedData) {
  return {
    type: EDIT_SHIPPING_DETAILS_SUCCESS,
    payload: updatedData,
  };
}

export function getShippingDetails() {
  return (dispatch) => {
    const shippingCollectionRef = collection(
      db,
      "users",
      auth.currentUser.uid,
      "shipping"
    );

    getDocs(shippingCollectionRef)
      .then((shipCollecSnap) => {
        const data = shipCollecSnap.docs.map((shipDocSnap) => ({
          id: shipDocSnap.id,
          ...shipDocSnap.data(),
        }));

        dispatch(getShippingDetailsSuccess(data));
      })
      .catch(() => {
        dispatch(setShippingErrors("", "Failed to get all shipping details"));
      });
  };
}

export function addShippingDetails(data, navigate) {
  return (dispatch) => {
    const shipCollRef = collection(
      db,
      "users",
      auth.currentUser.uid,
      "shipping"
    );

    addDoc(shipCollRef, data)
      .then((shipDocRef) => {
        dispatch(addShippingDetailsSuccess({ id: shipDocRef.id, ...data }));
        navigate(ROUTES.HOME);
      })
      .catch(() =>
        dispatch(
          setShippingErrors(
            "Some error occurred while updating shipping details. Please try again",
            "Failed to add new Shipping Details"
          )
        )
      );
  };
}

export function editShippingDetails(id, data, navigate) {
  return (dispatch, getState) => {
    const docRef = doc(db, "users", auth.currentUser.uid, "shipping", id);
    const shipDetails = getState().shipping.data;
    const editIndex = shipDetails.findIndex(
      (indvShipDet) => indvShipDet.id === id
    );

    const updatedShipDets = [
      ...shipDetails.slice(0, editIndex),
      { id, ...data },
      ...shipDetails.slice(editIndex + 1),
    ];

    setDoc(docRef, data, { merge: true })
      .then(() => {
        dispatch(editShippingDetailsSuccess(updatedShipDets));
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
