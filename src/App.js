import React, { useEffect } from "react";
import { Home } from "./pages/Home";
import { useDispatch } from "react-redux";
import { fetchPostsThunk } from "./redux/posts/operations";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import LoginForm from "./components/LoginForm";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { AddPost } from "./pages/AddPost";

// Створити редакс папки , додати слайс постів, додати стор, підключити редакс
// Додати селектори, витягнути дані з через редакс, додати operations, підключити mockapi
// Додати можливість видалення, редагування поста
// Додати роути для створення / видалення поста
// Додати час, коли був створений пост
// Додати користувача, щоб можна було залишати коментарі
// Організувати перехід на readMore. Дивитись коментарі для поста
//
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="addPost" element={<AddPost />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};
