import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';

// PLAN
// - Підключити роутінг, додати BrowserRouter, Routes, Route
// - Створити роут для 404
// - Додати Navbar з Navlink
// - Зробити вкладені маршрути

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
		</Routes>
	);
};

export default App;
