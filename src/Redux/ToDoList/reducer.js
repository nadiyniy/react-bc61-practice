import { DELETE_TODO } from "./consts";

const initialState = {
  todos: [
    { id: 1, todo: "Text", completed: false },
    { id: 2, todo: "Text", completed: false },
    { id: 3, todo: "Text", completed: false },
  ],
};

export const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }

    default:
      return state;
  }
};
