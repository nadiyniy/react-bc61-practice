import React from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
	const { register, handleSubmit } = useForm()
	const submit = data => {
		console.log(data)
	}
	//Plan

	//  Створити редьюсер
	//  Створити стор
	//  Створити екшени та константи
	//  Підключити редакс до проекта та витягнути дані
	//  Піти на вихідні)
	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input {...register('text')} type='text' />
				<button>Add</button>
			</form>
			<ul>
				<li>
					1 <button>delete</button>
				</li>
				<li>
					2 <button>delete</button>
				</li>
			</ul>
		</div>
	)
}

export default App
