import React from 'react'
import books from './assets/books.json'
import { Booklist } from './components/Booklist'
import { Route, Routes } from 'react-router-dom'
import { Favorite } from './components/Favorite'
import { Header } from './components/Header'
import Trash from './page/Trash'

// Plan

// Зробити createSelector для фільтра
// Додати мокапі для архіва
// Перевезти дані в мокапі
// Зробити модалку для додавання книги
// Зробити роути для додавання книги

const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Booklist />} />
				<Route path='/favorite' element={<Favorite />} />
				<Route path='/trash' element={<Trash />} />
			</Routes>
		</div>
	)
}

export default App
