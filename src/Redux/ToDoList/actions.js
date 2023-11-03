import { DELETE_TODO, TOGGLE_TODO } from "./consts";

export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
