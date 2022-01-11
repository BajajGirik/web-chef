import {
  DELETE_FROM_CART_FAIL,
  DELETE_FROM_CART_SUCCESS,
  GET_CART_FAIL,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  SAVE_TO_CART_FAIL,
  SAVE_TO_CART_SUCCESS,
} from "./cartActionTypes";
import { setDoc, doc } from "firebase/firestore";
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

export function saveToCartSuccess(
  updatedCart,
  changeInAmount,
  itemPresentBefore
) {
  return {
    type: SAVE_TO_CART_SUCCESS,
    payload: { updatedCart, changeInAmount, itemPresentBefore },
  };
}

export function saveToCartFail(error) {
  return {
    type: SAVE_TO_CART_FAIL,
    payload: error,
  };
}

export function deleteFromCartSuccess(updatedCart, changeInAmount) {
  return {
    type: DELETE_FROM_CART_SUCCESS,
    payload: { updatedCart, changeInAmount },
  };
}

export function deleteFromCartFail(error) {
  return {
    type: DELETE_FROM_CART_FAIL,
    payload: error,
  };
}

export function saveToCart(productId, qty, changeInAmount) {
  return (dispatch, getState) => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const cart = getState().cart.data;
    const updatedCart = cart.filter((item) => item.productId !== productId);
    const itemPresentBefore = cart.some((item) => item.productId === productId);
    updatedCart += [{ productId, qty }];

    setDoc(docRef, { cart: updatedCart }, { merge: true })
      .then(() =>
        dispatch(
          saveToCartSuccess(updatedCart, changeInAmount, itemPresentBefore)
        )
      )
      .catch(() => dispatch(saveToCartFail("Failed to update cart")));
  };
}

export function deleteFromCart(productId, changeInAmount) {
  return (dispatch, getState) => {
    const docRef = doc(db, "users", auth.currentUser.uid, "cart", productId);
    const cart = getState().cart.data;
    const updatedCart = cart.filter((item) => item.productId !== productId);

    setDoc(docRef, { cart: updatedCart }, { merge: true })
      .then(() => dispatch(deleteFromCartSuccess(updatedCart, changeInAmount)))
      .catch(() => dispatch(saveToCartFail("Failed to update cart")));
  };
}
