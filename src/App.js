import React from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import NotFound from "./page/NotFound";

// PLAN
// - Підключити роутінг, додати BrowserRouter, Routes, Route
// - Створити роут для 404
// - Додати Navbar з Navlink
// - Зробити вкладені маршрути

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/me" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
