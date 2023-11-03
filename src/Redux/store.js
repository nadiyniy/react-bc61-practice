import { combineReducers, createStore } from "redux";
import { toDoReducer } from "./ToDoList/reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

const rootReducer = combineReducers({ toDoList: toDoReducer });

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
