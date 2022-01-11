import { getCartFail, getCartSuccess } from "../cart/cartActions";

export function getShippingDetails() {
  return (dispatch) => {
    const userDocRef = doc(db, "users", auth.currentUser.uid);

    getDoc(userDocRef)
      .then((userSnap) => {
        const { name, phone, address, pincode, city, cart, amount } =
          userSnap.data();
        name === undefined && (name = "");
        phone === undefined && (phone = "");
        address === undefined && (address = "");
        pincode === undefined && (pincode = "");
        city === undefined && (city = "");
        cart === undefined && (cart = []);
        amount === undefined && (amount = 0);

        dispatch(getCartSuccess(cart, cart.length, amount));
      })
      .catch(() => {
        dispatch(getCartFail("Failed to load cart info"));
      });
  };
}
