import { DELETE_TODO, TOGGLE_TODO } from "./consts";

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
    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }

    default:
      return state;
  }
};
