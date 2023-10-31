import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import NotFound from "./page/NotFound";
import { Layout } from "./components/Layout";
import Company from "./components/Company";
import Mission from "./components/Mission";

// PLAN
// - Підключити роутінг, додати BrowserRouter, Routes, Route
// - Створити роут для 404
// - Додати Navbar з Navlink
// - Зробити вкладені маршрути

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="company" element={<Company />} />
          <Route path="mission" element={<Mission />} />
        </Route>

        <Route path="me" element={<Navigate to="/" />} />
        <Route path="login" element={<h1>login</h1>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
