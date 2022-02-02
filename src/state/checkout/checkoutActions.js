import {
  SET_CHECKOUT_SHIPPING_INDEX,
  SET_CHECKOUT_STAGE_SHIPPING,
} from "./checkoutActionTypes";

export function setCheckoutStageShipping() {
  return {
    type: SET_CHECKOUT_STAGE_SHIPPING,
  };
}

export function setCheckoutShippingIndex(index) {
  return {
    type: SET_CHECKOUT_SHIPPING_INDEX,
    payload: index,
  };
}
