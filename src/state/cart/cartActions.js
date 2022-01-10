import {
  DELETE_FROM_CART_FAIL,
  DELETE_FROM_CART_SUCCESS,
  GET_CART_FAIL,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  SAVE_TO_CART_FAIL,
  SAVE_TO_CART_SUCCESS,
} from "./cartActionTypes";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase";

export function getCartRequest() {
  return {
    type: GET_CART_REQUEST,
  };
}

export function getCartSuccess(cartItems, size, amount) {
  return {
    type: GET_CART_SUCCESS,
    payload: { cartItems, size, amount },
  };
}

export function getCartFail(error) {
  return {
    type: GET_CART_FAIL,
    payload: error,
  };
}

export function saveToCartSuccess(productId, qty, changeInAmount) {
  return {
    type: SAVE_TO_CART_SUCCESS,
    payload: { productId, qty, changeInAmount },
  };
}

export function saveToCartFail(error) {
  return {
    type: SAVE_TO_CART_FAIL,
    payload: error,
  };
}

export function deleteFromCartSuccess(productId, changeInAmount) {
  return {
    type: DELETE_FROM_CART_SUCCESS,
    payload: { productId, changeInAmount },
  };
}

export function deleteFromCartFail(error) {
  return {
    type: DELETE_FROM_CART_FAIL,
    payload: error,
  };
}

export function getCart() {
  return async (dispatch) => {
    const userDocRef = doc(db, "users", auth.currentUser.uid);
    const cartRef = collection(db, "users", auth.currentUser.uid, "cart");

    try {
      const docs = await getDocs(cartRef);
      const cartItems = docs.docs.map((indivisualDoc) => ({
        productId: indivisualDoc.id,
        qty: indivisualDoc.data().qty,
      }));

      const userSnap = await getDoc(userDocRef);
      const amount = userSnap.data()?.amount ? userSnap.data().amount : 0;

      dispatch(getCartSuccess(cartItems, docs.size, amount));
    } catch (error) {
      dispatch(getCartFail("Failed to load cart info"));
    }
  };
}

export function saveToCart(productId, qty, changeInAmount) {
  return (dispatch) => {
    const docRef = doc(db, "users", auth.currentUser.uid, "cart", productId);
    setDoc(docRef, { qty: qty }, { merge: true })
      .then(() => dispatch(saveToCartSuccess(productId, qty, changeInAmount)))
      .catch(() => dispatch(saveToCartFail("Failed to update cart")));
  };
}

export function deleteFromCart(productId, changeInAmount) {
  return (dispatch) => {
    const docRef = doc(db, "users", auth.currentUser.uid, "cart", productId);
    deleteDoc(docRef)
      .then(() => dispatch(deleteFromCartSuccess(productId, changeInAmount)))
      .catch(() =>
        dispatch(deleteFromCartFail("Failed to delete item from cart"))
      );
  };
}
