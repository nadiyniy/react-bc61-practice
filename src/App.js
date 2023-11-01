import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import NotFound from "./page/NotFound";
import { Layout } from "./components/Layout";
import Company from "./components/Company";
import Mission from "./components/Mission";
import { Posts } from "./page/Posts";
import SinglPost from "./page/SinglPost";

// PLAN
// - Підключити роутінг, додати BrowserRouter, Routes, Route - Vlad
// - Створити роут для 404 - Vugar
// - Додати Navbar з Navlink - Olena
// - Зробити вкладені маршрути - Maria
// - Зробити запит за даними і відмалювати розмітку - Kyrylo
// - Зробити кнопку назад useRef
// - Використати useSearchParams для пошуку
// - Додати lazy - Tanya

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<SinglPost />} />
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
