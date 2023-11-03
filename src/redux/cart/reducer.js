import { ADD_PRODUCT, DELETE_PRODUCT } from "./constants";

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
        items: state.items.filter((items) => items.id !== action.payload),
      };
    }
    case "increaseCartItem": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    }

    default:
      return state;
  }
};
