import { COUNT_PRODUCTS } from "./constants";

const initialState = {
  count: 0,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_PRODUCTS: {
      return {};
    }

    default:
      return state;
  }
};
