import { devToolsEnhancer } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { productReducer } from "./products/reduser";
import { cartReducer } from "./cart/reducer";

const enhancer = devToolsEnhancer();
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, enhancer);
