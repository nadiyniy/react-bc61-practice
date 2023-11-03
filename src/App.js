import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectTodo } from "./Redux/ToDoList/selectors";
import { DELETE_TODO } from "./Redux/ToDoList/consts";

const App = () => {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    console.log(data);
  };
  //Plan

  //  Створити редьюсер
  //  Створити стор
  //  Створити екшени та константи
  //  Підключити редакс до проекта та витягнути дані
  //  Піти на вихідні)
  const handleDelete = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input {...register("text")} type="text" />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              onChange={() => {}}
              checked={todo.completed}
            />
            {todo.todo} 1{" "}
            <button onClick={() => handleDelete(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
