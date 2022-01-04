import { GET_PRODUCT_SUCCESS } from "./productActionTypes";

const productInitialState = {
  loading: false,
  products: [],
  error: "",
};

const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return {
        loading: false,
        prod: action.payload,
        error: "",
      };
  }
};

export default productReducer;
