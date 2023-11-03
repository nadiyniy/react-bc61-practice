import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { productReducer } from './products/reduser';

const enhancer = devToolsEnhancer();
const rootReducer = combineReducers({
	products: productReducer,
});

export const store = createStore(rootReducer, enhancer);
