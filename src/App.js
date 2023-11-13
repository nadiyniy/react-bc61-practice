import React, { useEffect } from 'react'
import { Home } from './pages/Home'
import { useDispatch } from 'react-redux'
import { fetchPostsThunk } from './redux/posts/operations'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import LoginForm from './components/LoginForm'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { AddPost } from './pages/AddPost'
import { Register } from './components/Register'

// Створити редакс папки , додати слайс постів, додати стор, підключити редакс - [x] -
// Додати селектори, витягнути дані з через редакс, додати operations, підключити mockapi - [x] -
// Додати можливість видалення, редагування поста - [x] -
// Додати роути для створення / видалення поста - [x] -
// Додати час, коли був створений пост - [x] -
// Додати користувача, щоб можна було залишати коментарі - [x] -
// Додати логін користувача, переробити слайс, написати операції - [x] -
// Логаут - [x]
// Рефреш -
// Організувати перехід на readMore. Дивитись коментарі для поста -
// Зробити пошук по постам -
// Зробити фільтр по авторам -
// Зробити неможливість редагування та видалення чужих постів -
export const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPostsThunk())
	}, [dispatch])

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='addPost' element={<AddPost />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
				</Route>
				<Route path='*' element={<NotFound />}></Route>
			</Routes>
		</>
	)
}
