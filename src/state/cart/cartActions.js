import {
  GET_CART_FAIL,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  SAVE_TO_CART_FAIL,
  SAVE_TO_CART_SUCCESS,
} from "./cartActionTypes";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";

export function getCartRequest() {
  return {
    type: GET_CART_REQUEST,
  };
}

export function getCartSuccess(cartItems, size) {
  return {
    type: GET_CART_SUCCESS,
    payload: { cartItems, size },
  };
}

export function getCartFail(error) {
  return {
    type: GET_CART_FAIL,
    payload: error,
  };
}

export function getCart() {
  return (dispatch) => {
    const cartCollectionRef = collection(
      db,
      "users",
      auth.currentUser.uid,
      "cart"
    );

    getDocs(cartCollectionRef)
      .then((docs) => {
        const cartItems = docs.docs.map((indivisualDoc) => ({
          productId: indivisualDoc.id,
          qty: indivisualDoc.data().qty,
        }));

        dispatch(getCartSuccess(cartItems, docs.size));
      })
      .catch((error) => dispatch(getCartFail("Failed to load cart info")));
  };
}

export function saveToCart(productID, qty) {
  return (dispatch) => {
    const docRef = doc(db, "users", auth.currentUser.uid, "cart", productID);
    setDoc(docRef, { qty: qty }, { merge: true })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
}
