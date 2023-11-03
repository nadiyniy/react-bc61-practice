import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO } from './consts';

export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const addTodo = (text) => {
	const newTodo = {
		id: crypto.randomUUID(),
		todo: text,
		completed: false,
	};

	return {
		type: ADD_TODO,
		payload: newTodo,
	};
};
export const changeTodo = ({ text, id }) => ({ type: UPDATE_TODO, payload: { text, id } });
