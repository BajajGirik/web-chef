import {
  SET_CHECKOUT_SHIPPING_ID,
  SET_CHECKOUT_STAGE_SHIPPING,
} from "./checkoutActionTypes";

const initialCheckoutState = {
  stage: {
    shipping: false,
    summary: false,
  },
  shippingId: "",
};

const checkoutReducer = (state = initialCheckoutState, action) => {
  switch (action.type) {
    case SET_CHECKOUT_STAGE_SHIPPING:
      return {
        ...state,
        stage: {
          ...initialCheckoutState.stage,
          shipping: true,
        },
      };

    case SET_CHECKOUT_SHIPPING_ID:
      return {
        ...state,
        stage: {
          ...initialCheckoutState.stage,
          summary: true,
        },
        shippingId: action.payload,
      };

    default:
      return state;
  }
};

export default checkoutReducer;
