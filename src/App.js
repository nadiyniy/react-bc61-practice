import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodo } from './Redux/ToDoList/selectors';
import { addTodo, changeTodo, deleteTodo, toggleTodo } from './Redux/ToDoList/actions';

const App = () => {
	const todos = useSelector(selectTodo);
	const dispatch = useDispatch();

	const { register, handleSubmit } = useForm();
	const submit = (data) => {
		dispatch(addTodo(data.text));
	};

	//Plan

	//  Створити редьюсер
	//  Створити стор
	//  Створити екшени та константи
	//  Підключити редакс до проекта та витягнути дані
	//  Піти на вихідні)
	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};
	const handleChangeText = (id) => {
		dispatch(changeTodo({ text: 'Hello World!', id }));
	};

	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input {...register('text')} type='text' />
				<button>Add</button>
			</form>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<input
							type='checkbox'
							onChange={() => {
								dispatch(toggleTodo(todo.id));
							}}
							checked={todo.completed}
						/>
						<span onClick={() => handleChangeText(todo.id)}> {todo.todo}</span>
						<button onClick={() => handleDelete(todo.id)}>delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
