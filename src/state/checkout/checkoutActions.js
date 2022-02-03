import {
  SET_CHECKOUT_SHIPPING_ID,
  SET_CHECKOUT_STAGE_SHIPPING,
} from "./checkoutActionTypes";

export function setCheckoutStageShipping() {
  return {
    type: SET_CHECKOUT_STAGE_SHIPPING,
  };
}

export function setCheckoutShippingId(id) {
  return {
    type: SET_CHECKOUT_SHIPPING_ID,
    payload: id,
  };
}
