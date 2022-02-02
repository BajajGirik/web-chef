import {
  SET_CHECKOUT_SHIPPING_INDEX,
  SET_CHECKOUT_STAGE_SHIPPING,
} from "./checkoutActionTypes";

const initialCheckoutState = {
  stage: {
    shipping: false,
    summary: false,
  },
  shippingIndex: -1,
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

    case SET_CHECKOUT_SHIPPING_INDEX:
      return {
        ...state,
        stage: {
          ...initialCheckoutState.stage,
          summary: true,
        },
        shippingIndex: action.payload,
      };

    default:
      return state;
  }
};

export default checkoutReducer;
