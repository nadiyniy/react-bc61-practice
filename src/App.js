import React from 'react'
import { Home } from './pages/Home'

// Створити редакс папки , додати слайс постів, додати стор, підключити редакс
// Додати селектори, витягнути дані з через редакс, додати operations, підключити mockapi
// Додати можливість видалення, редагування поста
// Додати роути для створення / видалення поста
// Додати час, коли був створений пост
// Додати користувача, щоб можна було залишати коментарі
// Організувати перехід на readMore. Дивитись коментарі для поста
//
export const App = () => {
	const posts = [{ id: '1', title: 'Hello', body: 'Lorem ipsum' }]
	return (
		<>
			<Home />
		</>
	)
}
