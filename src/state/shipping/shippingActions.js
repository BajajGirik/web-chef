import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  GET_SHIPPING_DETAILS_SUCCESS,
  EDIT_SHIPPING_DETAILS_SUCCESS,
  SET_SHIPPING_ERRORS,
  SET_SHIPPING_LOADING_TRUE,
  ADD_SHIPPING_DETAILS_SUCCESS,
  REMOVE_SHIPPING_DETAILS_SUCCESS,
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

export function removeShippingDetailsSuccess(id) {
  return {
    type: REMOVE_SHIPPING_DETAILS_SUCCESS,
    payload: id,
  };
}

export function getShippingDetails() {
  return (dispatch, getState) => {
    if (!getState().user.isLoggedIn) {
      dispatch(
        setShippingErrors(
          "Please Login/Signup to get Shipping Details",
          "User Not Logged in"
        )
      );
      return;
    }

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

export function addShippingDetails(data, navigateToShippingList) {
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
        navigateToShippingList();
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

export function editShippingDetails(id, data, navigateToShippingList) {
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
        navigateToShippingList();
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

export function removeShippingDetails(id) {
  return (dispatch) => {
    const docRef = doc(db, "users", auth.currentUser.uid, "shipping", id);
    deleteDoc(docRef)
      .then(() => dispatch())
      .catch(() =>
        dispatch(
          setShippingErrors(
            "Some error occurred while deleting shipping details. Please try again",
            "Failed to delete Shipping Details"
          )
        )
      );
  };
}
