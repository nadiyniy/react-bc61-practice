import React from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import NotFound from "./page/NotFound";
import { Layout } from "./components/Layout";

// PLAN
// - Підключити роутінг, додати BrowserRouter, Routes, Route
// - Створити роут для 404
// - Додати Navbar з Navlink
// - Зробити вкладені маршрути

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/me" element={<Navigate to="/" />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
