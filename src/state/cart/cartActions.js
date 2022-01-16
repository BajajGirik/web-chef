import {
  DELETE_FROM_CART_SUCCESS,
  GET_CART_SUCCESS,
  SAVE_TO_CART_SUCCESS,
  SET_CART_ERRORS,
  SET_CART_LOADING_TRUE,
} from "./cartActionTypes";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";

export function setCartLoadingTrue() {
  return {
    type: SET_CART_LOADING_TRUE,
  };
}

export function setCartErrors(msg, error) {
  return {
    type: SET_CART_ERRORS,
    payload: { msg, error },
  };
}

export function getCartSuccess(cartItems, size, amount) {
  return {
    type: GET_CART_SUCCESS,
    payload: { cartItems, size, amount },
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

export function deleteFromCartSuccess(updatedCart, changeInAmount) {
  return {
    type: DELETE_FROM_CART_SUCCESS,
    payload: { updatedCart, changeInAmount },
  };
}

export function saveToCart(productId, qty, changeInAmount) {
  return (dispatch, getState) => {
    if (!getState().user.isLoggedIn) {
      dispatch(
        setCartErrors(
          "Please Login/Signup to add items to cart",
          "User Not Logged in"
        )
      );
      return;
    }

    const docRef = doc(db, "users", auth.currentUser.uid);
    const cart = getState().cart.data;
    const updateItemIndex = cart.findIndex(
      (item) => item.productId === productId
    );

    let updatedCart;
    if (updateItemIndex === -1) {
      updatedCart = [...cart, { productId, qty }];
    } else {
      updatedCart = [
        ...cart.slice(0, updateItemIndex),
        { productId, qty },
        ...cart.slice(updateItemIndex + 1),
      ];
    }

    setDoc(docRef, { cart: updatedCart }, { merge: true })
      .then(() =>
        dispatch(
          saveToCartSuccess(updatedCart, changeInAmount, updateItemIndex !== -1)
        )
      )
      .catch(() => dispatch(setCartErrors("", "Failed to update cart")));
  };
}

export function deleteFromCart(productId, changeInAmount) {
  return (dispatch, getState) => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const cart = getState().cart.data;
    const updatedCart = cart.filter((item) => item.productId !== productId);

    setDoc(docRef, { cart: updatedCart }, { merge: true })
      .then(() => dispatch(deleteFromCartSuccess(updatedCart, changeInAmount)))
      .catch(() => dispatch(setCartErrors("", "Failed to update cart")));
  };
}
